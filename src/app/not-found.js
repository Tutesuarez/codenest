"use client";
import Link from "next/link";
import SplashCursor from '../components/Splash';
import './globals.css'



const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white text-center overflow-hidden">
      <SplashCursor />
      {/* Fondo animado con estrellas */}
      <div className="absolute inset-0 bg-[url('/image/espacio.webp')] bg-cover bg-center "></div>

      {/* Astronauta detrás del texto */}
      <img
        src="/image/astronauta.webp"
        alt="Astronauta flotando"
        className="astronauta absolute w-80 md:w-[30rem] "
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Título */}
      <h1 className="error_title text-6xl md:text-9xl font-extrabold relative  text-teal-400 z-10">404</h1>
      <p className="error_text text-xl md:text-2xl mt-4 relative text-bold  z-10">
        ¡Parece que te has perdido en el espacio!
      </p>

      {/* Botón para volver al inicio */}
      <Link href="/">
        <button className="error_btn mt-8 px-6 py-3 text-lg   bg-teal-400 text-black rounded-full font-semibold hover:bg-teal-300 transition relative z-10">
          Volver a casa
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
