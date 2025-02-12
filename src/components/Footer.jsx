
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white text-center p-6">
            <div className="flex flex-col md:grid md:grid-cols-2 mx-16">

            {/* Sección superior con el logo y botón */}
            <div className="flex flex-col md:flex-row justify-items-center items-center max-w-4xl md:ms-text-center">
                <div className="w-full  text-center">
                <Link href="/">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        <span className="brackets text-red-800">&#123;</span>CODE
                        <span className="brackets text-red-800">&#125;</span>NEST
                    </h2>
                    <p className="text-gray-400 mt-2">Transformando ideas en realidades digitales.</p>
                    </Link>
                </div>
            </div>

            {/* Sección inferior con el menú y derechos reservados */}
            <div className="flex flex-col items-center max-w-4xl mx-auto mt-6">
                {/* Menú alineado a la izquierda */}
                <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
                    <li><Link href="#que-hacemos">¿Qué hacemos?</Link></li>
                    <li><Link href="#servicios">Servicios</Link></li>
                </ul>

                {/* Derechos reservados alineados a la derecha */}
                <p className="mt-4 md:mt-6 text-gray-400 text-center md:text-right">
                    © 2025 Todos los derechos reservados.
                </p>
            </div>
            </div>
        </footer>

    )
}

export default Footer