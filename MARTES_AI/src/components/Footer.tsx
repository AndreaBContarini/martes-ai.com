import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/martes-logo-black.png" alt="Martes AI Logo" className="w-32 mb-4" />
            <p className="text-gray-400">
              Soluzioni di intelligenza artificiale su misura per il tuo business.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contatti</h4>
            <p className="text-gray-400">Email: info@martesai.com</p>
            <p className="text-gray-400">Tel: +39 02 1234567</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Note Legali</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Termini di Servizio
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Martes AI. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;