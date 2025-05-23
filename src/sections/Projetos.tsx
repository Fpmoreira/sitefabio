import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Projetos.css';

const projetos = [
  {
    nome: 'Portfólio Pessoal',
    imagem: 'https://cdn-icons-png.flaticon.com/512/1023/1023656.png',
    link: 'https://seuportfolio.com',
  },
  {
    nome: 'App de Finanças',
    imagem: 'https://cdn-icons-png.flaticon.com/512/3024/3024605.png',
    link: 'https://github.com/seuusuario/app-financas',
  },
  {
    nome: 'Landing Page Empresa X',
    imagem: 'https://cdn-icons-png.flaticon.com/512/1010/1010657.png',
    link: 'https://empresa-x-site.netlify.app',
  },
];

const Projetos: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="projetos" ref={ref} className={`projetos ${inView ? 'visible' : ''}`}>
      <h2>Projetos</h2>
      <div className="projetos-grid">
        {projetos.map((projeto, index) => (
          <a
            key={index}
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="projeto-card"
          >
            <img src={projeto.imagem} alt={projeto.nome} />
            <span>{projeto.nome}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
