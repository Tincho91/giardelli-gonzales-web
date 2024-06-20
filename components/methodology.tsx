import Container from "./ui/container";
import FadeInFromLeft from "./animations/fadeInFromLeft";
import FadeInFromRight from "./animations/fadeInFromRight";

const Methodology = () => {
  return (
    <div id="metodologia" className="bg-customBlue relative pt-10">
      <Container>
        <div className="flex justify-center items-center pb-10">
          <div className="bg-white w-full flex justify-center p-2">
            <p className="font-[900] text-[7vw] md:text-[4vw] xl:text-[55px] text-customBlue w-full text-center">
              ¿CÓMO LO HACEMOS?
            </p>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 pb-10 items-center">
          <div className="md:col-start-1 md:col-end-2 flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p className="text-white text-center font-normal text-md lg:text-xl md:leading-[20px] lg:leading-[30px] px-1 md:px-5 mb-5 z-40">
              El trabajo de la consultora comienza con una entrevista de 
              <span className="text-white font-bold text-xl lg:text-2xl"> mutuo conocimiento </span> 
              en la que evaluamos la pertinencia de un futuro trabajo conjunto y sus diferentes 
              <span className="text-white font-bold text-xl lg:text-2xl"> instancias posibles de intervención. </span><br />
              A partir de esa definición inicial, profundizamos el conocimiento de la organización llevando a cabo un 
              <span className="text-white font-bold text-xl lg:text-2xl"> proceso diagnóstico. </span><br />
              Posteriormente, presentamos el relevamiento realizado y proponemos un 
              <span className="text-white font-bold text-xl lg:text-2xl"> plan de trabajo conjunto </span>
              , estableciendo objetivos, tiempos y sus correspondientes indicadores de medición.
            </p>
          </div>
          <div className="md:col-start-2 md:col-end-3 flex justify-center mb-4 md:mb-0">
            <img
              src="/images/metodologia2.png" // replace with your image path
              alt="Descripción de la imagen"
              className="object-contain w-full"
            />
          </div>
          <div className="md:col-start-1 md:col-end-3 items-center">
            <p className="text-white text-center font-bold text-xl lg:text-2xl mt-4 md:mt-0 italic">
              Realizamos intervenciones que permiten pensar el negocio desde sus diversas aristas. Las mismas redundan en un proceso virtuoso de transformación.
            </p>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Methodology;