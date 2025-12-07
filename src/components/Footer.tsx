import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4 tracking-tight">ELEKTRO B-PUNKT</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Ihr Meisterbetrieb für Elektroinstallationen in München. 
              Qualität und Tradition seit 1903.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Navigation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#start" className="hover:text-white transition-colors">Startseite</a></li>
              <li><a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a></li>
              <li><a href="#ueber-uns" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Leistungen</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Altbau-Sanierung</li>
              <li>Neubau-Installation</li>
              <li>Lichtplanung</li>
              <li>Smart Home</li>
              <li>E-Check & Sicherheit</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Kontakt</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <a 
                  href="https://www.google.de/maps/place/Schopenhauerstra%C3%9Fe+94,+80809+M%C3%BCnchen/@48.1794244,11.5613247,1531m/data=!3m2!1e3!4b1!4m6!3m5!1s0x479e742a7433f0e5:0x3505dff16dd59105!8m2!3d48.1794245!4d11.5661956!16s%2Fg%2F11b8vd_mnn?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Schopenhauerstr. 94<br/>80809 München
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <a href="tel:+49893508181" className="hover:text-white">(089) 350 81 81</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:Elektro-Bredl@Outlook.de" className="hover:text-white">Elektro-Bredl@Outlook.de</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Elektro B-Punkt GmbH. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <Link to="/impressum" className="hover:text-gray-300">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-gray-300">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

