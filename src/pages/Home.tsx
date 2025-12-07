import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Users, ArrowRight, Home as HomeIcon } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern/Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/10 skew-x-12 transform origin-top-right pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-3 border border-accent/50 rounded-full text-accent text-sm font-medium tracking-wide mb-6"
            >
              SEIT 1903 IN MÜNCHEN
            </motion.span>
            
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
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/kontakt" 
                className="bg-accent hover:bg-accent-light text-white text-center px-8 py-4 rounded-sm font-medium text-lg transition-all shadow-lg hover:shadow-accent/20"
              >
                Jetzt Angebot anfordern
              </Link>
              <Link 
                to="/leistungen" 
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white text-center px-8 py-4 rounded-sm font-medium text-lg transition-all"
              >
                Unsere Leistungen
              </Link>
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
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-accent/30 transition-colors group"
              >
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
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
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center bg-primary/5">
                 {/* Placeholder for an image */}
                 <HomeIcon size={64} className="text-primary/20" />
                 <div className="absolute inset-0 border-2 border-accent/20 m-4 rounded" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Elektro B-Punkt: Ein Name, der verpflichtet.
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Seit 1903 sind wir in München-Milbertshofen zuhause. Was als kleiner Handwerksbetrieb begann, 
                ist heute ein moderner Dienstleister für anspruchsvolle Elektroinstallationen.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Wir verbinden alte Werte wie Pünktlichkeit und Handschlagqualität mit neuester Technik 
                wie Smart Home und effizienten Energiekonzepten.
              </p>
              <Link 
                to="/ueber-uns" 
                className="inline-flex items-center text-accent font-medium hover:text-accent-light group"
              >
                Mehr über unsere Geschichte <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
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
          <Link 
            to="/kontakt" 
            className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-4 rounded-sm font-medium text-lg transition-all shadow-lg"
          >
            Zum Angebotsformular
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
