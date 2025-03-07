import Image from 'next/image';
import './page.css'

export const metadata = {
  title: "Servicios | CODENEST",
  description: "Habla con nosotros para desarrollar tu sitio web, tienda online o plataforma digital.",
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


export default function Servicios() {
  const services = [
    {
      title: "Desarrollo Web",
      description:
        "En CODENEST, diseñamos y desarrollamos paginas web profesionales a medida para que tu negocio tenga una presencia online profesional y efectiva. Creamos experiencias digitales personalizadas, adaptadas a las necesidades de cada cliente y optimizadas para ofrecer el mejor rendimiento.\n\n¿Por qué elegirnos para el desarrollo web?\n• Diseño personalizado: Creamos diseños únicos y modernos que reflejan la identidad de tu marca.\n• Optimizado para SEO: Implementamos técnicas de optimización para mejorar tu posición en Google.\n• Responsive Design: Garantizamos una navegación fluida en cualquier dispositivo.\n• Seguridad y velocidad: Implementamos medidas para proteger tu web y mejorar la velocidad de carga.",
      image: "/image/llavor.webp",
    },
    {
      ref:"#desrrollorWeb",
      title: "Aplicaciones Web",
      description:
        "Desarrollamos aplicaciones web que optimizan los procesos de tu negocio y mejoran la interacción con tus clientes. Diseñamos soluciones a medida, escalables y seguras.\n\nBeneficios de nuestras aplicaciones web:\n• Accesibilidad total: Se pueden utilizar desde cualquier dispositivo y ubicación.\n• Automatización de procesos: Agiliza tareas y reduce costos operativos.\n• Seguridad avanzada: Protección contra amenazas y datos cifrados.\n• Escalabilidad: Diseñadas para crecer junto a tu negocio.",
      image: "/image/dash.webp",
    },
    {
      title: "Mantenimiento Web",
      description:
        "Nos aseguramos de que tu sitio web esté siempre actualizado, seguro y funcionando sin problemas.\n\nServicios de mantenimiento:\n• Actualización de plugins y software.\n• Monitoreo de seguridad.\n• Corrección de errores y bugs.\n• Optimización de velocidad y rendimiento.\n• Copias de seguridad periódicas.",
      image: "/image/mantenimiento.webp",
    },
    {
      title: "SEO Técnico",
      description:
        "Optimizamos tu web para que Google la indexe correctamente y mejore su posicionamiento.\n\nEstrategias de SEO Técnico:\n• Optimización de velocidad y rendimiento.\n• Corrección de errores de rastreo e indexación.\n• Uso adecuado de etiquetas y metadatos.\n• Estructura de enlaces internos y externos.",
      image: "/image/seo.webp",
    },
    {
      title: "Diseño Gráfico",
      description:
        "Creamos identidades visuales y materiales gráficos que potencian la imagen de tu marca.\n\nServicios de diseño gráfico:\n• Diseño de logotipos.\n• Material corporativo (tarjetas, folletos, catálogos).\n• Diseño de interfaces web y apps.",
      image: "/image/design.webp",
    },
  ];

  return (
    <div className="bg-stone-100 text-gray-900 min-h-screen md:mt-36 py-12 px-6">
      <div className="sec_container max-w-6xl mx-auto text-center">
        <h1 className="sec_title text-4xl font-bold mb-7 text-teal-400">Nuestros Servicios</h1>
        <p className="sec_description text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Descubre nuestras soluciones diseñadas para potenciar tu presencia digital.
        </p>
      </div>
      <div className="serv_container max-w-6xl mx-auto flex flex-col gap-12">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse bg-gray-900 text-stone-100' : 'bg-stone-100 text-gray-950'} p-8 rounded-lg`}
          >
            <div className="w-full md:w-1/2 h-96 relative" id={service.ref}>
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="serv_title text-3xl font-bold text-teal-400">{service.title}</h2>
              <p className="serv_text text-lg mt-4 whitespace-pre-line">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
