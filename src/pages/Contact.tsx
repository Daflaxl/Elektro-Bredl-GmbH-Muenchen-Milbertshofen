import { Clock } from 'lucide-react';
import OfferForm from '../components/OfferForm';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Kontaktieren Sie uns</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir freuen uns auf Ihr Projekt. Nutzen Sie unser Formular für ein individuelles Angebot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info Side */}
          <div className="space-y-8">
            <div className="bg-primary text-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
                <Clock className="mr-3 text-accent" size={24} /> Öffnungszeiten
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mo - Do</span>
                  <span>07:30 - 17:00 Uhr</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Freitag</span>
                  <span>07:30 - 17:00 Uhr</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Sa - So</span>
                  <span>Geschlossen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:sticky lg:top-24">
             <OfferForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
