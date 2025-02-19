import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function ChiSiamo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    revenue: '',
    budget: '',
    startDate: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'andreabcontarini@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          project_description: formData.project,
          company_revenue: formData.revenue,
          budget: formData.budget,
          start_date: formData.startDate,
          website: formData.website,
        }
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        project: '',
        revenue: '',
        budget: '',
        startDate: '',
        website: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-20">Chi siamo</h1>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-20">
          {/* Riccardo */}
          <div className="text-center">
            <div className="mb-6 relative">
              <img
                src="/src/images/riccardo.jpg"
                alt="Riccardo"
                className="w-64 h-64 rounded-full mx-auto object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">Riccardo</h2>
            <p className="text-gray-300 mb-4">
              Studente di ingegneria informatica
            </p>
            <p className="text-[#274f36] mb-6">riccardo@martes-ai.com</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Andrea */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/src/images/andrea.jpg"
                alt="Andrea"
                className="w-64 h-64 rounded-full mx-auto object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">Andrea</h2>
            <p className="text-gray-300 mb-4">Laureato in Fisica</p>
            <p className="text-[#274f36] mb-6">andrea@martes-ai.com</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="max-w-2xl mx-auto bg-black/40 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Hai un progetto in mente?
          </h2>
          <p className="text-center text-xl mb-8">
            Contattaci per condividere con noi la tua idea
          </p>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-center">
              Grazie per averci contattato! Ti risponderemo al più presto.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-center">
              Si è verificato un errore. Per favore riprova più tardi o contattaci direttamente via email.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome*</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Inserisci il tuo nome"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email*</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Inserisci la tua email"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Parlaci del tuo progetto: dove vorresti applicare l'intelligenza
                artificiale per migliorare il tuo lavoro?*
              </label>
              <textarea
                name="project"
                required
                rows={4}
                placeholder="Inserisci qui i dettagli"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Quanto fattura la tua azienda?*
              </label>
              <input
                type="text"
                name="revenue"
                required
                placeholder="Inserisci un numero indicativo"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Quant'è il tuo budget per questo progetto?*
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="budget"
                    value="<1500"
                    className="mr-2"
                    onChange={handleChange}
                  />
                  Meno di 1500€
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="budget"
                    value="1500-3000"
                    className="mr-2"
                    onChange={handleChange}
                  />
                  1500€ - 3000€
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="budget"
                    value="3000-5000"
                    className="mr-2"
                    onChange={handleChange}
                  />
                  3000€ - 5000€
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="budget"
                    value=">5000"
                    className="mr-2"
                    onChange={handleChange}
                  />
                  Più di 5000€
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Quando vorresti iniziare il progetto?*
              </label>
              <input
                type="text"
                name="startDate"
                required
                placeholder="Es: Il prima possibile, Tra 2 mesi, etc."
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Sito internet della tua azienda
              </label>
              <input
                type="url"
                name="website"
                placeholder="Inserisci qui il link"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#274f36] hover:bg-[#1a3524] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChiSiamo;