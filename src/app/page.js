'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/NavBar";
import Parallax from "../components/Paralax";
import Footer from "../components/Footer";
import { AnimatedText } from "../components/Title";


export default function Home() {
  return (
    <div className="min-h-screen text-gray-900">
      {/* Navbar */}
      <Navbar/>

      {/* Banner Principal */}
      <header className="relative h-screen w-full flex items-center px-20">
        <Image
          src="/image/banner_1.jpg"
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        <div className="titulo_container relative z-10 text-start items-center flex-inline w-2/4 h-2/4">
        <AnimatedText
            el="h2"
            text={[
              "Creando experiencias",
              "digitales inolvidables",
            ]}
            className="text-4xl md:text-5xl titulo"
            repeatDelay={3000}
          />
          {/* <h1 className="text-4xl md:text-5xl font-bold titulo ">Creando experiencias <br/> digitales inolvidables</h1> */}
          <motion.p 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }} 
           className="mt-4 text-lg">Creamos soluciones digitales para potenciar tu negocio.</motion.p>
          <Link href="/contacto">
          <button  className="mt-6 px-6 py-3 bg-stone-50 text-stone-900 hover:bg-inherit hover:border-2  font-semibold rounded-full shadow-lg">
            Charlemos
          </button>
          </Link>
        </div>
      </header>
<Parallax>


      {/* ¿Qué Hacemos? */}
      <section id="que-hacemos" className="p-10 justify-items-center">
        <div className="w-3/4 text-center my-10">
        <h2 className="text-3xl font-bold">¿Qué hacemos?</h2>
        <p className="mt-4">Brindamos soluciones digitales para empresas y emprendedores.
          <br/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="p-10 bg-gray-200 text-center h-screen">
        <h2 className="text-3xl font-bold">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {['Desarrollo Web', 'Web Apps', 'SEO', 'Diseño Gráfico', 'Mantenimiento Web'].map((servicio, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{servicio}</h3>
              <p className="mt-2 text-gray-600">Breve descripción del servicio.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tu Primera Web */}
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
      {/* Footer */}
      <Footer/>
    </div>
  );
}
