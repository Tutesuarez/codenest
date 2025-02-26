"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegHandshake, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  { icon: <FaRegHandshake />, title: "Contacto", description: "Definimos tus necesidades y objetivos." },
  { icon: <FaPencilRuler />, title: "Diseño", description: "Creamos un diseño atractivo y funcional." },
  { icon: <FaCode />, title: "Desarrollo", description: "Convertimos el diseño en una web funcional." },
  { icon: <FaRocket />, title: "Lanzamiento", description: "Publicamos tu web y la optimizamos." }
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
        <div className="relative flex justify-between w-10/12 md:w-8/12">
          {steps.map((step, index) => (
              <motion.div
              key={index}
              className="flex flex-col items-center w-1/4 z-20"
              initial={{ opacity: 0, y: 50 }}
              animate={visibleStep > index ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl text-teal-400 ${visibleStep > index ? "bg-gray-900" : ""}`}>
               <span className="text-2xl ">{step.icon} </span> 
              </div>
              <p className="font-bold mt-2 text-stone-950">{step.title}</p>
              <p className="text-sm text-stone-950">{step.description}</p>
            </motion.div>
          ))}
          {/* Línea de progreso */}
          <motion.div
            className="absolute z-10 top-8 left-0 w-full h-1 bg-gray-700 hidden sm:block"
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
