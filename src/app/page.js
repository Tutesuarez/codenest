'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Parallax from "../components/Paralax";
import { AnimatedText } from "../components/Title";
import { CheckCircle, Globe, Mail, MonitorSmartphone, Server } from "lucide-react";
import { useInView } from "react-intersection-observer";
import RevealText from "@/components/TextReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


export default function Home() {
  const plan = [
    { name: "Starter", description: "Landig Page", info:[ 'Diseño de una página web moderna y responsive.', 'Sección de información y formulario de contacto.', 'Optimización SEO básica y redes sociales.', 'Hosting y dominio por 1 año']},
    { name: "Business", description: "Web Corporativa 3-5 Páginas", info:[ '3 a 5 páginas (Inicio, Nosotros, Servicios, Contacto, etc.)', 'SEO avanzado para mejorar el posicionamiento.', 'Hosting y dominio por 1 año + correos corporativos' ] },
    { name: "Premiuim", description: "Desarrollo a Medida", info:[ 'Desarrollo web o web app a medida', 'Diseño único adaptado a la marca.', 'Integraciones avanzadas (CRM, pasarelas de pago, etc.)', 'SEO técnico avanzado y optimización de rendimiento', 'Soporte y mantenimiento prioritario.' ] }]

  const servObj = [
    { servicio: 'Desarrollo Web', descripcion: 'Creamos sitios web modernos, optimizados y adaptables a cualquier dispositivo a medida. Tiendas online, e-learning, landing pages', img: '/image/desarrolloweb.svg' },
    { servicio: 'Aplicaciones Web', descripcion: 'Aplicaciones web interactivas y escalables para mejorar la experiencia del usuario.', img: '/image/webapp.svg' },
    { servicio: 'Mantenimiento Web', descripcion: 'Nos encargamos de la seguridad, actualizaciones y rendimiento de tu sitio web.', img: '/image/mantenimiento.svg' },
    { servicio: 'SEO', descripcion: "Optimizamos tu sitio para mejorar su visibilidad en buscadores y atraer más tráfico.", img: '/image/seo_img.jpg' },
    { servicio: 'Diseño Gráfico', descripcion: "Diseñamos identidades visuales atractivas y materiales gráficos impactantes", img: '/image/diseño_grafico_img.jpg' }]

  const services = [
    { icon: <CheckCircle size={24} className="text-blue-500" />, title: "Diseño de Logo", description: "Un logo profesional y único para tu marca." },
    { icon: <MonitorSmartphone size={24} className="text-green-500" />, title: "Página Web Profesional", description: "Moderna, rápida y adaptable a móviles." },
    { icon: <Globe size={24} className="text-purple-500" />, title: "Hosting y Dominio", description: "Tu espacio en internet con dominio propio." },
    { icon: <Mail size={24} className="text-red-500" />, title: "Cuentas de Correo Corporativas", description: "Correo con tu dominio para mayor credibilidad." },
    { icon: <Server size={24} className="text-yellow-500" />, title: "Soporte y Mantenimiento", description: "Nos encargamos de la parte técnica por ti." }
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen text-gray-900">
      {/* Banner Principal */}
      <header className="relative h-screen w-full flex items-center px-20">
        <Image
          src="/image/banner_1.jpg"
          alt="Banner"
          fill
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-10"></div>

        <div className="container_titulo relative z-10 text-start items-center flex-inline h-2/4 md:w-2/4">
          <AnimatedText
            el="h1"
            text={[
              "Creando experiencias",
              "digitales inolvidables",
            ]}
            className="text-4xl md:text-6xl titulo text-stone-50 shadow- md:text-stone-900"
            repeatDelay={3000}
          />
          {/* <h1 className="text-4xl md:text-5xl font-bold titulo ">Creando experiencias <br/> digitales inolvidables</h1> */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-lg text-stone-50 md:text-stone-900">Creamos soluciones digitales para potenciar tu negocio.</motion.p>
          <Link href='/contacto'>
            <button className="mt-6 px-6 py-3 bg-stone-50 text-stone-900 hover:bg-inherit hover:border-2  font-semibold rounded-full shadow">
              Charlemos
            </button>
          </Link>
        </div>
      </header>
      <Parallax>
        {/* ¿Qué Hacemos? */}
        <section id="que-hacemos" className=" p-5 md:p-0 grid md:grid-cols-2 justify-items-center">
          <div className="relative h-screen w-full hidden md:block" >
            <Image src='/image/banner-hacemos.jpg' width={800} height={1000} className="filter backdrop-sepia-0  contrast-50 absolute inset-0 w-full h-full object-cover" alt="computer banner"/>
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
        <section id="servicios" className="p-10 text-center md:h-screen ">
          {/* <h2 className="text-3xl md:text-5xl font-bold">Nuestros Servicios</h2>
            <RevealText>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10 pt-5">
           
            {servObj.map((servicios, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md"
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
            </RevealText> */}
            <div className=" py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full max-w-8xl mx-auto"
      >
        {servObj.map((servicio, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center transition-all"
            >
              <img src={servicio.img} alt={servicio.servicio} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{servicio.servicio}</h3>
              <p className="text-gray-600 mt-2">{servicio.descripcion}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </section>

        {/* Tu Primera Web */}
        <section id="tu-primera-web" className="p-10 text-center">
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
        </section>
      </Parallax>

      {/* Promo para los que recien arranacan */}
      <section id="promo" className="p-20  md:h-screen bg-slate-200" >
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



    </div>
  );
}
