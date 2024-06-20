"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import FadeInFromTop from './animations/fadeInFromTop';

const Hero = () => {
  return (
    <div className='bg-[#143241]'>
      <div className='p-4 sm:py-7 xl:px-0 sm:px-[3rem] relative max-w-[1200px] mx-auto'>
        <div className="relative">
          <Swiper
            effect={'fade'}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            modules={[EffectFade, Autoplay, Pagination]}
            className='hero-swiper'
          >
            {[
              {
                large: '/images/banner1.png',
                small: '/images/banner1s.png',
                text: 'El pensamiento es el ',
                highlightedText: 'motor del cambio',
                restText: '',
                position: 'bottom-10 left-0 md:top-10',
                translate: '-translate-x-0 translate-y-0',
                align: 'text-left',
                bgPosition: "right top",
                maxWidth: "max-w-[70%] sm:max-w-[50%] md:max-w-[52%] lg:max-w-[40%]",
              },
              {
                large: '/images/banner2.png',
                small: '/images/banner2.png',
                text: 'Consultoría ',
                highlightedText: 'profesional',
                restText: ' para organizaciones',
                position: 'bottom-0 left-1/2',
                translate: '-translate-x-1/2 translate-y-0',
                align: 'text-center',
                bgPosition: "left bottom",
                maxWidth: "max-w-[75%] sm:max-w-[55%] md:max-w-[55%] lg:max-w-[40%]",
              },
              {
                large: '/images/banner3.png',
                small: '/images/banner3s.png',
                text: 'Procesos de transformación gestados ',
                highlightedText: 'por sus protagonistas',
                restText: '',
                position: 'bottom-10 right-0',
                translate: '-translate-x-0 translate-y-0',
                align: 'text-right',
                bgPosition: "right top",
                maxWidth: "max-w-[90%] sm:max-w-[75%] md:max-w-[85%] lg:max-w-[55%]",
              },
            ].map((slide, index) => (
              <SwiperSlide key={index}
                style={{
                  display: 'flex',
                  height: "100%",
                  maxHeight: "80vh",
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  position: 'relative'
                }}
              >
                <div
                  className={`sm:hidden absolute inset-0 bg-cover`}
                  style={{ 
                    backgroundImage: `url('${slide.small}')`,
                    backgroundPosition: slide.bgPosition
                  }}
                >
                  {/* Small screen image */}
                </div>
                <div
                  className="hidden sm:block absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.large}')`,
                  backgroundPosition: slide.bgPosition
                }}
                >
                  {/* Large screen image */}
                </div>

                <div className={`absolute ${slide.position} ${slide.translate} z-20 w-11/12 text-center md:text-left ${slide.maxWidth}`}>
                  <FadeInFromTop>
                    <h1 className={`text-white inline-block ${slide.align} text-3xl sm:text-3xl md:text-4xl bg-[#143241] p-3 justify-center`}>
                      {slide.text}
                      <span className="italic font-[700]">{slide.highlightedText}</span>
                      {slide.restText}
                    </h1>
                  </FadeInFromTop>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
