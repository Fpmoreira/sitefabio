import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setHidden(currentScrollY > lastScrollY);
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${hidden ? 'header--hidden' : ''}`}>
      <div className="header__container">
        <div className="logo">MeuLogo</div>
        <nav className="menu">
          {['Inicio', 'Minha História', 'Apresentação', 'Tecnologias', 'Certificações', 'Projetos', 'Contato'].map((item) => (
            <Link
              key={item}
              to={item.replace(/\\s/g, '')}
              spy={true}
              smooth={true}
              duration={500}
              className="menu__item"
              activeClass="active"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
