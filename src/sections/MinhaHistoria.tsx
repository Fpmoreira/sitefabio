import React from 'react';
import { useInView } from 'react-intersection-observer';
import './MinhaHistoria.css';

const MinhaHistoria: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="minha-historia" ref={ref} className={`minha-historia ${inView ? 'visible' : ''}`}>
      <h2>Minha História</h2>
      <p>
        Minha trajetória profissional começou com o interesse por tecnologia ainda na juventude...
        {/* Aqui você pode continuar descrevendo sua carreira em detalhes */}
      </p>
      <p>
        Ao longo dos anos, busquei constante aprimoramento em desenvolvimento web, passando por
        diversas empresas e projetos desafiadores...
      </p>
      <p>
        Hoje, atuo como desenvolvedor fullstack, focando em entregar soluções escaláveis e com excelente
        experiência de usuário.
      </p>
    </section>
  );
};

export default MinhaHistoria;
