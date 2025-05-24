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
            Sou um profissional com anos de experiência em desenvolvimento de software, apaixonado por tecnologia e boas práticas de código. Ao longo da minha carreira, venho criando soluções inovadoras e contribuindo para projetos de impacto.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Inicio;



