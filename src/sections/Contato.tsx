import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Contato.css';

const contatos = [
  {
    nome: 'WhatsApp',
    icone: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
    link: 'https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20falar%20com%20você!',
  },
  {
    nome: 'GitHub',
    icone: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
    link: 'https://github.com/seuusuario',
  },
  {
    nome: 'Instagram',
    icone: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
    link: 'https://instagram.com/seuusuario',
  },
  {
    nome: 'Facebook',
    icone: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
    link: 'https://facebook.com/seuusuario',
  },
  {
    nome: 'YouTube',
    icone: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
    link: 'https://youtube.com/seucanal',
  },
  {
    nome: 'LinkedIn',
    icone: 'https://cdn-icons-png.flaticon.com/512/145/145807.png',
    link: 'https://linkedin.com/in/seuusuario',
  },
];

const Contato: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contato" ref={ref} className={`contato ${inView ? 'visible' : ''}`}>
      <h2>Contato</h2>

      <form className="formulario-contato" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="empresa">Nome/Empresa*</label>
          <input type="text" id="empresa" name="empresa" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="titulo">Título*</label>
          <input type="text" id="titulo" name="titulo" required />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem*</label>
          <textarea id="mensagem" name="mensagem" rows={5} required />
        </div>

        <button type="submit">Enviar</button>
      </form>

      <div className="contato-grid">
        {contatos.map((contato, index) => (
          <a
            key={index}
            href={contato.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contato-icone"
            title={contato.nome}
            aria-label={`Link para ${contato.nome}`}
          >
            <img src={contato.icone} alt={contato.nome} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contato;