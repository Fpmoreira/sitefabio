import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Tecnologias.css';

const tecnologias = [
  { nome: 'React', icone: 'devicon-react-original colored', experiencia: 'Experiência no desenvolvimento de interfaces web utilizando React, com foco na componentização, reutilização de código e construção de aplicações dinâmicas e responsivas. Domínio dos principais hooks como useState, useEffect e useContext, além de prática com manipulação de estados, props e ciclo de vida dos componentes. Familiaridade com React Router para navegação entre páginas e integração com APIs REST. Aplicação de boas práticas de organização de código e estruturação de componentes.Experiência sólida com React em projetos de SPA, hooks, context API e integração com APIs REST e GraphQL.' },

  { nome: 'TypeScript', icone: 'devicon-typescript-plain colored', experiencia: 'Utilização avançada de TypeScript em aplicações Angular e React, com forte tipagem, generics e interfacesExperiência no uso de TypeScript para desenvolvimento front-end, agregando segurança e robustez ao código por meio de tipagem estática. Prática na definição de tipos, interfaces e generics para tornar o desenvolvimento mais previsível e confiável. Utilização de TypeScript em conjunto com React, garantindo maior controle sobre props, estados e componentes. Familiaridade com configuração de projetos TypeScript e integração com ferramentas de build e bibliotecas externas.' },

  { nome: 'HTML5', icone: 'devicon-html5-plain colored', experiencia: 'Conhecimento sólido em HTML5 para estruturação de páginas web semânticas, acessíveis e compatíveis com diferentes dispositivos. Experiência na criação de layouts organizados utilizando elementos semânticos como <header>, <nav>, <section>, <article> e <footer>. Aplicação de boas práticas para SEO, acessibilidade e usabilidade. Utilização de HTML5 em conjunto com CSS, JavaScript e frameworks como React para construção de interfaces modernas e funcionais.Criação de layouts semânticos e responsivos utilizando recursos modernos do HTML5.' },

  { nome: 'CSS3', icone: 'devicon-css3-plain colored', experiencia: 'Experiência no uso de CSS3 para estilização de interfaces web modernas e responsivas. Domínio de propriedades como flexbox, grid, transições, animações e media queries, permitindo a criação de layouts adaptáveis e visualmente atraentes. Aplicação de boas práticas de organização do código CSS, com uso de classes reutilizáveis e estrutura modular. Familiaridade com metodologias como BEM e utilização de CSS3 em conjunto com pré-processadores (como SASS) e frameworks utilitários como Tailwind CSS.sponsivo com Flexbox, Grid, animações e uso de pré-processadores como SASS.' },

  { nome: 'JavaScript', icone: 'devicon-javascript-plain colored', experiencia: 'Experiência com ES6+, manipulaçExperiência no desenvolvimento de funcionalidades interativas e dinâmicas em aplicações web utilizando JavaScript moderno (ES6+). Conhecimento de manipulação do DOM, tratamento de eventos, consumo de APIs (REST), e uso de estruturas como arrays, objetos, funções assíncronas (async/await) e promessas. Prática com conceitos fundamentais como escopo, closures, callbacks, e orientação a objetos. Utilização do JavaScript em conjunto com frameworks como React para criação de interfaces ricas e reativas.ão de DOM, promessas, async/await e bibliotecas como Axios.' },

  { nome: 'Java', icone: 'devicon-java-plain colored', experiencia: 'EConhecimento avançado em Java, com forte domínio da programação orientada a objetos, design patterns e princípios SOLID. Experiência no desenvolvimento de aplicações robustas e escaláveis, incluindo aplicações desktop, sistemas distribuídos e APIs RESTful. Prática com frameworks como Spring Boot, Hibernate e JPA para criação de back-ends eficientes e seguros. Familiaridade com testes automatizados utilizando JUnit e Mockito, além de integração com bancos de dados relacionais via JDBC e ORM. Atuação com controle de transações, gerenciamento de dependências com Maven e utilização de boas práticas como tratamento de exceções, logging e versionamento de código.xperiência avançada com Java e Spring Boot em desenvolvimento de APIs REST e microsserviços.' },

  { nome: 'Python', icone: 'devicon-python-plain colored', experiencia: 'Uso de Python para automação, scConhecimento básico em Python, com experiência na criação de scripts simples para automação de tarefas e resolução de problemas. Familiaridade com os principais conceitos da linguagem, como variáveis, estruturas de controle, funções, listas, dicionários e manipulação de arquivos. Prática inicial com bibliotecas como Pandas e Requests, além do uso de ambientes virtuais e execução de scripts em linha de comando. Interesse em aprofundar o uso da linguagem para aplicações web, automação e análise de dados.ripts e APIs com Flask/Django, além de aplicações com foco em dados.' },

  { nome: 'Angular', icone: 'devicon-angularjs-plain colored', experiencia: 'DesenvolvimenExperiência intermediária em Angular, com desenvolvimento de aplicações web estruturadas e escaláveis. Domínio da criação e gerenciamento de componentes, utilização avançada de data binding, diretivas personalizadas e serviços para compartilhamento de dados. Prática com roteamento complexo, lazy loading e módulos para otimização do desempenho. Utilização de formulários reativos e template-driven para validação e coleta de dados. Integração com APIs REST utilizando o HttpClient e manipulação de observables com RxJS. Conhecimento em boas práticas de arquitetura, testes unitários e organização de código para aplicações de médio porte.to completo de SPAs com Angular, incluindo roteamento, serviços e reactive forms.' },

  { nome: 'Spring Boot', icone: 'devicon-spring-plain colored', experiencia: 'Experiência avançada em desenvolvimento de aplicações back-end utilizando Spring Boot, com domínio na criação de APIs RESTful robustas, seguras e escaláveis. Forte conhecimento em configuração e customização de beans, injeção de dependências, e gerenciamento do ciclo de vida dos componentes Spring. Prática com integração de bancos de dados relacionais (JPA/Hibernate), transações, e uso de repositórios para operações CRUD eficientes. Experiência em segurança de aplicações com Spring Security, autenticação e autorização, além de tratamento avançado de exceções e logging. Implementação de testes automatizados (JUnit, Mockito) e configuração de ambientes para diferentes perfis. Familiaridade com arquitetura de microservices, mensageria (RabbitMQ, Kafka) e deployment em containers (Docker).' },

  { nome: 'PostgreSQL', icone: 'devicon-postgresql-plain colored', experiencia: 'Experiência avançada no uso de PostgreSQL para gerenciamento de bancos de dados relacionais em projetos de médio e grande porte. Domínio na modelagem de dados, normalização, criação de schemas complexos, índices, e otimização de consultas para performance. Prática com procedimentos armazenados (functions), triggers, views, e controle de transações garantindo integridade e consistência dos dados. Conhecimento em tuning de banco para alta disponibilidade e replicação. Experiência com backup, restauração, e migração de dados, além da integração de PostgreSQL com aplicações back-end utilizando ORMs como Hibernate e frameworks como Spring Boot.' },

  { nome: 'MongoDB', icone: 'devicon-mongodb-plain colored', experiencia: 'Experiência no uso do MongoDB como banco de dados NoSQL para armazenamento de dados flexível e escalável em aplicações web. Domínio na modelagem de documentos, criação de coleções, índices e consultas complexas utilizando a linguagem de consulta própria do MongoDB. Prática com operações CRUD, agregações e otimização de performance. Familiaridade com replicação, sharding e backups para garantir alta disponibilidade e resiliência dos dados. Integração com back-ends utilizando drivers oficiais e frameworks como Node.js e Spring Boot.' },
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
