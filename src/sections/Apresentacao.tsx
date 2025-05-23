import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Apresentacao.css';

const Apresentacao: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="apresentacao" ref={ref} className={`apresentacao ${inView ? 'visible' : ''}`}>
      <h2>Apresentação</h2>
      <div className="video-grid">
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_PT"
            title="Apresentação em Português"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>Apresentação em Português</p>
        </div>
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_EN"
            title="Apresentação em Inglês"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>Apresentação em Inglês</p>
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;
