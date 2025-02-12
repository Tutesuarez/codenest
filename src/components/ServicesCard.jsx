import { LucideIcon } from 'lucide-react';


const ServiceCard = ({ servicio, descripcion, icon: Icon }) => {
  return (
    <div className="group p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 transition-all duration-300 hover:border-accent/20 hover:bg-white/10">
      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-accent text-stone-50" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-white">{servicio}</h3>
        <p className="text-gray-100 leading-relaxed">{descripcion}</p>
      </div>
    </div>
  );
};

export default ServiceCard;