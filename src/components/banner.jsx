import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../components/Title";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import Image from "next/image";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
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
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <Link href="#que-hacemos">
          <LuChevronDown size={84} className="text-stone-50 animate-bounce" />
        </Link>
      </div>
    </>
  )
}

export default Banner