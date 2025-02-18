import Link from "next/link"
import RevealTextSegundo from "./TextReveal2"
import { FaShoppingCart, FaGraduationCap, FaWordpress } from "react-icons/fa";




const ServicioEcommerce=()=>{
    return(
        <>
        <div className="container mx-auto text-center md:text-left md:px-20">
            <p className="text-teal-400 font-bold text-lg">TU PLATAFORMA OLNLINE</p>
            <RevealTextSegundo>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Creamos Soluciones Digitales a Medida</h2>
            <p className="mt-6 text-lg md:text-xl text-stone-300">En <span className="font-bold bg-teal-400 text-stone-900 p-1 rounded-md">CODENEST</span> diseñamos y desarrollamos plataformas digitales que potencian negocios. Desde tiendas online hasta plataformas de aprendizaje, ofrecemos soluciones personalizadas con tecnologías modernas.</p>
            </RevealTextSegundo>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-12 container mx-auto md:px-20">
            {/* <!-- eCommerce --> */}
            <div className="bg-stone-800 p-6 rounded-2xl text-center justify-items-center shadow-lg">
              <div className="justify-items-center">
                <FaShoppingCart size={50} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-teal-400">Tiendas Online</h3>
              <p className="mt-4 text-stone-300">Creamos eCommerce optimizados con <strong>WooCommerce</strong> y soluciones a medida para vender online sin límites.</p>
            </div>

            {/* <!-- LMS --> */}
            <div className="bg-stone-800 p-6 rounded-2xl text-center  justify-items-center shadow-lg">
              <div className="justify-items-center">
                <FaGraduationCap size={50} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-teal-400">Plataformas de Aprendizaje</h3>
              <p className="mt-4 text-stone-300">Desarrollamos sistemas de cursos online con <strong>WordPress + LearnDash</strong> o soluciones personalizadas.</p>
            </div>

            {/* <!-- Desarrollo a medida --> */}
            <div className="bg-stone-800 p-6 rounded-2xl text-center justify-items-center shadow-lg">
              <div className="justify-items-center">
                <FaWordpress size={50} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-teal-400">Desarrollo Web</h3>
              <p className="mt-4 text-stone-300">Sitios web rápidos, seguros y escalables, con <strong>React, Next.js y WordPress</strong> según tu necesidad.</p>
            </div>
          </div>
            <div className="container text-center justify-center mt-10">
                <button className="bg-teal-400 text-stone-950 py-3 px-6 hover:text-teal-400 hover:bg-inherit hover:border-2  hover:border-teal-400 font-semibold rounded-full"> 
                    <Link href="/#contacto" alt='down-button' className="down-button">¡Evaluemos tu proyecto!</Link>
                </button>
            </div>
        </>
    )
}

export default ServicioEcommerce