import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setHidden(currentScrollY > lastScrollY);
    lastScrollY = currentScrollY;
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    'Inicio',
    'Minha História',
    'Apresentação',
    'Tecnologias',
    'Certificações',
    'Projetos',
    'Contato'
  ];

  const formatId = (item: string) =>
    item.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s/g, '-');

  return (
    <header className={`header ${hidden ? 'header--hidden' : ''}`}>
      <div className="header__container">
        <div className="logo">MeuLogo</div>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`menu ${menuOpen ? 'menu--open' : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item}
              to={formatId(item)}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="menu__item"
              activeClass="active"
              onClick={closeMenu}
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
