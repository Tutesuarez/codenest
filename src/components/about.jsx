import RevealText from "./TextReveal"
import InfiniteScroll from "@/components/webs";
import RevealTextSegundo from "@/components/TextReveal2";

const Quehacemos=()=>{
    const images = [
        { src: "/image/web1.webp" },
        { src: "/image/web2.webp" }
      ];
    
    return(
        <>
        <div className="md:ps-20 md:grid md:grid-cols-2">
            <div className=" text-center my-10 md:mt-2 md:text-start md:ps-30 md:w-11/12 md:flex flex-col justify-center">
              <p className="text-teal-400 font-bold mb-3">¿QUE HACEMOS?</p>
              <RevealText>
                <h2 className="text-2xl font-bold mt-1 md:text-6xl md:mt-2">Transformamos tu presencia digital y llevamos tu negocio al siguiente nivel</h2>
                <p className="mt-10 md:text-2xl">En <span className="font-bold  bg-teal-400 text-stone-950 md:mt-5 p-1 rounded-md">CODENEST</span>,creamos y optimizamos la identidad digital de tu negocio. Desde diseño y desarrollo web hasta mantenimiento, branding y SEO técnico, te ofrecemos soluciones completas para que tu empresa destaque en internet.
                </p>
              </RevealText>
            </div>
            <div className="justify-end">
              {/*efectoo */}
              <RevealTextSegundo>
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
              </RevealTextSegundo>
            </div>
          </div>
        </>
    )
}

export default Quehacemos