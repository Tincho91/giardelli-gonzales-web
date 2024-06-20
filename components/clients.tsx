"use client";

import Marquee from 'react-fast-marquee';

const Clients = () => {

  const clientImages = [
    "/images/clients/pepsico.png",
    "/images/clients/pizzolo.png",
    "/images/clients/optica.png",
    "/images/clients/antares.png",
    "/images/clients/cabrales.png",
    "/images/clients/constructora.png",
    "/images/clients/electroterma.png",
    "/images/clients/distribuidora.png",
    "/images/clients/mccain.png",
    "/images/clients/aire.png",
    "/images/clients/serymat.png",
    "/images/clients/aguero.png",
    "/images/clients/cutaneo.png",
    "/images/clients/delcerro.png",
    "/images/clients/napolitano.png",
    "/images/clients/elmercedino.png",
    "/images/clients/naturalsur.png",
    "/images/clients/consca.png",
    "/images/clients/pampaynovillo.png",
  ];

  return (
    <div id='clientes' className="client-carousel bg-[#E8E8E8] py-10 z-50">
        <p className="text-[8vw] md:text-[4.4vw] xl:text-[60px] font-extrabold mt-10 pb-16 text-customBlue text-center">ALGUNOS DE NUESTROS CLIENTES</p>
        <Marquee
          direction="left"
        >
          {clientImages.map((imageSrc, index) => (
            <div key={index} className="flex items-center justify-center place-content-center overflow-hidden">
              <img src={imageSrc} alt={`client-${index}`} className="client-image object-center object-cover max-h-28 px-10 pb-10" />
            </div>
          ))}
        </Marquee>
        <Marquee
          direction="right"
        >
          {clientImages.map((imageSrc, index) => (
            <div key={index} className="flex items-center justify-center place-content-center overflow-hidden">
              <img src={imageSrc} alt={`client-${index}`} className="client-image object-center object-cover max-h-28 px-10 pb-10" />
            </div>
          ))}
        </Marquee>
    </div>
  );
};

export default Clients;