import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './MinhaHistoria.css';

const MinhaHistoria: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      id="minha-historia"
      className="minha-historia"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
    >
      <div className="container">
        <h2>Minha História</h2>
        <p>
          Minha história com a tecnologia começou ainda na década de 1990, período em que os computadores começaram a se tornar mais acessíveis à população brasileira. Em 1998, tive meu primeiro contato com um computador — o pai de um amigo comprou um, e nós passávamos horas explorando aquela máquina após a escola. Foi nesse momento que vi, pela primeira vez, algo relacionado à programação: o Visual Basic.
        </p>
        <p>
          O fascínio por tecnologia nasceu ali, mas ele só cresceria nos anos seguintes. Em 2003, com 17 anos, vivenciei um marco pessoal: meu irmão, que já trabalhava, trouxe o primeiro computador para dentro da nossa casa. Era um Positivo com monitor de tubo — e foi com ele que nasceu de vez o meu amor pela programação. Nesse mesmo ano, entrei no curso de informática do programa governamental “Jovem Cidadão”. Durante o curso, comecei a me aprofundar nas linguagens HTML, CSS, Java e Lua. Eram noites e madrugadas inteiras explorando fóruns, tutoriais e artigos com a velha internet discada.
        </p>
        <p>
          No entanto, minha realidade socioeconômica me levou a seguir outros caminhos profissionais por um tempo. Precisei pausar meu envolvimento direto com a área de TI para trabalhar em empregos fora do setor. Mas a paixão pela tecnologia nunca desapareceu. Continuei acompanhando as tendências do mercado e, nas horas vagas, criava minhas próprias páginas web — ainda que amadoras, feitas com HTML e CSS puro, elas eram um reflexo da minha persistência.
        </p>
        <p>
            Com o tempo, comecei a investir em cursos online, buscando me atualizar e desenvolver minhas habilidades em programação. Essa retomada dos estudos foi fundamental para me reaproximar do sonho que sempre tive: trabalhar com desenvolvimento de software.
        </p>
        <p>
            Em janeiro de 2021, com o apoio da minha família e amigos, dei um passo importante na minha trajetória: iniciei a graduação em Engenharia de Software. Desde então, mergulhei de cabeça nos estudos e me especializei em desenvolvimento Full-Stack. Hoje, tenho domínio de tecnologias como HTML, CSS, JavaScript puro e TypeScript com Angular, além de experiência sólida em Java, Spring Boot, PostgreSQL, MongoDB, Python e AWS.
        </p>
        <p>
            Ao longo dessa caminhada, também conquistei certificações e conhecimento em metodologias ágeis como Scrum e DevOps, aplicando esses conceitos para otimizar processos e garantir entregas eficientes em ambientes de nuvem.
        </p>
        <p>
            Agora, cursando o último semestre da faculdade, olho para trás com orgulho e para frente com determinação. Minha jornada não foi linear, mas foi construída com esforço, paixão e resiliência. Estou pronto para contribuir com projetos inovadores, crescer profissionalmente e seguir evoluindo em um universo que sempre foi, e sempre será, parte de mim: a tecnologia.
        </p>
      </div>
    </motion.section>
  );
};

export default MinhaHistoria;
