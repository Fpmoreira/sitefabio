import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Tecnologias.css';

const tecnologias = [
  { nome: 'React', icone: 'devicon-react-original colored', experiencia: 'Experiência sólida com React em projetos de SPA, hooks, context API e integração com APIs REST e GraphQL.' },
  { nome: 'TypeScript', icone: 'devicon-typescript-plain colored', experiencia: 'Utilização avançada de TypeScript em aplicações Angular e React, com forte tipagem, generics e interfaces.' },
  { nome: 'HTML5', icone: 'devicon-html5-plain colored', experiencia: 'Criação de layouts semânticos e responsivos utilizando recursos modernos do HTML5.' },
  { nome: 'CSS3', icone: 'devicon-css3-plain colored', experiencia: 'Design responsivo com Flexbox, Grid, animações e uso de pré-processadores como SASS.' },
  { nome: 'JavaScript', icone: 'devicon-javascript-plain colored', experiencia: 'Experiência com ES6+, manipulação de DOM, promessas, async/await e bibliotecas como Axios.' },
  { nome: 'Java', icone: 'devicon-java-plain colored', experiencia: 'Experiência avançada com Java e Spring Boot em desenvolvimento de APIs REST e microsserviços.' },
  { nome: 'Python', icone: 'devicon-python-plain colored', experiencia: 'Uso de Python para automação, scripts e APIs com Flask/Django, além de aplicações com foco em dados.' },
  { nome: 'Angular', icone: 'devicon-angularjs-plain colored', experiencia: 'Desenvolvimento completo de SPAs com Angular, incluindo roteamento, serviços e reactive forms.' },
  { nome: 'Spring Boot', icone: 'devicon-spring-plain colored', experiencia: 'Criação de APIs REST seguras com Spring Boot, JPA, validações, autenticação JWT e testes.' },
  { nome: 'PostgreSQL', icone: 'devicon-postgresql-plain colored', experiencia: 'Modelagem relacional, queries complexas, views, procedures e integração com Spring Data.' },
  { nome: 'MongoDB', icone: 'devicon-mongodb-plain colored', experiencia: 'Utilização com Spring Data MongoDB, modelagem de documentos e consultas com Aggregation Framework.' },
];

const Tecnologias: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [tecnologiaSelecionada, setTecnologiaSelecionada] = useState<null | typeof tecnologias[0]>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  // Fechar modal ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setTecnologiaSelecionada(null);
      }
    };

    if (tecnologiaSelecionada) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tecnologiaSelecionada]);

  return (
    <section id="tecnologias" ref={ref} className={`tecnologias ${inView ? 'visible' : ''}`}>
      <div className="container">
        <h2>Tecnologias</h2>
        <ul className="grid">
          {tecnologias.map((tech) => (
            <motion.li
              key={tech.nome}
              className="tech-card"
              whileHover={{ scale: 1.1 }}
              onClick={() => setTecnologiaSelecionada(tech)}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <i className={tech.icone} aria-label={tech.nome}></i>
              <span>{tech.nome}</span>
            </motion.li>
          ))}
        </ul>

        {tecnologiaSelecionada && (
          <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
              <button className="modal-close" onClick={() => setTecnologiaSelecionada(null)}>×</button>
              <h3>{tecnologiaSelecionada.nome}</h3>
              <p>{tecnologiaSelecionada.experiencia}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tecnologias;
