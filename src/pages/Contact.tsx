import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import OfferForm from '../components/OfferForm';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Kontaktieren Sie uns</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir freuen uns auf Ihr Projekt. Rufen Sie uns an oder nutzen Sie unser Formular für ein individuelles Angebot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Kontaktdaten</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-full mr-4 text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Anschrift</p>
                    <p className="text-gray-600">Elektro Bredl GmbH<br />Schopenhauerstr. 94<br />80809 München</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-full mr-4 text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Telefon</p>
                    <a href="tel:+49893508181" className="text-gray-600 hover:text-accent transition-colors block">
                      (089) 350 81 81
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-full mr-4 text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">E-Mail</p>
                    <a href="mailto:Elektro-Bredl@Outlook.de" className="text-gray-600 hover:text-accent transition-colors block">
                      Elektro-Bredl@Outlook.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
                <Clock className="mr-3 text-accent" size={24} /> Öffnungszeiten
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mo - Do</span>
                  <span>07:30 - 16:30 Uhr</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Freitag</span>
                  <span>07:30 - 13:00 Uhr</span>
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
