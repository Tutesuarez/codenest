"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Iconos para abrir/cerrar menú
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-stone-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}<Link href="/">
          <p className="text-2xl logo text-stone-900"><span className="brackets text-red-800">&#123;</span>CODE<span className="brackets text-red-800">&#125;</span>NEST
          </p>
          </Link>

          {/* Menú en pantallas grandes */}
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/#que-hacemos" className="text-gray-700 hover:text-stone-950">Qué Hacemos</Link></li>
            <li><Link href="/servicios" className="text-gray-700 hover:text-stone-950">Servicios</Link></li>
            <li><Link href="/#tu-primera-web" className="text-gray-700 hover:text-stone-950">Tu Primera Web</Link></li>
            <li><Link href="/contacto" className="text-gray-700 hover:text-stone-950">Contacto</Link></li>
          </ul>

          {/* Botón de menú móvil */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú móvil animado */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li><Link href="/#que-hacemos" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Qué Hacemos</Link></li>
          <li><Link href="/servicios" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Servicios</Link></li>
          <li><Link href="/#tu-primera-web" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Tu Primera Web</Link></li>
          <li><Link href="/contacto" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Contacto</Link></li>
        </ul>
      </motion.div>
    </nav>
  );
}
