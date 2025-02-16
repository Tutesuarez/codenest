'use client';
import Parallax from "../components/Paralax";
import ProcessSteps from "@/components/ServicesCard";
import Banner from "@/components/banner";
import Pack from "@/components/pack";
import ContactContainer from "@/components/ContactContainer";
import ServicioEcommerce from "@/components/Ecommerce";
import RevealTextSegundo from "@/components/TextReveal2";
import Quehacemos from "@/components/about";

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
        <section id="que-hacemos" className="p-5 md:py-10  md:h-screen justify-items-center bg-stone-950 text-stone-50">
          <Quehacemos/>          
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-10 bg-stone-950">
          <div className=" flex flex-col justify-items-center">
            <div className=" text-center max-w-2xl mx-auto  justify-items-center space-y-4 text-stone-50">
              <div className="mb-10 max-w-fit">
                <p className=" text-teal-400  font-bold">SERVICIOS</p>
              </div>
              <RevealTextSegundo>
              <h2 className="text-4xl font-heading font-bold">
                Soluciones digitales para tu negocio
              </h2>
              <p className="text-gray-400">
                Todo lo que necesitas para establecer tu presencia digital.
              </p>
              </RevealTextSegundo>
            </div>
            <ProcessSteps />
          </div>
        </section>

        {/*servicio 2 */}
        <section id="servicios_b" className="p-5 md:py-5 bg-stone-950 text-stone-50">
          <ServicioEcommerce/>
        </section>

        {/* Promo para los que recien arranacan */}
        <section id="promo" className="p-10 md:p-20  md:h-screen text-stone-50" >
          <Pack />
        </section>
      </Parallax>
      <section id="contacto" className="py-32 px-10 ">
        <ContactContainer />
      </section>
    </div>
  );
}
