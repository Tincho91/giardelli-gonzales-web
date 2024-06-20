"use client"

import React, { useEffect, useRef, useState } from 'react';
import Container from './ui/container';
import FadeInFromTop from './animations/fadeInFromTop';



const HeroFooter = () => {


  return (
    <div className='bg-customBlue'>
      <div className=' max-w-[1200px] mx-auto'>
        <Container>
          <FadeInFromTop>
            <div className="flex flex-col items-center pt-10 lg:py-14">

              <p className="text-white text-center font-normal text-md lg:text-xl md:leading-[35px] px-1 md:px-10 mb-5 z-40">
                Somos un equipo de
                <span className="text-white font-bold text-xl lg:text-2xl"> profesionales </span>
                provenientes de distintas disciplinas que abarca de forma amplia, las problemáticas de las organizaciones a través del servicio de
                <span className="text-white font-black text-xl lg:text-2xl"> consultoría</span>.<br /><br />
                Guiamos
                <span className="text-white font-black text-xl lg:text-2xl"> procesos de cambio organizacional</span>
                , en un trabajo conjunto con quienes son parte de la empresa.<br /><br />
                Colaboramos desde el pensamiento, el análisis y las estrategias, para que los espacios de trabajo sean más
                <span className="text-white font-black text-xl lg:text-2xl"> eficientes y saludables </span>
                y las unidades de negocio y grupos empresarios, puedan
                <span className="text-white font-black text-xl lg:text-2xl"> desplegar todo su potencial</span>, superando los límites que se fueron trazando por distintas circunstancias.
              </p>
               
            </div>
          </FadeInFromTop>
        </Container>
        <div className="w-full relative max-h-[75vh]">
          <img src="/images/heroFooterBanner.png" alt="Banner" className="mx-auto w-full object-cover object-top hero-footer" />
        </div>
      </div>
    </div>
  )
}

export default HeroFooter