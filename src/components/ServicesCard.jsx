// import { LucideIcon } from 'lucide-react';


// const ServiceCard = ({ servicio, descripcion, icon: Icon }) => {
//   return (
//     <div className="group p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 transition-all duration-300 hover:border-accent/20 hover:bg-white/10">
//       <div className="flex flex-col gap-4">
//         <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
//           <Icon className="w-6 h-6 text-accent text-stone-50" />
//         </div>
//         <h3 className="font-heading text-xl font-bold text-white">{servicio}</h3>
//         <p className="text-gray-100 leading-relaxed">{descripcion}</p>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Desarrollo Web", description: "Creamos sitios web modernos, optimizados y adaptables a cualquier dispositivo a medida. Tiendas online, e-learning, landing pages" },
  { number: "02", title: "Aplicaciónes Web", description: "Aplicaciones web interactivas y escalables para mejorar la experiencia del usuario." },
  { number: "03", title: "Mantenimiento", description: "'Nos encargamos de la seguridad, actualizaciones y rendimiento de tu sitio web." },
  { number: "04", title: "SEO Técnico", description: "Optimizamos tu sitio para mejorar su visibilidad en buscadores y atraer más tráfico." },
  { number: "05", title: "Diseño Gráfico", description: "Diseñamos identidades visuales atractivas y materiales gráficos impactantes" },
];

export default function ProcessSteps() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full flex flex-col items-center py-16 ">
   
      <div className="relative w-full max-w-6xl  mt-10 flex flex-col md:flex-row md:justify-between items-center md:items-start">

        {steps.map((step, index) => (
          <motion.div
          key={index}
          className="relative z-10 flex flex-col items-center text-center transition-opacity w-60 h-auto"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{ opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.3 }}
          >
            {/* Número */}
            <motion.span
              className="text-9xl font-bold text-teal-400"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              {step.number}
            </motion.span>
            
          {/* Línea central */}
          {/* <div className="absolute top-1/2 w-full border-t-2 border-stone-200 hidden md:block "></div> */}
            {/* Punto con línea */}
            <div className="relative flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
            </div>

            {/* Título y descripción */}
            <h3 className="text-xl font-bold mt-2 text-stone-50">{step.title}</h3>
            <p className="text-gray-400 mt-1 max-w-48 break-words whitespace-normal">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
