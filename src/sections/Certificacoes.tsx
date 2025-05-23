import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Certificacoes.css';

const certificacoes = [
  {
    nome: 'AWS Certified Cloud Practitioner',
    logo: 'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified-Cloud-Practitioner_badge.262x250.png',
    link: 'https://www.certmetrics.com/amazon/public/transcript.aspx', // Exemplo, substitua pelo seu link real
  },
  {
    nome: 'Microsoft Certified: Azure Fundamentals',
    logo: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-azure-fundamentals.svg',
    link: 'https://learn.microsoft.com/en-us/certifications/', // Exemplo, substitua pelo seu link real
  },
  {
    nome: 'Scrum Fundamentals Certified',
    logo: 'https://www.scrumstudy.com/SFC-Badge.png',
    link: 'https://www.scrumstudy.com/certification/scrum-fundamentals-certified', // Exemplo
  },
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
