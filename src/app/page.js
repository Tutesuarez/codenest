'use client';
import Parallax from "../components/Paralax";
import Banner from "@/components/banner";
import Pack from "@/components/pack";
import ContactContainer from "@/components/ContactContainer";
import ServicioEcommerce from "@/components/Ecommerce";
import Quehacemos from "@/components/about";
import ServicesContainer from "@/components/ServicesContainer";

export default function Home() {

  return (
    <div className="min-h-screen">
      <div className="hidden md:block">
      </div>
      {/* Banner Principal */}
      <header className="relative h-screen w-full flex flex-col justify-center  items-center">
        <Banner />
      </header>
      <Parallax>

        {/* ¿Qué Hacemos? */}
        <section id="que-hacemos" className="p-5 md:py-10 justify-items-start sm:justify-items-center md:h-screen  bg-stone-950 text-stone-50 overflow-hidden">
          <Quehacemos/>          
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-10 bg-stone-950 md:h-screen">
          <ServicesContainer/>
        </section>

        {/*servicio 2 */}
        <section id="servicios_b" className="p-5 md:py-5 bg-stone-950 text-stone-50 justify-items-center">
          <ServicioEcommerce/>
        </section>

        {/* Promo para los que recien arranacan */}
        <section id="promo" className="promo_section p-10 xl:p-5 md:p-20  md:h-screen text-stone-50 justify-items-center" >
          <Pack />
        </section>
      </Parallax>

      <section id="contacto" className="py-32 px-10 md:h-screen ">
        <ContactContainer />
      </section>
    </div>
  );
}
