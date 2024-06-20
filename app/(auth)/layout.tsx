"use client";

import Container from "@/components/ui/container";
import FadeInFromTop from "@/components/animations/fadeInFromTop";
import FadeIn from "@/components/animations/fadeIn";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white relative flex-column items-center justify-center w-full min-h-screen">
      <div className="absolute sm:top-[-1%] md:top-[-2%] lg:top-[-10%] xl:top-[-20%] left-0 right-0 z-[0]">
        <img src="/images/positionsVector.png" className="w-full" />
      </div>
      <Container>
        <div className="relative flex flex-col justify-center py-10">
          <FadeInFromTop>
            <p className="text-center text-customBlue mb-4 text-md md:text-xl pb-10">
              Realizamos la inclusión de nuevos talentos para ocupar mandos medios y gerenciales en diferentes organizaciones. 
              <br />
              <br />
              <span className='font-bold'> Te invitamos a cargar tu CV y sumarte a nuestra base de datos. </span>
            </p>
          </FadeInFromTop>
          <FadeIn>
            <div className="flex items-center justify-center">
              {children}
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};

