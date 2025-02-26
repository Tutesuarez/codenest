import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../components/Title";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import './banner.css'

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

 
  const updateMousePosition = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => requestAnimationFrame(() => updateMousePosition(e));
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [updateMousePosition]);


  return (
    <>
      <img
        src="/image/banner.webp"
        alt="Banner"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      ></img>

      <div className="absolute z-10 inset-0 bg-neutral-950 bg-opacity-70  md:bg-opacity-70 "
        style={{
          WebkitMaskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 10%)`,
          maskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 90%)`,
        }}></div>


      <div className="container_title_b relative z-20 text-start md:text-center  w-5/6 md:w-full xl:w-screen flex flex-col md:items-center  ">
        <AnimatedText
          el="h1"
          text={[
            "Creando experiencias",
            "digitales inolvidables",
          ]}
          className="titulo_banner text-4xl xl:text-6xl md:text-6xl titulo text-stone-50 mb-2"
          repeatDelay={3000}
        />
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="description_banner mt-6 text-xl text-stone-50">Creamos soluciones digitales para potenciar tu negocio.</motion.p>
        <Link href='#contacto'>
          <button className="btn_banner mt-16 sm:mt-6 px-6 py-3 bg-teal-400 text-stone-950 hover:text-teal-400 hover:bg-inherit hover:border-2  hover:border-teal-400 font-semibold rounded-full shadow flex justify-self-center sm:justify-self-start">
            HABLEMOS
          </button>
        </Link>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <Link href="#que-hacemos" className='aboutus-button' alt='aboutus-button'>
          <LuChevronDown size={84} className="text-stone-50 animate-bounce" />
        </Link>
      </div>
    </>
  )
}

export default Banner

