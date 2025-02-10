'use client';

import RevealText from "@/components/TextReveal";
import { motion } from "framer-motion";
import Image from 'next/image'


export default function Servicios() {

  return (
    <div className="">
      <div className="justify-items-center mt-8">
        <h1 className="text-3xl md:text-6xl font-bold">Nuestros Servicios</h1>
      </div>
      <RevealText>
      <div className="flex flex-col lg:flex-row mt-10 p-5 mx-5">
        <div className="mb-4 lg:mb-0 lg:pe-10">
          <Image
            className="rounded-lg"
            src="/image/desarrolloweb.svg"
            width={350}
            height={350}
            alt="Desarrollo web"
          />
        </div>
        <div className="lg:ps-10 lg:w-2/4">
          <h2 className="text-4xl font-bold">Diseño y Desarrollo Web</h2>
          <p className="mt-3">
            Creamos sitios web modernos, optimizados y personalizados para tu negocio, adaptables a cualquier dispositivo.
            Trabajamos con WordPress para soluciones flexibles y escalables, así como con tecnologías avanzadas como React
            para desarrollos a medida. Tiendas online, e-learning, landing pages.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-end mt-1 p-5 mx-5">
        <div className="mb-4 lg:mb-0 lg:w-2/4 lg:pe-10">
          <h2 className="text-4xl font-bold">Desarrollo de Web Apps</h2>
          <p className="mt-3">
          Construimos aplicaciones web personalizadas, garantizando rapidez, seguridad y una experiencia de usuario excepcional. Diseñamos soluciones adaptadas a las necesidades específicas de cada cliente.
          </p>
        </div>
        <div className="pe-5">
          <Image
            className="rounded-lg"
            src="/image/webapp.svg"
            width={350}
            height={350}
            alt="Desarrollo web"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-10 p-5 mx-5">
        <div className="mb-4 lg:mb-0 lg:pe-5">
          <Image
            className="rounded-lg"
            src="/image/mantenimiento.svg"
            width={350}
            height={350}
            alt="Desarrollo web"
          />
        </div>
        <div className="lg:ps-10 lg:w-2/4">
          <h2 className="text-4xl font-bold">Mantenimiento Web</h2>
          <p className="mt-3">
          Ofrecemos servicios de mantenimiento y soporte para garantizar el correcto funcionamiento de tu sitio o aplicación web. Nos encargamos de actualizaciones, seguridad, optimización de rendimiento y corrección de errores.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-end mt-1 p-5 mx-5">
        <div className="mb-4 lg:mb-0 lg:w-2/4 lg:pe-10">
          <h2 className="text-4xl font-bold">SEO Técnico</h2>
          <p className="mt-3">
          Mejoramos el posicionamiento de tu web en los motores de búsqueda con estrategias de SEO técnico. Optimizamos la estructura del sitio, mejoramos la velocidad de carga, implementamos estrategias de indexación y trabajamos con palabras clave para maximizar tu visibilidad online.
          </p>
        </div>
        <div className="pe-5">
          <Image
            className="rounded-lg"
            src="/image/seo_img.jpg"
            width={350}
            height={350}
            alt="Desarrollo web"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-10 p-5 mx-5">
        <div className="mb-4 lg:mb-0 lg:pe-5">
          <Image
            className="rounded-lg"
            src="/image/diseño_grafico_img.jpg"
            width={350}
            height={350}
            alt="Desarrollo web"
          />
        </div>
        <div className="lg:ps-10 lg:w-2/4">
          <h2 className="text-4xl font-bold">Diseño Gráfico</h2>
          <p className="mt-3">
          Potencia tu imagen de marca con diseños profesionales. Creamos logotipos, banners, contenido para redes sociales y material corporativo que reflejan la identidad y valores de tu empresa.
          </p>
        </div>
      </div>
      </RevealText>
 
    </div>

  );
}