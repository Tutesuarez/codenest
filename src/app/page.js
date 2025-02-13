'use client';
import Parallax from "../components/Paralax";
import RevealText from "@/components/TextReveal";
import ProcessSteps from "@/components/ServicesCard";
import InfiniteScroll from "@/components/webs";
import Banner from "@/components/banner";
import Pack from "@/components/pack";
import ContactContainer from "@/components/ContactContainer";
import SplashCursor from "@/components/splash";



export default function Home() {
  const images = [
    { src: "./image/web1.jpg" },
    { src: "./image/web2.jpg" }
  ];


  return (
    <div className="min-h-screen">
     <SplashCursor/>
      {/* Banner Principal */}
      <header className="relative h-screen w-full flex flex-col justify-center  items-center">
        <Banner />
      </header>
      <Parallax>

        {/* ¿Qué Hacemos? */}
        <section id="que-hacemos" className="p-5 md:py-10  md:h-screen justify-items-center bg-stone-950 text-stone-50">
          <div className="md:ps-20 md:grid md:grid-cols-2">
            <div className=" text-center my-10 md:mt-2 md:text-start md:ps-30 md:w-11/12 md:flex flex-col justify-center">
              <p className="text-teal-400 font-bold mb-3">¿Qué hacemos?</p>
              <RevealText>
                <h3 className="text-2xl font-bold mt-1 md:text-6xl md:mt-2">Transformamos tu presencia digital y llevamos tu negocio al siguiente nivel</h3>
                <p className="mt-10 md:text-2xl">En <span className="font-bold  bg-teal-400 text-stone-950 md:mt-5 p-1 rounded-md">CODENEST</span>,creamos y optimizamos la identidad digital de tu negocio. Desde diseño y desarrollo web hasta mantenimiento, branding y SEO técnico, te ofrecemos soluciones completas para que tu empresa destaque en internet.
                </p>
              </RevealText>
            </div>
            <div className="justify-end">
              {/*efectoo */}
              <div className="max-w-screen-sm md:w-full relative object-cover hidden md:block">
                <InfiniteScroll
                  items={images}
                  isTilted={true}
                  tiltDirection="rigth"
                  autoplay={true}
                  autoplaySpeed={0.5}
                  autoplayDirection="down"
                  pauseOnHover={false}
                  width="40rem"         // MÁS ANCHO
                  itemMinHeight={600}   // MÁS ALTO
                  maxHeight="100vh"      // AJUSTA EL MÁXIMO ALTO
                  negativeMargin="10rem" // MENOS ESPACIO ENTRE IMÁGENES
                />
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-32 bg-stone-950">
          <div className=" flex flex-col justify-items-center">
            <div className=" text-center max-w-2xl mx-auto  justify-items-center space-y-4 text-stone-50">
              <div className="mb-10 max-w-fit">
                <p className=" text-teal-400  font-bold">Servicios</p>
              </div>
              <h2 className="text-4xl font-heading font-bold">
                Soluciones digitales para tu negocio
              </h2>
              <p className="text-gray-400">
                Todo lo que necesitas para establecer tu presencia digital.
              </p>
            </div>
            <ProcessSteps />
          </div>
        </section>

        {/* Promo para los que recien arranacan */}
        <section id="promo" className="p-20  md:h-screen text-stone-50" >
          <Pack />
        </section>
      </Parallax>
      <section id="contacto" className="py-32 px-10 ">
        <ContactContainer />
      </section>
    </div>
  );
}
