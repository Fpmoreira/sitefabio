import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Tecnologias.css';

const tecnologias = [
  { nome: 'React', icone: 'devicon-react-original colored' },
  { nome: 'TypeScript', icone: 'devicon-typescript-plain colored' },
  { nome: 'HTML5', icone: 'devicon-html5-plain colored' },
  { nome: 'CSS3', icone: 'devicon-css3-plain colored' },
  { nome: 'JavaScript', icone: 'devicon-javascript-plain colored' },
  { nome: 'Java', icone: 'devicon-java-plain colored' },
  { nome: 'Python', icone: 'devicon-python-plain colored' },
  { nome: 'Angular', icone: 'devicon-angularjs-plain colored' },
  { nome: 'Spring Boot', icone: 'devicon-spring-plain colored' },
  { nome: 'PostgreSQL', icone: 'devicon-postgresql-plain colored' },
  { nome: 'MongoDB', icone: 'devicon-mongodb-plain colored' },
];

const Tecnologias: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="tecnologias" ref={ref} className={`tecnologias ${inView ? 'visible' : ''}`}>
      <div className="container">
        <h2>Tecnologias</h2>
        <div className="grid">
          {tecnologias.map((tech) => (
            <div key={tech.nome} className="tech-card">
              <i className={tech.icone}></i>
              <span>{tech.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
