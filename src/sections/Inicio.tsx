import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Inicio.css';
import minhaFoto from '../assets/minha-foto.jpg';

const Inicio: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const variantsEsquerda = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const variantsDireita = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="inicio" className="inicio" ref={ref}>
      <div className="container">
        <motion.div
          className="inicio__image"
          variants={variantsEsquerda}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
        >
          <img src={minhaFoto} alt="Minha Foto" />
        </motion.div>
        <motion.div
          className="inicio__texto"
          variants={variantsDireita}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
        >
          <h1>Bem-vindo!</h1>
          <p>
            Olá. eu sou o Fábio, profissional apaixonado por tecnologia desde a infância e com forte trajetória de superação. Formado em Engenharia de Software, tenho experiência em desenvolvimento Full-Stack com domínio nas tecnologias: HTML, CSS, JavaScript, TypeScript (Angular), Java, Spring Boot, PostgreSQL, MongoDB, Python e AWS. Atuo com metodologias ágeis como Scrum e DevOps, aplicando práticas de entrega contínua e otimização de processos em nuvem. Sou uma pessoa autodidata, resiliente e proativo, destaco-me pela capacidade de adaptação, aprendizado contínuo e colaboração em equipe, sinto-me preparado para contribuir com projetos inovadores e ambientes desafiadores.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Inicio;



