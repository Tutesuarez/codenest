import { useInView } from "react-intersection-observer";
import { CheckCircle, Globe, Mail, MonitorSmartphone, Server } from "lucide-react";
import RevealText from "@/components/TextReveal";
import { motion } from "framer-motion";

const Pack=()=>{
    const services = [
        { icon: <CheckCircle size={24} className="text-teal-400" />, title: "Diseño de Logo", description: "Un logo profesional y único para tu marca." },
        { icon: <MonitorSmartphone size={24} className="text-teal-400" />, title: "Página Web Profesional", description: "Moderna, rápida y adaptable a móviles." },
        { icon: <Globe size={24} className="text-teal-400" />, title: "Hosting y Dominio", description: "Tu espacio en internet con dominio propio." },
        { icon: <Mail size={24} className="text-teal-400" />, title: "Cuentas de Correo Corporativas", description: "Correo con tu dominio para mayor credibilidad." },
        { icon: <Server size={24} className="text-teal-400" />, title: "Soporte y Mantenimiento", description: "Nos encargamos de la parte técnica por ti." }
      ];
    
      const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    return(
        <>
        <div className="flex flex-col md:grid grid-cols-2 justify-items-center" ref={ref}>
            <RevealText>
              <div className=" flex flex-col md:max-w-lg ">
                <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }} className="text-4xl w-4/5 md:w-full font-bold text-start">¡Lanza tu negocio sin complicaciones con nuestro<span className="bg-teal-400 rounded-md text-stone-950"> Pack Emprendedor!</span>
                </motion.h2>

                <motion.p initial={{ opacity: 0, y: -30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="mt-5  md:w-4/5">
                  Si estás abriendo tu negocio, sabemos que hay mil cosas en qué pensar. Por eso, hemos creado un pack completo para que tengas una imagen profesional y una presencia online lista desde el primer día.
                </motion.p>
              </div>
            </RevealText>
            {/* Caracteristicas pack emprendedor */}
            <div className="">
              <ul className="space-y-10 mt-5">
                {services.map((service, index) => (
                  <motion.li key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, delay: index * 0.2 }}>
                    <span className="text-3xl ">{service.icon}</span>
                    
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10 md:mt-20">
            <RevealText >
              <p className="font-semibold text-lg md:text-2xl">Tú te enfocas en hacer crecer tu negocio, nosotros nos encargamos de tu presencia digital.</p>
            </RevealText>
          </div>
          </>
    )
}

export default Pack