import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Contato.css';

const contatos = [
  {
    nome: 'WhatsApp',
    icone: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
    link: 'https://wa.me/5511951731174?text=Olá,%20gostaria%20de%20falar%20com%20você!',
  },
  {
    nome: 'GitHub',
    icone: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
    link: 'https://github.com/Fpmoreira',
  },
  {
    nome: 'Instagram',
    icone: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
    link: 'https://instagram.com/fabiopratesmoreira/',
  },
  {
    nome: 'Facebook',
    icone: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
    link: 'https://facebook.com/fabio.prates.moreira/',
  },
  {
    nome: 'YouTube',
    icone: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
    link: 'https://youtube.com/@fabiopratesdev7304',
  },
  {
    nome: 'LinkedIn',
    icone: 'https://cdn-icons-png.flaticon.com/512/145/145807.png',
    link: 'https://linkedin.com/in/fábio-prates-moreira/',
  },
];

const Contato: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [formData, setFormData] = useState({
    empresa: '',
    email: '',
    titulo: '',
    mensagem: '',
  });

  const [mensagemStatus, setMensagemStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagemStatus('Enviando...');

    try {
      const response = await fetch('http://localhost:8080/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMensagemStatus('Mensagem enviada com sucesso!');
        setFormData({ empresa: '', email: '', titulo: '', mensagem: '' });
      } else {
        const erro = await response.text();
        setMensagemStatus(`Erro ao enviar: ${erro}`);
      }
    } catch (error) {
      setMensagemStatus('Erro de conexão com o servidor.');
    }
  };

  return (
    <section id="contato" ref={ref} className={`contato ${inView ? 'visible' : ''}`}>
      <h2>Contato</h2>

      <form className="formulario-contato" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="empresa">Nome/Empresa*</label>
          <input type="text" id="empresa" name="empresa" required value={formData.empresa} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="titulo">Título*</label>
          <input type="text" id="titulo" name="titulo" required value={formData.titulo} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem*</label>
          <textarea id="mensagem" name="mensagem" rows={5} required value={formData.mensagem} onChange={handleChange} />
        </div>

        <button type="submit">Enviar</button>
        {mensagemStatus && <p>{mensagemStatus}</p>}
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
