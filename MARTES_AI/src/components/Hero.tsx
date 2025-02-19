import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function Hero() {
  const scrollToPartners = () => {
    const partnersSection = document.getElementById('partners');
    if (partnersSection) {
      partnersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4 md:px-0">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a3524] to-black animate-gradient-xy"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--duration': `${10 + Math.random() * 20}s`,
                '--delay': `${-Math.random() * 20}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated text reveal */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 reveal-text">
            Automazioni AI
            <br />
            <span className="bg-gradient-to-r from-[#274f36] to-emerald-400 text-transparent bg-clip-text">
              su misura per te
            </span>
          </h1>

          <h2 className="text-lg md:text-xl mb-8 opacity-90 px-4 md:px-0">
            Trasforma il tuo business con
            <span className="relative mx-2 inline-block">
              <span className="relative z-10">soluzioni AI personalizzate</span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-[#274f36]/40 blur-sm"></span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#274f36]"></span>
            </span>
            <br />
            Martes AI è il tuo partner per l'innovazione digitale
          </h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6 mb-12 px-4 md:px-0">
            <a 
              href="#calendly" 
              className="bg-[#274f36] hover:bg-[#1a3524] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#274f36]/20 transform hover:-translate-y-1"
            >
              Prenota una chiamata
            </a>
            <Link 
              to="/chi-siamo#contact-form" 
              className="border-2 border-[#274f36] text-white hover:bg-[#274f36] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#274f36]/20 transform hover:-translate-y-1"
            >
              Parlaci della tua idea
            </Link>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToPartners}
            className="animate-bounce mt-4 text-[#274f36] hover:text-white transition-colors duration-300"
            aria-label="Scroll to partners"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Hero;