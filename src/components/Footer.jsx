
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white text-center p-6">
            {/* Sección superior con el logo y botón */}
            <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto text-center md:text-left">
                <div className="w-full md:w-2/4 text-center">
                <Link href="/">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        <span className="brackets text-red-800">&#123;</span>CODE
                        <span className="brackets text-red-800">&#125;</span>NEST
                    </h2>
                    <p className="text-gray-400 mt-2">Transformando ideas en realidades digitales.</p>
                    </Link>
                </div>
                <div className='justify-items-center'>
                <Link href="/contacto">
                <button
                    className="px-6 py-3  bg-stone-50 text-stone-900 hover:bg-inherit hover:border-2 hover:text-stone-50 font-semibold rounded-full mt-4 md:mt-0">
                    Contáctanos
                </button>
                </Link>
            {/* Sección de los íconos de redes sociales */}
            <div className="flex justify-center space-x-6 mt-4">
                <Link href="https://www.instagram.com/codenest.digital?igsh=MTJqZ2IyNGxxNXh4OA==" target="_blank">
                    <FaInstagram size={30} className="text-white hover:text-red-600" />
                </Link>
                <Link href="https://wa.me/34627165711" target="_blank">
                    <FaWhatsapp size={30} className="text-white hover:text-green-500" />
                </Link>
            </div>
                </div>
            </div>

            {/* Sección inferior con el menú y derechos reservados */}
            <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto mt-6">
                {/* Menú alineado a la izquierda */}
                <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
                    <li><Link href="#que-hacemos">¿Qué hacemos?</Link></li>
                    <li><Link href="#servicios">Servicios</Link></li>
                    <li><Link href="#tu-primera-web">Tu primera web</Link></li>
                    <li><Link href="#contacto">Contacto</Link></li>
                </ul>

                {/* Derechos reservados alineados a la derecha */}
                <p className="mt-4 md:mt-0 text-gray-400 text-center md:text-right">
                    © 2025 Todos los derechos reservados.
                </p>
            </div>
        </footer>

    )
}

export default Footer