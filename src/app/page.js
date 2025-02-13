'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Parallax from "../components/Paralax";
import { AnimatedText } from "../components/Title";
import { CheckCircle, Globe, Mail, MonitorSmartphone, Server } from "lucide-react";
import { useInView } from "react-intersection-observer";
import RevealText from "@/components/TextReveal";
import { useState, useEffect } from "react";
import { MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact";
import ProcessSteps from "@/components/ServicesCard";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { LuChevronDown } from "react-icons/lu";
import InfiniteScroll from "@/components/webs";
import InfiniteImageScroll from "@/components/webs";



export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const images = [
    {src:"./image/web1.jpg" },
    {src:"./image/web2.jpg"}
  ];
  const services = [
    { icon: <CheckCircle size={24} className="text-teal-400" />, title: "Diseño de Logo", description: "Un logo profesional y único para tu marca." },
    { icon: <MonitorSmartphone size={24} className="text-teal-400" />, title: "Página Web Profesional", description: "Moderna, rápida y adaptable a móviles." },
    { icon: <Globe size={24} className="text-teal-400" />, title: "Hosting y Dominio", description: "Tu espacio en internet con dominio propio." },
    { icon: <Mail size={24} className="text-teal-400" />, title: "Cuentas de Correo Corporativas", description: "Correo con tu dominio para mayor credibilidad." },
    { icon: <Server size={24} className="text-teal-400" />, title: "Soporte y Mantenimiento", description: "Nos encargamos de la parte técnica por ti." }
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen">
      {/* Banner Principal */}
      <header className="relative h-screen w-full flex flex-col justify-center  items-center">

        <Image
          src="/image/background.jpg"
          alt="Banner"
          fill
          className="-z-10 object-cover"
        />

        <div className="absolute inset-0 bg-neutral-950 bg-opacity-70  md:bg-opacity-90"
          style={{
            WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 10%)`,
            maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 90%)`,
          }}></div>


        <div className="container_titulo relative z-10 text-start md:text-center  w-5/6 md:w-full flex flex-col items-center ">
          <AnimatedText
            el="h1"
            text={[
              "Creando experiencias",
              "digitales inolvidables",
            ]}
            className="text-4xl md:text-6xl titulo text-stone-50 mb-2"
            repeatDelay={3000}
          />
          {/* <h1 className="text-4xl md:text-5xl font-bold titulo ">Creando experiencias <br/> digitales inolvidables</h1> */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-xl text-stone-50">Creamos soluciones digitales para potenciar tu negocio.</motion.p>
          <Link href='#contacto'>
            <button className="mt-6 px-6 py-3 bg-teal-400 text-stone-950 hover:text-teal-400 hover:bg-inherit hover:border-2  hover:border-teal-400 font-semibold rounded-full shadow">
              Charlemos
            </button>
          </Link>
        </div>
        <div className="relative z-10 items-end">
          <Link href="#que-hacemos">
            <LuChevronDown size={84} className="text-teal-400" />
          </Link>
        </div>

      </header>
      <Parallax>
        {/* ¿Qué Hacemos? */}
        <section id="que-hacemos" className=" p-5 md:py-10  md:h-screen justify-items-center bg-stone-950 text-stone-50">
          <div className="bg-teal-400 rounded-3xl text-stone-950 px-2 py-1">
            <p className="">que hacemos</p>
          </div>
          <div className=" md:grid md:grid-cols-2">
            <div className=" text-center my-10 md:text-start md:ps-36 md:flex flex-col justify-center">
              <RevealText>
                <h3 className="text-1x font-bold mt-1 md:text-6xl md:mt-5">Transformamos tu presencia digital y llevamos tu negocio al siguiente nivel</h3>
                <p className="mt-10 md:text-2xl">En <span className="font-bold  bg-teal-400 text-stone-950 md:mt-5 p-1 rounded-md">CODENEST</span>,creamos y optimizamos la identidad digital de tu negocio. Desde diseño y desarrollo web hasta mantenimiento, branding y SEO técnico, te ofrecemos soluciones completas para que tu empresa destaque en internet.
                </p>
              </RevealText>
            </div>
            <div className="flex justify-center">
              {/*efectoo */}
              <div style={{ height: "500px", position: "relative" }}>
      <InfiniteScroll
        items={images}
        isTilted={true}
        tiltDirection="rigth"
        autoplay={true}
        autoplaySpeed={0.5}
        autoplayDirection="down"
        pauseOnHover={true}
        width="40rem"         // MÁS ANCHO
        itemMinHeight={600}   // MÁS ALTO
        maxHeight="100vh"      // AJUSTA EL MÁXIMO ALTO
        negativeMargin="-4em" // MENOS ESPACIO ENTRE IMÁGENES
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
                <p className=" bg-teal-400  rounded-3xl text-stone-950  px-2 py-1">Servicios</p>
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


        {/* Tu Primera Web */}
        {/* Promo para los que recien arranacan */}
        <section id="promo" className="p-20  md:h-screen text-stone-50" >
          <div className="flex flex-col md:grid grid-cols-2 justify-items-center" ref={ref}>
            <RevealText>
              <div className=" flex flex-col md:max-w-lg ">
                <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }} className="text-4xl font-bold">¡Lanza tu negocio sin complicaciones con nuestro<span className="bg-teal-400 rounded-md text-stone-950"> Pack Emprendedor!</span></motion.h2>
                <motion.p initial={{ opacity: 0, y: -30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="mt-5 w-4/5">
                  Si estás abriendo tu negocio, sabemos que hay mil cosas en qué pensar. Por eso, hemos creado un pack completo para que tengas una imagen profesional y una presencia online lista desde el primer día.
                </motion.p>
              </div>
            </RevealText>
            <div className="h-screen md:h-full">
              <ul className="space-y-10 mt-5">
                {services.map((service, index) => (
                  <motion.li key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, delay: index * 0.2 }}>
                    {service.icon}
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>

          <div className="text-center  md:mt-20">
            <RevealText >
              <p className="font-semibold text-2xl">Tú te enfocas en hacer crecer tu negocio, nosotros nos encargamos de tu presencia digital.</p>
            </RevealText>
          </div>

        </section>
      </Parallax>
      <section id="contacto" className="py-32 px-10 ">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-8">
                <div className="max-w-fit">
                  <p className="bg-teal-400  rounded-3xl text-stone-950  px-2 py-1">Contáctenos</p>
                </div>
                <h2 className="text-4xl font-heading font-bold text-stone-50">
                  Creemos algo increíble juntos
                </h2>
                <p className="text-gray-100 leading-relaxed">
                  ¿Está listo para llevar su presencia digital al siguiente nivel? Contáctenos hoy y analicemos cómo podemos ayudarlo a alcanzar sus objetivos.
                </p>
                <div className="flex items-center space-x-4">
                  <Mail className="text-stone-50" size={24} />
                  <p className="text-lg text-stone-50">code.nest.valencia@gmail.com</p>
                </div>
                <div className="flex items-center  md:space-x-4">
                  <Phone className="text-stone-50" size={24} />
                  <div className="flex-col ps-5 md:flex md:flex-row md:px-0 md:space-x-4">
                    <p className="text-lg text-stone-50">+34 627 165 711</p>
                    <p className="text-lg text-stone-50">+34 672 324 653</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-stone-50" size={24} />
                  <p className="text-lg text-stone-50">Valencia, España</p>
                </div>
                <div className='justify-items-start'>

                  {/* Sección de los íconos de redes sociales */}
                  <div className="flex space-x-6 mt-4">
                    <Link href="https://www.instagram.com/codenest.digital?igsh=MTJqZ2IyNGxxNXh4OA==" target="_blank">
                      <FaInstagram size={30} className="text-teal-400 hover:text-red-600" />
                    </Link>
                    <Link href="https://wa.me/34627165711" target="_blank">
                      <FaWhatsapp size={30} className="text-teal-400 hover:text-green-500" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
