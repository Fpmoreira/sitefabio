import React from 'react';
import { motion } from 'framer-motion';
import './Inicio.css';
import minhaFoto from '../assets/minha-foto.jpg';

const Inicio: React.FC = () => {
  return (
    <section id="Inicio" className="inicio">
      <motion.div
        className="inicio__image"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={minhaFoto} alt="Minha Foto" />
      </motion.div>
      <motion.div
        className="inicio__texto"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Bem-vindo!</h1>
        <p>
          Sou um profissional com anos de experiência em desenvolvimento de software, apaixonado por tecnologia e boas práticas de código. Ao longo da minha carreira, venho criando soluções inovadoras e contribuindo para projetos de impacto.
        </p>
      </motion.div>
    </section>
  );
};

export default Inicio;
