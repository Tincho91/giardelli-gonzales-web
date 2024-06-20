import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import HeroFooter from "@/components/heroFooter";
import Methodology from "@/components/methodology";
import Services from "@/components/services";


export const revalidate = 0;

const HomePage = () => {

  return (
    <>
      <Hero />
      <HeroFooter />
      <Services />
      <Methodology />
      <Clients />
      <Contact />
    </>
  )
};

export default HomePage;
