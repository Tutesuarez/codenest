"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function contacto() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Título */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center"
      >
        Contáctanos
      </motion.h1>

      {/* Sección de Contacto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        
        {/* Formulario */}
        <motion.form 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 shadow-lg rounded-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input 
              {...register("nombre", { required: "El nombre es obligatorio" })}
              className="w-full p-3 border rounded-lg mt-1"
              placeholder="Tu nombre"
            />
            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Correo Electrónico</label>
            <input 
              type="email" 
              {...register("email", { required: "El email es obligatorio" })}
              className="w-full p-3 border rounded-lg mt-1"
              placeholder="email@ejemplo.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Mensaje</label>
            <textarea 
              {...register("mensaje", { required: "El mensaje no puede estar vacío" })}
              className="w-full p-3 border rounded-lg mt-1"
              rows="4"
              placeholder="Tu mensaje aquí..."
            ></textarea>
            {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-white hover:text-stone-900 hover:border-2 hover:border-stone-900 transition"
          >
            Enviar Mensaje
          </button>
        </motion.form>

        {/* Información de Contacto */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-500" size={24} />
            <p className="text-lg">code.nest.valencia@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-500" size={24} />
            <p className="text-lg">+34 627 165 711</p>
            <p className="text-lg">+34 672 324 653</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-blue-500" size={24} />
            <p className="text-lg">Valencia, España</p>
          </div>

          {/* Mapa (Opcional) */}
          <iframe 
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.3017364438215!2d-0.3685905!3d39.4625116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60491d346cdb31%3A0x40e1255181654df0!2sLlavor%20Urb%C3%A0!5e0!3m2!1sen!2ses!4v1738975279596!5m2!1sen!2ses"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
