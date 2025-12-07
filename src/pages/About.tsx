import { motion } from 'framer-motion';
import { Clock, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Image Placeholder */}
      <div className="w-full h-64 md:h-80 bg-primary relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <h1 className="relative z-20 text-4xl md:text-6xl font-serif font-bold text-white text-center px-4">
          Unsere Geschichte
        </h1>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Elektro B-Punkt – Seit 1903</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Seit über 120 Jahren steht der Name Bredl in München-Milbertshofen für handwerkliche Exzellenz. 
                Was einst von Urgroßvater Bredl als kleiner Betrieb für elektrische Anlagen gegründet wurde, 
                hat sich über Generationen hinweg stetig weiterentwickelt – ohne dabei die Wurzeln zu vergessen.
              </p>
              
              <h3 className="text-xl font-serif font-bold text-primary mb-4 mt-8">Unsere Philosophie</h3>
              <div className="bg-white p-8 border-l-4 border-accent rounded-r-lg shadow-sm mb-8">
                <p className="text-gray-700 italic text-lg">
                  "Wir verlassen eine Baustelle so sauber, wie wir sie vorgefunden haben – oder sauberer. 
                  Präzision ist für uns keine Option, sondern Standard."
                </p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Als Familienbetrieb legen wir größten Wert auf persönlichen Kontakt. Bei uns sind Sie keine Nummer. 
                Wir beraten Sie ehrlich, fair und transparent. Unsere Mitarbeiter sind nicht nur fachlich top geschult, 
                sondern auch freundlich und zuverlässig.
              </p>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="w-full md:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-primary mb-6 uppercase tracking-wider border-b pb-2">Auf einen Blick</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Clock className="text-accent mr-4 mt-1" size={20} />
                  <div>
                    <span className="block font-bold text-gray-900">Gegründet</span>
                    <span className="text-gray-600">1903 in München</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-accent mr-4 mt-1" size={20} />
                  <div>
                    <span className="block font-bold text-gray-900">Standort</span>
                    <span className="text-gray-600">Milbertshofen, München</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="text-accent mr-4 mt-1" size={20} />
                  <div>
                    <span className="block font-bold text-gray-900">Qualifikation</span>
                    <span className="text-gray-600">Eingetragener Meisterbetrieb</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="font-serif text-xl text-primary mb-2">Ihr Ansprechpartner</p>
                <p className="text-gray-600">Felix Bredl & Team</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
