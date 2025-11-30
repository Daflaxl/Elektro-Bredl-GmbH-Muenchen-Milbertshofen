import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('start');

  const navLinks = [
    { name: 'Startseite', path: '#start' },
    { name: 'Leistungen', path: '#leistungen' },
    { name: 'Über uns', path: '#ueber-uns' },
    { name: 'Kontakt', path: '#kontakt' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = path.replace('#', '');
    
    // Wenn es der Start-Bereich ist, direkt ganz nach oben scrollen
    if (targetId === 'start' || targetId === '') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['start', 'leistungen', 'ueber-uns', 'kontakt'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50 border-b border-primary/10">
      {/* Top Bar for Contact Info */}
      <div className="bg-primary text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
          <span className="opacity-80">Elektromeisterbetrieb seit 1903</span>
          <div className="flex space-x-6">
            <a href="tel:+49893508181" className="flex items-center hover:text-accent transition-colors">
              <Phone size={14} className="mr-2" /> (089) 350 81 81
            </a>
            <a href="mailto:Elektro-Bredl@Outlook.de" className="flex items-center hover:text-accent transition-colors">
              <Mail size={14} className="mr-2" /> Elektro-Bredl@Outlook.de
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#start" onClick={(e) => handleNavClick(e, '#start')} className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-primary tracking-tight">
              ELEKTRO BREDL
            </span>
            <span className="text-xs text-accent font-medium tracking-widest uppercase">
              GmbH &bull; München
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === link.path.replace('#', '') ? 'text-accent' : 'text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={(e) => handleNavClick(e, '#kontakt')}
              className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-sm font-medium transition-all shadow-sm text-sm"
            >
              Angebot anfordern
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary hover:text-accent transition-colors"
            aria-label="Menü öffnen"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`text-lg font-medium py-2 border-b border-gray-50 ${
                     activeSection === link.path.replace('#', '') ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={(e) => handleNavClick(e, '#kontakt')}
                className="bg-accent text-white text-center py-3 rounded-sm font-medium mt-4"
              >
                Angebot anfordern
              </a>
              
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col space-y-3 text-sm text-gray-600">
                <a href="tel:+49893508181" className="flex items-center">
                  <Phone size={16} className="mr-3 text-accent" /> (089) 350 81 81
                </a>
                <a href="mailto:Elektro-Bredl@Outlook.de" className="flex items-center">
                  <Mail size={16} className="mr-3 text-accent" /> Elektro-Bredl@Outlook.de
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
