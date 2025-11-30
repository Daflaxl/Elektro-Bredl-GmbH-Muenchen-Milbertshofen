import { motion } from 'framer-motion';
import { Home, Zap, PenTool, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'sanierung',
      icon: <Home size={32} />,
      title: 'Altbau-Sanierung',
      description: 'Wir bringen Ihre Elektrik auf den neuesten Stand. Sicherer Austausch alter Leitungen, Verteilerkästen und Schalterprogramme unter Berücksichtigung des Denkmalschutzes.'
    },
    {
      id: 'neubau',
      icon: <PenTool size={32} />,
      title: 'Neubau-Installation',
      description: 'Von der Baustromversorgung bis zur fertigen Steckdose. Wir planen und installieren die komplette Elektrotechnik für Ihr Traumhaus.'
    },
    {
      id: 'licht',
      icon: <Zap size={32} />,
      title: 'Lichtplanung & Design',
      description: 'Individuelle Lichtkonzepte, die Atmosphäre schaffen. Wir installieren moderne LED-Technik, Dimmer-Systeme und indirekte Beleuchtung.'
    },
    {
      id: 'sicherheit',
      icon: <Shield size={32} />,
      title: 'Sicherheitstechnik',
      description: 'Schützen Sie, was Ihnen wichtig ist. Installation von Rauchwarnmeldern, Alarmanlagen und Videoüberwachungssystemen.'
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Unsere Leistungen</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Ob kleine Reparatur oder Großprojekt: Wir bieten Ihnen das gesamte Spektrum moderner Elektrotechnik. 
          Mit Präzision, Sauberkeit und Fachwissen.
        </p>
      </div>

      {/* Service Grid */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-accent/30 transition-all flex flex-col md:flex-row gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-accent">
                  {service.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 size={16} className="text-green-500 mr-2" /> Fachgerechte Ausführung
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 size={16} className="text-green-500 mr-2" /> Hochwertige Materialien
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">So arbeiten wir</h2>
            <p className="text-gray-600">Transparenz und Zuverlässigkeit stehen bei uns an erster Stelle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line (Desktop only) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 -z-10 transform translate-y-4"></div>
            
            {[
              { step: "01", title: "Beratung", text: "Wir besprechen Ihre Wünsche vor Ort." },
              { step: "02", title: "Angebot", text: "Sie erhalten einen detaillierten Kostenvoranschlag." },
              { step: "03", title: "Umsetzung", text: "Termingerechte und saubere Installation." },
              { step: "04", title: "Abnahme", text: "Gemeinsame Prüfung und Einweisung." }
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-white">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg border-4 border-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-16 text-center">
        <Link 
          to="/kontakt" 
          className="inline-flex items-center bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-sm font-medium text-lg transition-all shadow-md"
        >
          Beratungstermin vereinbaren <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
