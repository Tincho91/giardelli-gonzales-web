"use client";
import React from 'react';
import Container from './ui/container';
import CustomAccordion from './ui/customAccordion';

const Services: React.FC = () => {
  const items = [
    {
      title: 'Gestionamos procesos de cambio organizacional',
      iconInactive: '/images/1.png',
      iconActive: '/images/1n.png',
      content: (
        <p className="text-white text-center font-normal md:leading-[35px] px-10 mb-5 z-40">
          Existen distintas problemáticas que afectan a algunas empresas u organizaciones y que las impulsan a requerir procesos de cambio para poder revertirlas. Es común observar serias dificultades a la hora de gestionar las diversas instancias de la empresa. Solo  a modo de ejemplo:  alto nivel de conflictividad entre los colaboradores, imposibilidad de delegar, bajos rindes globales, lentitud de respuestas al entorno, pérdida de claridad de los objetivos.
          <br /><br />
          Lideramos los cambios necesarios en los sistemas organizacionales por medio de modificaciones en la 
          <span className="text-white font-bold text-xl lg:text-2xl"> estructura </span>
          ,en los
          <span className="text-white font-black text-xl lg:text-2xl"> procesos </span>.
          y especialmente, en los 
          <span className="text-white font-black text-xl lg:text-2xl"> sistemas de gestión </span>
          vigentes. Estos cambios favorecen el 
          <span className="text-white font-black text-xl lg:text-2xl"> funcionamiento organizacional </span>
          y tienden a una mejor
          <span className="text-white font-black text-xl lg:text-2xl"> calidad de vida </span>
          de quienes trabajan en la organización.<br /><br />
          <span className="text-white font-black text-xl lg:text-2xl italic"> La ventaja de transitar este camino es descubrir y construir EL MEJOR SISTEMA posible para alcanzar las metas de la organización. </span>
        </p>
      )
    },
    {
      title: 'Facilitamos el traspaso generacional en empresas familiares',
      iconInactive: '/images/2.png',
      iconActive: '/images/2n.png',
      content: (
        <p className="text-white text-center font-normal md:leading-[35px] px-10 mb-5 z-40">
          Lideramos el proceso de 
          <span className="text-white font-bold text-xl lg:text-2xl"> continuidad intergeneracional  </span>
          de manera constructiva y sostenida en el tiempo con la colaboración de todos los miembros de la familia involucrados.
          <br /><br />
          Atendemos con nuestra intervención, tanto a la generación en proceso de retiro como a la generación que pronto asumirá nuevas responsabilidades.
          <br /><br />
          Un proceso de traspaso generacional implica, a la vez, 
          <span className="text-white font-black text-xl lg:text-2xl"> un cambio paulatino de actores </span>
          como un
          <span className="text-white font-black text-xl lg:text-2xl"> plan de profesionalización y mejora de los sistemas</span>. Ambos procesos se potencian propiciando una nueva empresa con un nuevo futuro por delante. 
        </p>
      )
    },
    {
      title: 'Intervenimos para la mejora de conflictos laborales',
      iconInactive: '/images/3.png',
      iconActive: '/images/3n.png',
      content: (
        <p className="text-white text-center font-normal md:leading-[35px] px-10 mb-5 z-40">
          La dinámica interna del mundo de las organizaciones en general y de las empresas en particular, muchas veces puede resultar hostil y problemática. Gestionar una empresa y conducir a otras personas requiere cualidades personales vinculadas a la formación y a herramientas específicas. Atendemos esas demandas y damos soluciones operativas y concretas.
          <br /><br />
          <span className="text-white font-bold text-xl lg:text-2xl italic"> Propiciamos el camino para que cada uno sea la mejor versión de sí. </span>
        </p>
      )
    },
    {
      title: 'Construimos y desarrollamos áreas de recursos humanos',
      iconInactive: '/images/4.png',
      iconActive: '/images/4n.png',
      content: (
        <p className="text-white text-center font-normal md:leading-[35px] px-10 mb-5 z-40">
          La gestión de los colaboradores resulta una importante fuente de estrés laboral y de baja en la productividad. Contar o no con el área de RR.HH. resulta determinante para revertir esos efectos. Nuestro aporte consiste en intervenir en la construcción y desarrollo del área, con diversos modelos y acorde a las dimensiones de la empresa.
          <br /><br />
          <span className="text-white font-bold text-xl lg:text-2xl italic"> Armar la estructura y definir las funciones del área de recursos humanos, constituye una prioridad para las empresas de hoy.</span>
        </p>
      )
    },
    {
      title: 'Seleccionamos mandos medios y cargos gerenciales',
      iconInactive: '/images/5.png',
      iconActive: '/images/5n.png',
      content: (
        <p className="text-white text-center font-normal md:leading-[35px] px-10 mb-5 z-40">
          Creamos las condiciones necesarias para la inclusión de 
          <span className="text-white font-bold text-xl lg:text-2xl"> nuevos talentos </span>
          que agreguen valor a la organización. Entrevistamos, evaluamos y seleccionamos mandos medios y gerenciales de manera profesional, con el fin de que el perfil del candidato se ajuste al rol que la empresa necesita.
          <br /><br />
          <span className="text-white font-bold text-xl lg:text-2xl italic"> Buscamos  nuevos líderes capaces de consolidar y guiar a los equipos de trabajo de manera tal de aumentar la productividad y garantizar buenas relaciones interpersonales. </span>
        </p>
      )
    },
    {
      title: 'Realizamos capacitaciones para gestar transformaciones',
      iconInactive: '/images/6.png',
      iconActive: '/images/6n.png',
      content: (
        <p className="text-white text-center font-normal md:leading-[35px] px-10 mb-5 z-40">
          Una organización abierta al aprendizaje continuo, es una organización preparada para ser eficiente y, al mismo tiempo, hacerle frente a cualquier cambio que el contexto proponga.
          <br /><br />
          <span className="text-white font-bold text-xl lg:text-2xl italic"> Tener talentos en nuestra organización nos acerca a ser mejores, pero si a eso le sumamos el valor del aprendizaje continuo, nos transformamos en especiales. </span>
        </p>
      )
    },
    {
      title: 'Desarrollamos nuevas dinámicas en los sistemas de comercialización',
      iconInactive: '/images/7.png',
      iconActive: '/images/7n.png',
      content: (
        <p className="text-white text-center font-normal md:leading-[35px] px-10 mb-5 z-40">
          Acompañamos los procesos que permiten la conformación o mejora de las áreas de 
          <span className="text-white font-bold text-xl lg:text-2xl"> comercialización, </span>
          a través de la generación de pensamiento estratégico y delineando los roles que ocupan las personas que las integran. 
          <br /><br />
          <span className="text-white font-bold text-xl lg:text-2xl italic"> Los sistemas comerciales son mucho más que definir qué comprar, qué producir y qué vender.</span>
        </p>
      )
    }
  ];

  return (
    <div className='bg-customBlue relative' id="servicios">
      <Container>
        <div className="flex justify-center items-center pt-10">
          <div className="bg-white w-full flex justify-center">
            <p className="font-[900] text-[7vw] md:text-[4vw] xl:text-[55px] text-customBlue p-2">
              ¿QUÉ HACEMOS?
            </p>
          </div>
        </div>

        <CustomAccordion items={items} />
      </Container>
    </div>
  );
};

export default Services;
