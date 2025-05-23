import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Tecnologias.css';

// Dados de tecnologias (nome, imagem, descrição)
const tecnologias = [
  {
    nome: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    descricao: 'Experiência em criação de SPAs com React, hooks, context API, roteamento e otimizações de performance.',
  },
  {
    nome: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    descricao: 'Uso avançado de TypeScript para interfaces tipadas, inferência de tipos e segurança em tempo de compilação.',
  },
  {
    nome: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    descricao: 'Semântica, acessibilidade e estrutura HTML moderna para front-ends robustos.',
  },
  {
    nome: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    descricao: 'Experiência com flexbox, grid, animações, responsividade e design system.',
  },
  {
    nome: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    descricao: 'JS moderno com ES6+, manipulação de DOM, promessas, fetch, APIs, estruturas e algoritmos.',
  },
];

const Tecnologias: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [tecnologiaSelecionada, setTecnologiaSelecionada] = useState<number | null>(null);

  return (
    <section id="tecnologias" ref={ref} className={`tecnologias ${inView ? 'visible' : ''}`}>
      <h2>Tecnologias</h2>
      <div className="tecnologias-grid">
        {tecnologias.map((tech, index) => (
          <div
            key={index}
            className="tecnologia-card"
            onClick={() => setTecnologiaSelecionada(index)}
            onMouseLeave={() => setTecnologiaSelecionada(null)}
          >
            <img src={tech.logo} alt={tech.nome} />
            <span>{tech.nome}</span>
            {tecnologiaSelecionada === index && (
              <div className="descricao">{tech.descricao}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologias;
