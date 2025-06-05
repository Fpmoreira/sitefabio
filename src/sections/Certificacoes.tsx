import React from 'react';
import { useInView } from 'react-intersection-observer';
import awsLogo from '../assets/aws-re-start-graduate.png';
import './Certificacoes.css';

const certificacoes = [
  {
    nome: 'AWS re/Start Graduate',
    logo: awsLogo,
    link: 'https://www.credly.com/badges/149b3e9d-82d3-4ff5-b0e6-aa3c30c428c4/public_url', 
  },
  //{
   // nome: 'Microsoft Certified: Azure Fundamentals',
   //  logo: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-azure-fundamentals.svg',
   //  link: 'https://learn.microsoft.com/en-us/certifications/', // Exemplo, substitua pelo seu link real
  //},
  //{
    //nome: 'Scrum Fundamentals Certified',
    //logo: 'https://www.scrumstudy.com/SFC-Badge.png',
    //link: 'https://www.scrumstudy.com/certification/scrum-fundamentals-certified', // Exemplo
  //},
];

const Certificacoes: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="certificacoes" ref={ref} className={`certificacoes ${inView ? 'visible' : ''}`}>
      <h2>Certificações</h2>
      <div className="certificacoes-grid">
        {certificacoes.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <img src={cert.logo} alt={cert.nome} />
            <span>{cert.nome}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificacoes;
