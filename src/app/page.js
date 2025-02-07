'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Parallax from "../components/Paralax";
import { AnimatedText } from "../components/Title";


export default function Home() {

  const servObj=[
    {servicio:'Desarrollo Web', descripcion:'Creamos sitios web modernos, optimizados y adaptables a cualquier dispositivo a medida. Tiendas online, e-learning, landing pages', img:'/image/desarrolloweb.svg'}, 
    {servicio:'Aplicaciones Apps', descripcion:'Aplicaciones web interactivas y escalables para mejorar la experiencia del usuario.', img:'/image/webapp.svg'}, 
    {servicio:'Mantenimiento Web',descripcion:'Nos encargamos de la seguridad, actualizaciones y rendimiento de tu sitio web.', img:'/image/mantenimiento.svg'}, 
    {servicio:'SEO', descripcion:"Optimizamos tu sitio para mejorar su visibilidad en buscadores y atraer más tráfico.", img:'/image/seo_img.jpg'}, 
    {servicio:'Diseño Gráfico', descripcion:"Diseñamos identidades visuales atractivas y materiales gráficos impactantes", img:'/image/diseño_grafico_img.jpg'}]
    

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
      <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-10"></div>

      <div className="titulo_container relative z-10 text-start items-center flex-inline w-4/4 h-2/4 md:w-2/4">
      <AnimatedText
          el="h2"
          text={[
            "Creando experiencias",
            "digitales inolvidables",
          ]}
          className="text-4xl md:text-5xl titulo text-stone-50 md:text-stone-900 "
          repeatDelay={3000}
        />
        {/* <h1 className="text-4xl md:text-5xl font-bold titulo ">Creando experiencias <br/> digitales inolvidables</h1> */}
        <motion.p 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }} 
         className="mt-4 text-lg text-stone-50 md:text-stone-900">Creamos soluciones digitales para potenciar tu negocio.</motion.p>
        <Link href='/contacto'>
        <button  className="mt-6 px-6 py-3 bg-stone-50 text-stone-900 hover:bg-inherit hover:border-2  font-semibold rounded-full shadow">
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
                <Image src={servicios.img} width={450} height={450} alt={servicios.servicio}/>
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
    </div>
  );
}
