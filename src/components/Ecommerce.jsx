import Link from "next/link"
import RevealTextSegundo from "./TextReveal2"
import { FaShoppingCart, FaGraduationCap, FaWordpress } from "react-icons/fa";
import './Ecommerce.css'




const ServicioEcommerce = () => {
  return (
    <>
      <div className="container_ecom  justify-items-center lg:mb-32">
        <div className="container_title_ecom container mx-auto text-center md:text-left md:px-20">
          <p className=" title-eco_serv text-teal-400 font-bold text-lg">TU PLATAFORMA OLNLINE</p>
          <div className="container_title_pack">
            <RevealTextSegundo>
              <h2 className="title_eco text-3xl md:text-5xl font-bold mt-2">Creamos Soluciones Digitales a Medida</h2>
              <p className="description_ecom mt-6 text-lg md:text-xl text-stone-300">En <span className="font-bold bg-teal-400 text-stone-900 p-1 rounded-md">CODENEST</span> diseñamos y desarrollamos plataformas digitales que potencian negocios. Desde tiendas online hasta plataformas de aprendizaje, ofrecemos soluciones personalizadas con tecnologías modernas.</p>
            </RevealTextSegundo>
          </div>
        </div>

        <div className="cards_container_ecom grid md:grid-cols-3 gap-10 mt-12 container mx-auto md:px-20">
          {/* <!-- eCommerce --> */}
          <div className="card_ecom border-2 p-6 rounded-2xl text-center justify-items-center shadow-lg">
            <div className="justify-items-center">
              <FaShoppingCart size={50} className="item_ecom text-teal-400" />
            </div>
            <h3 className="title_card_eco text-xl font-bold text-teal-400">Tiendas Online</h3>
            <p className="description_card_eco mt-4 text-stone-300">Creamos eCommerce optimizados con <strong>WooCommerce</strong> y soluciones a medida para vender online sin límites.</p>
          </div>

          {/* <!-- LMS --> */}
          <div className="card_ecom border-2 p-6 rounded-2xl text-center  justify-items-center shadow-lg">
            <div className="justify-items-center">
              <FaGraduationCap size={50} className="item_ecom text-teal-400" />
            </div>
            <h3 className="title_card_eco text-xl font-bold text-teal-400">Plataformas de Aprendizaje</h3>
            <p className="description_card_eco mt-4 text-stone-300">Desarrollamos sistemas de cursos online con <strong>WordPress + LearnDash</strong> o soluciones personalizadas.</p>
          </div>

          {/* <!-- Desarrollo a medida --> */}
          <div className="card_ecom border-2 p-6 rounded-2xl text-center justify-items-center shadow-lg">
            <div className="justify-items-center">
              <FaWordpress size={50} className="item_ecom text-teal-400" />
            </div>
            <h3 className="title_card_eco text-xl font-bold text-teal-400">Desarrollo Web</h3>
            <p className="description_card_eco mt-4 text-stone-300">Sitios web rápidos, seguros y escalables, con <strong>React, Next.js y WordPress</strong> según tu necesidad.</p>
          </div>
        </div>
        <div className="btn-container-eco container text-center justify-center mt-10">
          <button className="btn_ecom bg-teal-400 text-stone-950 py-3 px-6 hover:text-teal-400 hover:bg-inherit hover:border-2  hover:border-teal-400 font-semibold rounded-full">
            <Link href="/#contacto" alt='down-button' className="down-button">¡Evaluemos tu proyecto!</Link>
          </button>
        </div>

      </div>
    </>
  )
}

export default ServicioEcommerce