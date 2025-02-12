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
import { Code2, Palette, Rocket, Search, Settings, Smartphone } from "lucide-react";
import {MapPin, Phone } from "lucide-react";
import ServiceCard from "@/components/ServicesCard";
import ContactForm from "@/components/contact";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const plan = [
    { name: "Starter", description: "Landig Page", info: ['Diseño de una página web moderna y responsive.', 'Sección de información y formulario de contacto.', 'Optimización SEO básica y redes sociales.', 'Hosting y dominio por 1 año'] },
    { name: "Business", description: "Web Corporativa 3-5 Páginas", info: ['3 a 5 páginas (Inicio, Nosotros, Servicios, Contacto, etc.)', 'SEO avanzado para mejorar el posicionamiento.', 'Hosting y dominio por 1 año + correos corporativos'] },
    { name: "Premiuim", description: "Desarrollo a Medida", info: ['Desarrollo web o web app a medida', 'Diseño único adaptado a la marca.', 'Integraciones avanzadas (CRM, pasarelas de pago, etc.)', 'SEO técnico avanzado y optimización de rendimiento', 'Soporte y mantenimiento prioritario.'] }]

  const servObj = [
    { icon: Code2, servicio: 'Desarrollo Web', descripcion: 'Creamos sitios web modernos, optimizados y adaptables a cualquier dispositivo a medida. Tiendas online, e-learning, landing pages', img: '/image/desarrolloweb.svg' },
    { icon: Smartphone, servicio: 'Aplicaciones Web', descripcion: 'Aplicaciones web interactivas y escalables para mejorar la experiencia del usuario.', img: '/image/webapp.svg' },
    { icon: Settings, servicio: 'Mantenimiento Web', descripcion: 'Nos encargamos de la seguridad, actualizaciones y rendimiento de tu sitio web.', img: '/image/mantenimiento.svg' },
    { icon: Search, servicio: 'SEO', descripcion: "Optimizamos tu sitio para mejorar su visibilidad en buscadores y atraer más tráfico.", img: '/image/seo_img.jpg' },
    { icon: Palette, servicio: 'Diseño Gráfico', descripcion: "Diseñamos identidades visuales atractivas y materiales gráficos impactantes", img: '/image/diseño_grafico_img.jpg' }]

  const services = [
    { icon: <CheckCircle size={24} className="text-stone-50" />, title: "Diseño de Logo", description: "Un logo profesional y único para tu marca." },
    { icon: <MonitorSmartphone size={24} className="text-stone-50" />, title: "Página Web Profesional", description: "Moderna, rápida y adaptable a móviles." },
    { icon: <Globe size={24} className="text-stone-50" />, title: "Hosting y Dominio", description: "Tu espacio en internet con dominio propio." },
    { icon: <Mail size={24} className="text-stone-50" />, title: "Cuentas de Correo Corporativas", description: "Correo con tu dominio para mayor credibilidad." },
    { icon: <Server size={24} className="text-stone-50" />, title: "Soporte y Mantenimiento", description: "Nos encargamos de la parte técnica por ti." }
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen text-gray-900">
      {/* Banner Principal */}
      <header className="relative h-screen w-full flex justify-center  items-center">
        <Image
          src="/image/banner_1.jpg"
          alt="Banner"
          fill
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-90"
          style={{
            WebkitMaskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 10%)`,
            maskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 90%)`,
          }}></div>

        <div className="container_titulo relative z-10 text-center flex flex-col items-center ">
          <AnimatedText
            el="h1"
            text={[
              "Creando experiencias",
              "digitales inolvidables",
            ]}
            className="text-4xl md:text-6xl titulo text-stone-50 "
            repeatDelay={3000}
          />
          {/* <h1 className="text-4xl md:text-5xl font-bold titulo ">Creando experiencias <br/> digitales inolvidables</h1> */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-lg text-stone-50">Creamos soluciones digitales para potenciar tu negocio.</motion.p>
          <Link href='/contacto'>
            <button className="mt-6 px-6 py-3 bg-stone-50 text-stone-900 hover:text-stone-50 hover:bg-inherit hover:border-2  font-semibold rounded-full shadow">
              Charlemos
            </button>
          </Link>
        </div>
      </header>
      <Parallax>
        {/* ¿Qué Hacemos? */}
        <section id="que-hacemos" className=" p-5 md:p-0 grid md:grid-cols-2 justify-items-center text-stone-50">
          <div className="relative h-screen w-full hidden md:block" >
            <Image src='/image/Recurso 1.svg' width={800} height={1000} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="computer banner" />
          </div>
          <div className=" text-center my-10 md:text-start md:ps-4 md:w-3/4 md:flex flex-col justify-center">
            <RevealText>
              <h2 className="text-3xl md:text-6xl font-bold">¿Qué hacemos?</h2>
              <h3 className="text-1x font-semibold mt-1 md:text-2xl md:mt-5">Transformamos tu presencia digital y llevamos tu negocio al siguiente nivel</h3>
              <p className="mt-4 md:text-1xl">En <span className="font-bold md:mt-5">CODENEST</span>, creamos y optimizamos la identidad digital de tu negocio. Desde diseño y desarrollo web hasta mantenimiento, branding y SEO técnico, te ofrecemos soluciones completas para que tu empresa destaque en internet.
              </p>
            </RevealText>
          </div>
        </section>

        {/* Servicios */}
        {/* <section id="servicios" className="p-10 text-center md:h-screen bg-stone-900">
          <h2 className="text-3xl md:text-5xl font-bold">Nuestros Servicios</h2>
            <RevealText>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10 pt-5">
           
            {servObj.map((servicios, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className=''>
                  <div className='md:max-h-450px'>
                    <Image src={servicios.img} width={450} height={450} alt={servicios.servicio} />
                  </div>
                  <div className=''>
                    <h3 className="text-xl font-semibold">{servicios.servicio}</h3>
                    <p className="mt-2 text-gray-600">{servicios.descripcion}</p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
            </RevealText>
        </section> */}

        <section id="services" className="py-32">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 text-stone-50">
              <span className="text-accent font-bold ">Servicios</span>
              <h2 className="text-4xl font-heading font-bold">
                Soluciones digitales para tu negocio
              </h2>
              <p className="text-gray-400">
                Todo lo que necesitas para establecer tu presencia digital.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servObj.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Tu Primera Web */}
        {/* <section id="tu-primera-web" className="p-10 text-center">
          <h2 className="text-3xl font-bold">Tu Primera Web</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {plan.map((plans, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold">Plan {plans.name}</h3>
                <p className="mt-2 text-gray-600">{plans.description}</p>
                <ul className="pl-5">
                  {plans.info.map((caract, i) => (
                    <li key={i} className=" text-start text-gray-500">- {caract}</li>
                  ))}
                </ul>
                <Link href='/contacto' > <button className="mt-4 px-4 py-2 bg-stone-900 text-white rounded-lg">Consultar</button></Link>
              </motion.div>
            ))}
          </div>
        </section> */}
     

      {/* Promo para los que recien arranacan */}
      <section id="promo" className="p-20  md:h-screen text-stone-50" >
        <div className="flex flex-col md:grid grid-cols-2 justify-items-center" ref={ref}>
          <RevealText>
            <div className=" flex flex-col md:max-w-lg ">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }} className="text-4xl font-bold">¡Lanza tu negocio sin complicaciones con nuestro Pack Emprendedor!</motion.h2>
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
      <section id="contact" className="py-32">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
            <div className="space-y-8">
              <span className="text-accent font-bold text-stone-50">Contáctenos</span>
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
              <div className="flex items-center space-x-4">
                <Phone className="text-stone-50" size={24} />
                <p className="text-lg text-stone-50">+34 627 165 711</p>
                <p className="text-lg text-stone-50">+34 672 324 653</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-stone-50" size={24} />
                <p className="text-lg text-stone-50">Valencia, España</p>
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
