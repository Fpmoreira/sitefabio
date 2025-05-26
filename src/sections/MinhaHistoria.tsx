import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './MinhaHistoria.css';

const MinhaHistoria: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // true se quiser animar só uma vez
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [inView, controls]);

  return (
    <section id="minha-historia" className="minha-historia">
      <motion.div
        className="container"
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
      >
        <h2>Minha História</h2>
        <p>
          Minha trajetória profissional começou com o interesse por tecnologia ainda na juventude...
        </p>
        <p>
          Ao longo dos anos, busquei constante aprimoramento em desenvolvimento web, passando por
          diversas empresas e projetos desafiadores...
        </p>
        <p>
          Hoje, atuo como desenvolvedor fullstack, focando em entregar soluções escaláveis e com excelente
          experiência de usuário.
        </p>
      </motion.div>
    </section>
  );
};

export default MinhaHistoria;
