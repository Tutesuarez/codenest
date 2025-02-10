'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Parallax from "../components/Paralax";
import { AnimatedText } from "../components/Title";
import { CheckCircle, Globe, Mail, MonitorSmartphone, Server } from "lucide-react";
import { useInView } from "react-intersection-observer";
import RevealText from "@/components/TextReveal";


export default function Home() {

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
            className="text-4xl md:text-6xl titulo text-stone-50 shadow- md:text-stone-900 "
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
        {/* ¿Qué Hacemos? */}  {/* Pasar a un componente*/}
        <section id="que-hacemos" className="p-10 justify-items-center h-screen">
          <div className="w-3/4 text-center my-10">
          <RevealText>
            <h2 className="text-3xl font-bold">¿Qué hacemos?</h2>
            <h3 className="text-1x font-semibold mt-1">Transformamos tu presencia digital y llevamos tu negocio al siguiente nivel</h3>
            <p className="mt-4">En CODENEST, creamos y optimizamos la identidad digital de tu negocio. Desde diseño y desarrollo web hasta mantenimiento, branding y SEO técnico, te ofrecemos soluciones completas para que tu empresa destaque en internet.
            </p>
            </RevealText>
          </div>          
        </section>

        {/* Servicios */} {/*pasar a un componente */}
        <section id="servicios" className="p-10 text-center md:h-screen ">
          <h2 className="text-3xl font-bold">Nuestros Servicios</h2>
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
        </section>

        {/* Tu Primera Web */} {/**Pasar a un componente */}
        <section id="tu-primera-web" className="p-10 text-center h-screen">
          <h2 className="text-3xl font-bold">Tu Primera Web</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {["Básico", "Intermedio", "Avanzado"].map((plan, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold">Plan {plan}</h3>
                <p className="mt-2 text-gray-600">Detalles del plan.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Contratar</button>
              </motion.div>
            ))}
          </div>
        </section>
      </Parallax>  

      {/* Promo para los que recien arranacan */} {/**pasar a componentes */}
      <section id="promo" className="p-20  md:h-screen bg-slate-200" >
        <div className="flex flex-col md:grid grid-cols-2 justify-items-center" ref={ref}>
        <RevealText>
          <div className=" flex flex-col md:max-w-lg ">
            <motion.h2 
             initial={{ opacity: 0, y: -30 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.5 }} className="text-4xl font-bold">¡Lanza tu negocio sin complicaciones con nuestro Pack Emprendedor!</motion.h2>
            <motion.p initial={{ opacity: 0, y: -30 }}
                      animate={inView ? { opacity: 1, y: 0 }:{}}
                       transition={{ duration: 0.5 }} 
                       className="mt-5 w-4/5">
            Si estás abriendo tu negocio, sabemos que hay mil cosas en qué pensar. Por eso, hemos creado un pack completo para que tengas una imagen profesional y una presencia online lista desde el primer día.
            </motion.p>
          </div>
          </RevealText>
          <div className="h-screen md:h-full">
          <ul className="space-y-10">
        {services.map((service, index) => (
          <motion.li   key={index} 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 }: {}}
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

      </section>
    


    </div>
  );
}
