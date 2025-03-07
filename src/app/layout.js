import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'




const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})


export const metadata = {
  title: "Desarrollo Web en Valencia | Soluciones digitales | Diseño Web | Aplicaiones WEB | Mantenimento WEB | CODENEST | Wordpress",
  description: "Ofrecemos soluciones digitales a medida, incluyendo desarrollo web profesional, diseño de sitios responsivos, creación de aplicaciones web innovadoras, SEO avanzado para mejorar tu posicionamiento en buscadores, diseño gráfico impactante y mantenimiento web para garantizar el rendimiento y seguridad de tu página. Ya sea que necesites tu primera web o mejorar tu presencia online, te ayudamos a destacar con estrategias efectivas y tecnología de vanguardia. ¡Hablemos sobre cómo llevar tu negocio al siguiente nivel!",
  keywords: "desarrollo web, ecommerce, SEO, plataformas de aprendizaje, WordPress, Next.js",
  openGraph: {
    title: "CODENEST | Servicios digitales",
    description: "En CODENEST creamos experiencias digitales únicas. Desarrollo web, e-commerce, SEO y plataformas online.",
    type: "website",
    url: "https://codenest.es", // Reemplaza con tu dominio
    images: [
      {
        url: "https://codenest.es/image/logo-redes.webp", // Imagen para compartir en redes sociales
        width: 1200,
        height: 630,
        alt: "CODENEST Desarrollo Web",
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
       <GoogleAnalytics gaId="G-NJ8X237ZFY" />
      <body className={` ${montserrat.variable} bg-stone-100`}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>

    </body>
    </html>
  );
}
