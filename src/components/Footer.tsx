import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Fábio Prates Moreira. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
