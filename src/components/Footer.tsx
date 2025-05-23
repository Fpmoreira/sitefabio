import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', color: '#666' }}>
      © {new Date().getFullYear()} Todos os direitos reservados.
    </footer>
  );
};

export default Footer;