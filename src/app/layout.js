import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";





const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})


export const metadata = {
  title: "Desarrollo Web en Valencia | Soluciones digitales | Diseño Web | Aplicaiones WEB | Mantenimento WEB | CODENEST | Wordpress",
  description: "Ofrecemos soluciones digitales a medida, incluyendo desarrollo web profesional, diseño de sitios responsivos, creación de aplicaciones web innovadoras, SEO avanzado para mejorar tu posicionamiento en buscadores, diseño gráfico impactante y mantenimiento web para garantizar el rendimiento y seguridad de tu página. Ya sea que necesites tu primera web o mejorar tu presencia online, te ayudamos a destacar con estrategias efectivas y tecnología de vanguardia. ¡Hablemos sobre cómo llevar tu negocio al siguiente nivel!",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={` ${montserrat.variable} bg-stone-100`}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>

    </body>
    </html>
  );
}
