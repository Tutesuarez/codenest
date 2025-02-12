import { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully!");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-200">Nombre</label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-white placeholder:text-gray-500"
          placeholder="John Doe"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-200">Correo Electronico</label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-white placeholder:text-gray-500"
          placeholder="john@example.com"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-200">Mensaje</label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-white placeholder:text-gray-500 resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-stone-50 text-stone-900 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-stone-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            Enviar mensaje
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;