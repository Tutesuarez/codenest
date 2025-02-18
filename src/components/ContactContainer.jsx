import ContactForm from "@/components/contact";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";
import './contact.css'

const ContactContainer=()=>{
    return(
        <>
        <div className="flex justify-items-center">
          <div className="container_contact  max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-8">
                <div className="max-w-fit">
                  <p className="section_title text-teal-400 font-bold">CONTACTENOS</p>
                </div>
                <h2 className="title text-4xl font-heading font-bold text-stone-50">
                  Creemos algo increíble juntos
                </h2>
                <p className="contact_description text-gray-100 leading-relaxed">
                  ¿Está listo para llevar su presencia digital al siguiente nivel? Contáctenos hoy y analicemos cómo podemos ayudarlo a alcanzar sus objetivos.
                </p>
                <div className=" flex items-center space-x-4">
                  <Mail className="icons_contact text-stone-50" size={24} />
                  <p className="contact_info text-lg text-stone-50">code.nest.valencia@gmail.com</p>
                </div>
                <div className=" flex items-center  md:space-x-4">
                  <Phone className="icons_contact text-stone-50" size={24} />
                  <div className=" flex-col ps-5 md:flex md:flex-row md:px-0 md:space-x-4">
                    <p className="contact_info text-lg text-stone-50">+34 627 165 711</p>
                    <p className="contact_info text-lg text-stone-50">+34 672 324 653</p>
                  </div>
                </div>
                <div className=" flex items-center space-x-4">
                  <MapPin className="icons_contact text-stone-50" size={24} />
                  <p className="contact_info text-lg text-stone-50">Valencia, España</p>
                </div>
                <div className='justify-items-start'>

                  {/* Sección de los íconos de redes sociales */}
                  <div className="social_conatiner flex space-x-6 mt-4">
                    <Link href="https://www.instagram.com/codenest.digital?igsh=MTJqZ2IyNGxxNXh4OA==" target="_blank">
                      <FaInstagram size={30} className="social text-teal-400 hover:text-red-600" />
                    </Link>
                    <Link href="https://wa.me/34627165711" target="_blank">
                      <FaWhatsapp size={30} className="social text-teal-400 hover:text-green-500" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <ContactForm/>
          </div>
        </div>
        </>
    )
}

export default ContactContainer