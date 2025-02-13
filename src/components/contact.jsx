// import { useState } from 'react';
// import { toast } from 'sonner';
// import { Send } from 'lucide-react';

// const ContactForm = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       toast.success("Message sent successfully!");
//     }, 1000);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
//       <div className="space-y-2">
//         <label htmlFor="name" className="text-sm font-medium text-gray-200">Nombre</label>
//         <input
//           type="text"
//           id="name"
//           required
//           className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder:text-gray-500"
//           placeholder="Juan Pedro"
//         />
//       </div>
//       <div className="space-y-2">
//         <label htmlFor="email" className="text-sm font-medium text-gray-200">Correo Electronico</label>
//         <input
//           type="email"
//           id="email"
//           required
//           className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder:text-gray-500"
//           placeholder="next@service.com"
//         />
//       </div>
//       <div className="space-y-2">
//         <label htmlFor="message" className="text-sm font-medium text-gray-200">Mensaje</label>
//         <textarea
//           id="message"
//           required
//           rows={4}
//           className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder:text-gray-500 resize-none"
//           placeholder="Como podemos ayudarte.."
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full px-6 py-3 bg-teal-400 text-stone-900 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-teal-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         {loading ? (
//           "Sending..."
//         ) : (
//           <>
//             Enviar mensaje
//             <Send className="w-4 h-4" />
//           </>
//         )}
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Hubo un problema al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-200">Nombre</label>
        <input
          {...register("nombre", { required: "El nombre es obligatorio" })}
          type="text"
          id="name"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder:text-gray-500"
          placeholder="Juan Pedro"
        />
        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-200">Correo Electrónico</label>
        <input
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: { value: /\S+@\S+\.\S+/, message: "Correo inválido" },
          })}
          type="email"
          id="email"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder:text-gray-500"
          placeholder="next@service.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-200">Mensaje</label>
        <textarea
          {...register("mensaje", { required: "El mensaje es obligatorio" })}
          id="message"
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder:text-gray-500 resize-none"
          placeholder="¿Cómo podemos ayudarte?"
        />
        {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-teal-400 text-stone-900 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-teal-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : <>
          Enviar mensaje
          <Send className="w-4 h-4" />
        </>}
      </button>
    </form>
  );
};

export default ContactForm;
