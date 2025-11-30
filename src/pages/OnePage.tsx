import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Users, ArrowRight, Home, Zap, PenTool, Shield, CheckCircle2, Clock, MapPin, Award, Phone, Mail } from 'lucide-react';
import OfferForm from '../components/OfferForm';

const OnePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="start" className="relative bg-primary text-white py-20 md:py-32 overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/10 skew-x-12 transform origin-top-right pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.span 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-3 border border-accent/50 rounded-full text-accent text-sm font-medium tracking-wide mb-6"
          >
            SEIT 1903 IN MILBERTSHOFEN
          </motion.span>
          
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
            {/* Text Content - bleibt unverändert */}
            <div className="max-w-3xl flex flex-col">
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6"
              >
                Traditionelles Handwerk trifft auf <span className="text-accent">moderne Elektrotechnik</span>.
              </motion.h1>
              
              <motion.p 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
              >
                Ihr Familienbetrieb für Elektro-Sanierungen, Neubauten und individuelle Lichtkonzepte. 
                Präzise, zuverlässig und persönlich.
              </motion.p>
              
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mt-auto"
              >
                <a 
                  href="#kontakt" 
                  className="bg-accent hover:bg-accent-light text-white text-center px-8 py-4 rounded-sm font-medium text-lg transition-all shadow-lg hover:shadow-accent/20"
                >
                  Jetzt Angebot anfordern
                </a>
                <a 
                  href="#leistungen" 
                  className="bg-transparent border border-white/30 hover:bg-white/10 text-white text-center px-8 py-4 rounded-sm font-medium text-lg transition-all"
                >
                  Unsere Leistungen
                </a>
              </motion.div>
            </div>

            {/* Image - rechts daneben, bündig mit h1 bis Buttons */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-shrink-0 w-full lg:w-auto lg:max-w-lg xl:max-w-xl flex"
            >
              <img 
                src="/elektriker.jpg" 
                alt="Elektriker bei der Arbeit" 
                className="w-full h-full rounded-lg shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <ShieldCheck size={40} />,
                title: "Qualität & Sicherheit",
                desc: "Als Meisterbetrieb garantieren wir höchste Sicherheitsstandards und langlebige Installationen."
              },
              {
                icon: <Ruler size={40} />,
                title: "Präzise Planung",
                desc: "Wir arbeiten maßgeschneidert nach Ihren Wünschen – vom ersten Entwurf bis zur finalen Abnahme."
              },
              {
                icon: <Users size={40} />,
                title: "Familiär & Nah",
                desc: "In 4. Generation geführt, sind wir stolz auf persönliche Beratung und langjährige Kundenbeziehungen."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-accent/30 transition-colors"
              >
                <div className="text-accent mb-6">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser About Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src="/Milbertshofen Ansicht Archiv.jpg" 
                  alt="Historische Ansicht von Milbertshofen" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Elektro Bredl: Ein Name, der verpflichtet.
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Seit 1903 sind wir in München-Milbertshofen zuhause. Was als kleiner Handwerksbetrieb begann, 
                ist heute ein moderner Dienstleister für anspruchsvolle Elektroinstallationen.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Wir verbinden alte Werte wie Pünktlichkeit und Handschlagqualität mit neuester Technik 
                wie Smart Home und effizienten Energiekonzepten.
              </p>
              <a 
                href="#ueber-uns" 
                className="inline-flex items-center text-accent font-medium hover:text-accent-light group"
              >
                Mehr über unsere Geschichte <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-12 md:py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Unsere Leistungen</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ob kleine Reparatur oder Großprojekt: Wir bieten Ihnen das gesamte Spektrum moderner Elektrotechnik. 
              Mit Präzision, Sauberkeit und Fachwissen.
            </p>
          </div>

          <div className="container mx-auto px-4 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
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
              ].map((service, index) => (
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

          <div className="container mx-auto px-4 py-16 text-center">
            <a 
              href="#kontakt" 
              className="inline-flex items-center bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-sm font-medium text-lg transition-all shadow-md"
            >
              Beratungstermin vereinbaren <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber-uns" className="bg-background scroll-mt-20">
        <div className="w-full h-64 md:h-80 bg-primary relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <h1 className="relative z-20 text-4xl md:text-6xl font-serif font-bold text-white text-center px-4">
            Unsere Geschichte
          </h1>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Elektro Bredl – Seit 1903</h2>
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Planen Sie ein Projekt?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Lassen Sie uns gemeinsam Ihre Vorstellungen realisieren. 
            Fordern Sie jetzt ein unverbindliches Angebot an.
          </p>
          <a 
            href="#kontakt" 
            className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-4 rounded-sm font-medium text-lg transition-all shadow-lg"
          >
            Zum Angebotsformular
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="bg-background min-h-screen py-12 md:py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Kontaktieren Sie uns</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wir freuen uns auf Ihr Projekt. Rufen Sie uns an oder nutzen Sie unser Formular für ein individuelles Angebot.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                      <p className="text-gray-600">
                        Elektro Bredl GmbH<br />
                        <a 
                          href="https://www.google.de/maps/place/Schopenhauerstra%C3%9Fe+94,+80809+M%C3%BCnchen/@48.1794244,11.5613247,1531m/data=!3m2!1e3!4b1!4m6!3m5!1s0x479e742a7433f0e5:0x3505dff16dd59105!8m2!3d48.1794245!4d11.5661956!16s%2Fg%2F11b8vd_mnn?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          Schopenhauerstr. 94<br />80809 München
                        </a>
                      </p>
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
                    <span>07:30 - 17:00 Uhr</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Sa - So</span>
                    <span>Geschlossen</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
               <OfferForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnePage;

