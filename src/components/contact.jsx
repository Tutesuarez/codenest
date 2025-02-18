import Link from "next/link";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import './contact.css'
import emailjs from "emailjs-com"; // Importa EmailJS


const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const form = useRef()

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // Envía el correo usando EmailJS
     
      
      
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, // Tu ID de servicio de EmailJS
        process.env.NEXT_PUBLIC_TEMPLATE_ID, // Tu ID de plantilla de EmailJS
        form.current, // Los datos del formulario
        process.env.NEXT_PUBLIC_USER_ID // Tu ID de usuario de EmailJS
    );

      if (response.status === 200) {
        toast.success("¡Mensaje enviado correctamente!"); // Notificación de éxito
        reset();  // Resetea el formulario
      } else {
        toast.error("Hubo un problema al enviar el mensaje."); // Si algo sale mal
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Hubo un problema al enviar el mensaje.");
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className="form space-y-6 w-full max-w-md">
      <div className="form_line space-y-2">
        <label htmlFor="name" className="label_form text-sm font-medium text-gray-200">Nombre</label>
        <input
          {...register("nombre", { required: "El nombre es obligatorio" })}
          type="text"
          id="name"
          className="label_form_input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder:text-gray-500"
          placeholder="Juan Pedro"
        />
        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
      </div>

      <div className="form_line space-y-2 ">
        <label htmlFor="email" className="label_form text-sm font-medium text-gray-200">Correo Electrónico</label>
        <input
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: { value: /\S+@\S+\.\S+/, message: "Correo inválido" },
          })}
          type="email"
          id="email"
          className="label_form_input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder:text-gray-500"
          placeholder="next@service.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="form_line space-y-2">
        <label htmlFor="message" className="label_form text-sm font-medium text-gray-200">Mensaje</label>
        <textarea
          {...register("mensaje", { required: "El mensaje es obligatorio" })}
          id="message"
          rows={4}
          className="label_form_input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder:text-gray-500 resize-none"
          placeholder="¿Cómo podemos ayudarte?"
        />
        {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-send w-full px-6 py-3 bg-teal-400 text-stone-900 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-teal-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : <><span>Enviar mensaje</span><Send className="icon_send w-4 h-4" /></>}
      </button>

      <div className="mt-0">
        <Link href="./privacidad">
          <p className="text-center text-stone-500">Al enviar su consulta acepta la Política de privacidad</p>
        </Link>
      </div>
    </form>
  );
};

export default ContactForm;