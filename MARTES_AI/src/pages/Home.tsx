import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { MessageSquare, Brain, Zap } from 'lucide-react';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-show');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    document.querySelectorAll('.slide-hidden').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      
      {/* Social Proof */}
      <section id="partners" className="py-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="ticker-container">
            <div className="ticker-content">
              {/* Partners logos */}
              {[
                { src: "https://i.ibb.co/nPq0dkr/PHOTO-2024-08-17-13-31-51-removebg-preview.png", alt: "We Travel Group" },
                { src: "https://i.ibb.co/7J3hBFy/fantozzi2-removebg-preview.png", alt: "Fantozzi & Associati" },
                { src: "https://i.ibb.co/BtPCmvC/ecommerceparts-removebg-preview.png", alt: "Ecommerceparts" },
                { src: "https://i.ibb.co/LpScFQN/citybeach.png", alt: "CityBeach Boardshop" },
                { src: "https://i.ibb.co/KzNTDF0D/loffredo.jpg", alt: "Federico Loffredo" }
              ].map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  className="partner-logo"
                />
              ))}
              {/* Duplicate set for continuous scrolling */}
              {[
                { src: "https://i.ibb.co/nPq0dkr/PHOTO-2024-08-17-13-31-51-removebg-preview.png", alt: "We Travel Group" },
                { src: "https://i.ibb.co/7J3hBFy/fantozzi2-removebg-preview.png", alt: "Fantozzi & Associati" },
                { src: "https://i.ibb.co/BtPCmvC/ecommerceparts-removebg-preview.png", alt: "Ecommerceparts" },
                { src: "https://i.ibb.co/LpScFQN/citybeach.png", alt: "CityBeach Boardshop" },
                { src: "https://i.ibb.co/KzNTDF0D/loffredo.jpg", alt: "Federico Loffredo" }
              ].map((partner, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={partner.src}
                  alt={partner.alt}
                  className="partner-logo"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confronto */}
      <section className="py-24 bg-gradient-to-b from-black/50 to-transparent" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-hidden slide-from-left">
            Evoluzione a Confronto
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-children slide-hidden slide-from-right">
            <div className="bg-black/40 p-8 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-red-400">
                Metodo tradizionale
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span>
                  Attività ripetitive, elaborazioni lunghe e manuali
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span>
                  Scalabilità limitata per attività periodiche
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span>
                  Lunghe attese, risposte tardive o automatiche
                </li>
              </ul>
            </div>
            <div className="bg-[#274f36]/20 p-8 rounded-xl border border-[#274f36] shadow-lg shadow-[#274f36]/20 hover:shadow-[#274f36]/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#274f36]">
                Metodo Martes AI
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-[#274f36] mr-2">✓</span>
                  Workflow automatizzati e basati su AI
                </li>
                <li className="flex items-center">
                  <span className="text-[#274f36] mr-2">✓</span>
                  Soluzioni scalabili per grandi volumi di dati
                </li>
                <li className="flex items-center">
                  <span className="text-[#274f36] mr-2">✓</span>
                  Disponibilità immediata 24/7, risposte "intelligenti"
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-hidden slide-from-right">
            I Nostri Servizi
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto stagger-children slide-hidden slide-from-left">
            <div className="bg-black/40 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#274f36] w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <MessageSquare size={36} className="md:w-12 md:h-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-6">Chatbot Intelligenti</h3>
              <ul className="space-y-4 text-gray-300 text-base">
                <li>• Supporto clienti 24/7 multilingue</li>
                <li>• Gestione automatizzata appuntamenti</li>
                <li>• Consigli personalizzati per utenti</li>
              </ul>
            </div>
            <div className="bg-black/40 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#274f36] w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <Brain size={36} className="md:w-12 md:h-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-6">Automazioni AI su Misura</h3>
              <ul className="space-y-4 text-gray-300 text-base">
                <li>• GPT personalizzati</li>
                <li>• Automazione email</li>
                <li>• Assistenti vocali AI</li>
              </ul>
            </div>
            <div className="bg-black/40 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#274f36] w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <Zap size={36} className="md:w-12 md:h-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-6">Lead Generation</h3>
              <ul className="space-y-4 text-gray-300 text-base">
                <li>• Espansione automatica contatti</li>
                <li>• Email marketing intelligente</li>
                <li>• Segmentazione avanzata</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section id="calendly" className="py-24 bg-gradient-to-b from-transparent to-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-hidden slide-from-left">
            Prenota una Chiamata
          </h2>
          <div className="max-w-4xl mx-auto bg-black/20 rounded-2xl p-1">
            <div 
              className="calendly-inline-widget rounded-xl overflow-hidden slide-hidden slide-from-right" 
              data-url="https://calendly.com/riccardobcontarini/30min?hide_gdpr_banner=1"
              style={{
                minWidth: "320px",
                height: "700px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-hidden slide-from-right">
            Domande Frequenti
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 stagger-children slide-hidden slide-from-left">
            <div className="bg-black/40 p-8 rounded-xl hover:bg-black/50 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-4">
                Quanto tempo ci vuole per implementare una soluzione?
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                I tempi di implementazione variano in base alla complessità del progetto,
                ma generalmente vanno da 2 a 8 settimane.
              </p>
            </div>
            <div className="bg-black/40 p-8 rounded-xl hover:bg-black/50 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-4">
                Le soluzioni sono personalizzabili?
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Sì, tutte le nostre soluzioni sono completamente personalizzabili in
                base alle tue esigenze specifiche.
              </p>
            </div>
            <div className="bg-black/40 p-8 rounded-xl hover:bg-black/50 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-4">
                Che tipo di supporto offrite?
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Offriamo supporto continuo via email e telefono, con tempi di
                risposta garantiti in base al piano scelto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;