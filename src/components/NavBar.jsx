"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Iconos para abrir/cerrar menú
import Link from "next/link";
import './Navbar.css'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav className="sticky top-0 z-50 bg-stone-950 font-Ralway font-light">
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-gray-900 bg-opacity-80 backdrop-blur-md" : "bg-transparent"}`}>
      <div className=" container_navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}<Link href="/">
          <p className="text-2xl logo text-stone-50"><span className="brackets text-red-800">&#123;</span>CODE<span className="brackets text-red-800">&#125;</span>NEST
          </p>
          </Link>

          {/* Menú en pantallas grandes */}
          <ul className="hidden md:flex space-x-6 menu-bignav">
            <li><Link href="/#que-hacemos" className="text-stone-50 hover:text-teal-400  focus:text-teal-400">Qué Hacemos</Link></li>
            <li><Link href="/#servicios" className="text-stone-50 hover:text-teal-400 focus:text-teal-400">Servicios</Link></li>
            <li><Link href="/#contacto" className="text-stone-50 hover:text-teal-400 focus:text-teal-400">Contacto</Link></li>
          </ul>

          {/* Botón de menú móvil */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 burguer-button" alt='' >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div> 
      </div>

      {/* Menú móvil animado */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-16 left-0 w-full bg-gray-900 bg-opacity-90 shadow-md md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li className="text-stone-50 border-b-2 border-teal-400 hover:text-teal-400"><Link href="/#que-hacemos" className="" onClick={() => setIsOpen(false)}>Qué Hacemos</Link></li>
          <li className="text-stone-50 border-b-2 border-teal-400 hover:text-teal-400"><Link href="/#servicios"  onClick={() => setIsOpen(false)}>Servicios</Link></li>
          <li className="text-stone-50 border-b-2 border-teal-400 hover:text-teal-400"><Link href="/#contacto"  onClick={() => setIsOpen(false)}>Contacto</Link></li>
        </ul>
      </motion.div>
    </nav>
  );
}
