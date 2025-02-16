"use client";
import { motion } from "framer-motion";
import { FaShoppingCart, FaGraduationCap, FaWordpress } from "react-icons/fa";

const services = [
  {
    title: "Ecommerce",
    description: "Creamos tiendas en línea escalables con integración de pagos y optimización SEO.",
    icon: <FaShoppingCart size={50} className="text-teal-400" />,
  },
  {
    title: "Plataformas de Aprendizaje",
    description: "Desarrollamos LMS personalizados para cursos online y formación digital.",
    icon: <FaGraduationCap size={50} className="text-teal-400" />,
  },
  {
    title: "WordPress & Web Corporativas",
    description: "Sitios web optimizados con WordPress, diseño moderno y velocidad mejorada.",
    icon: <FaWordpress size={50} className="text-teal-400" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="p-10 bg-stone-900 text-stone-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-stone-800 rounded-lg shadow-md flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mt-4">{service.title}</h3>
              <p className="text-stone-300 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
