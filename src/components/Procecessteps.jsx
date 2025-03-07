"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegHandshake, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";
import './Processteps.css'

const steps = [
  { icon: <FaRegHandshake />, title: "Idea", description: "Definimos y estructuramos el proyecto comprendiendo a fondo sus necesidades y objetivos. Esta fase es clave para sentar las bases de un proyecto sólido y exitoso." },
  { icon: <FaPencilRuler />, title: "Diseño", description: "Damos forma a su idea mediante modelos interactivos y representaciones visuales. Esto nos permite perfeccionar y validar el concepto antes de su desarrollo a gran escala." },
  { icon: <FaCode />, title: "Desarrollo", description: "Convertimos el prototipo en un producto completamente funcional, integrando todas las funciones necesarias y asegurando que cumpla con los requisitos establecidos." },
  { icon: <FaRocket />, title: "Lanzamiento", description: "Garantizamos el éxito continuo de su producto con soporte técnico, mantenimiento y mejoras constantes, adaptándolo a las nuevas necesidades y exigencias del mercado." }
];

const ProcessSteps = () => {
  const [visibleStep, setVisibleStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("process-steps");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleStep(steps.length); // Muestra todos los pasos al entrar en pantalla
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process-steps" className="py-16 bg-stone-100 text-center my-20">
      <h2 className="text-xl font-bold mb-16 text-teal-400">NUESTRO PROCESO</h2>
      <div className="flex justify-center items-center">
        <div className="relative flex flex-col md:flex-row align-middle md:justify-between w-10/12 md:w-8/12 2xl:w-10/12">
          {steps.map((step, index) => (
              <motion.div
              key={index}
              className="precess_container flex flex-row md:flex-col justify-items-center items-center  md:w-1/4 z-20 md:px-6"
              initial={{ opacity: 0, y: 50 }}
              animate={visibleStep > index ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              >
              <div className={`icon_container w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center align-middle justify-center text-xl text-teal-400 ${visibleStep > index ? "bg-gray-900" : ""}`}>
               <span className="icon_process text-2xl ">{step.icon} </span> 
              </div>
              <div className="title__process_container max-w-64 ps-4 sm:ps-0">
              <p className="title_process font-bold mt-2 text-stone-950">{step.title}</p>
              <p className="description_process text-sm text-stone-950">{step.description}</p>
              </div>
            </motion.div>
          ))}
          {/* Línea de progreso */}
          <motion.div
            className="process_line absolute z-10 top-8 left-0 w-full h-1 bg-gray-700 hidden sm:block"
            initial={{ width: "0%" }}
            animate={{ width: `${(visibleStep / steps.length) * 100}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
