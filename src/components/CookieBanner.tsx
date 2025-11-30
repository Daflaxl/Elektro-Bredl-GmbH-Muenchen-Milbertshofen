import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Prüfe, ob der Benutzer bereits eine Entscheidung getroffen hat
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Zeige den Banner nach kurzer Verzögerung
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleClose = () => {
    // Beim Schließen ohne Auswahl wird abgelehnt (DSGVO-konform)
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-primary shadow-2xl"
        >
          <div className="container mx-auto px-4 py-6 max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Cookie Icon */}
              <div className="flex-shrink-0">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Cookie className="text-accent" size={24} />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg font-serif font-bold text-primary mb-2">
                  Cookie-Einstellungen
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                  Einige Cookies sind notwendig für den Betrieb der Website, während andere uns helfen, 
                  diese Website und die Nutzererfahrung zu verbessern (Tracking-Cookies). 
                  Sie können selbst entscheiden, ob Sie die Cookies zulassen möchten.
                </p>
                <p className="text-xs text-gray-500">
                  Weitere Informationen finden Sie in unserer{' '}
                  <a href="#" className="text-accent hover:underline">Datenschutzerklärung</a>.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <button
                  onClick={handleAccept}
                  className="bg-accent hover:bg-accent-light text-white px-6 py-2.5 rounded-sm font-medium text-sm transition-all shadow-sm whitespace-nowrap"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={handleDecline}
                  className="bg-transparent border border-primary text-primary hover:bg-primary/5 px-6 py-2.5 rounded-sm font-medium text-sm transition-all whitespace-nowrap"
                >
                  Ablehnen
                </button>
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors md:relative md:top-0 md:right-0"
                  aria-label="Schließen"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

