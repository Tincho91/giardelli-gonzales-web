"use client"

import React, { useEffect, useRef, useState } from 'react';
import Container from './ui/container';
import FadeInFromTop from './animations/fadeInFromTop';



const HeroFooter = () => {
  

  return (
    <div className='bg-customBlue'>
      <Container>
        <div className="flex flex-col items-center pt-5">

          <p className="text-white text-center font-normal lg:text-lg leading-[45px] lg:leading-[60px] px-5 mb-5 z-40">
            Somos un <span className="text-white font-black">equipo de profesionales</span> provenientes de distintas disciplinas que abarca de forma amplia, las problemáticas de las organizaciones a través del <span className="text-white font-black">servicio de consultoría</span>.
            Colaboramos desde el pensamiento, el análisis y las estrategias, para que los espacios de trabajo sean más eficientes y saludables y las unidades de negocio y grupos empresarios, puedan <span className="text-white font-black">desplegar todo su potencial</span>, superando los límites que se fueron trazando por distintas circunstancias.
          </p>
          <FadeInFromTop>
            <img src="/images/openingquotes.png" alt="Opening Quotes" className="mx-auto z-40 mb-[-4%]" style={{ width: "82px", height: "77px" }} />
          </FadeInFromTop>
        </div>
      </Container>
      <div className="w-full relative">
        <img src="/images/vector.png" alt="Vector" className="absolute top-0 w-full mt-[-21%]" />
        <img src="/images/heroFooterBanner.png" alt="Banner" className="mx-auto w-full max-h-[100vh] object-cover object-top hero-footer" />
      </div>
    </div>
  )
}

export default HeroFooter