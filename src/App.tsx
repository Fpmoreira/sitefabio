import React from 'react';
import Header from './components/Header';
import Inicio from './sections/Inicio';
import MinhaHistoria from './sections/MinhaHistoria';
import Apresentacao from './sections/Apresentacao';
import Tecnologias from './sections/Tecnologias';
import Certificacoes from './sections/Certificacoes';
import Projetos from './sections/Projetos';
import Contato from './sections/Contato';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Inicio />
        <MinhaHistoria />
        <Apresentacao />
        <Tecnologias />
        <Certificacoes />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;