import React from 'react';
import { useInView } from 'react-intersection-observer';
import portifolio from '../assets/portifolio1.png';
import plataformaEad from '../assets/plataforma-EAD.png';
import './Projetos.css';

const projetos = [
  {
    nome: 'Portfólio Pessoal',
    imagem: portifolio,
    link: 'https://github.com/Fpmoreira/sitefabio',
  },
  {
    nome: 'App de Plataforma EAD',
    imagem: plataformaEad,
    link: 'https://github.com/Fpmoreira/EAD',
  },
  //{
  //  nome: 'Landing Page Empresa X',
  //  imagem: 'https://cdn-icons-png.flaticon.com/512/1010/1010657.png',
  //  link: 'https://empresa-x-site.netlify.app',
  //},
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
