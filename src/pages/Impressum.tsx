import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Building } from 'lucide-react';

const Impressum = () => {
  return (
    <div className="bg-background min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-accent hover:text-accent-light mb-6 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" /> Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Impressum</h1>
          <p className="text-gray-600">Angaben gemäß § 5 TMG</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">
          
          {/* Firmendaten */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center">
              <Building size={24} className="mr-3 text-accent" />
              Firmendaten
            </h2>
            <div className="space-y-3 text-gray-700">
              <p className="font-bold text-gray-900">Elektro B-Punkt GmbH</p>
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-accent flex-shrink-0" />
                <p>Schopenhauerstr. 94<br />80809 München</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-accent flex-shrink-0" />
                <a href="tel:+49893508181" className="hover:text-accent transition-colors">
                  (089) 350 81 81
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-accent flex-shrink-0" />
                <a href="mailto:Elektro-Bredl@Outlook.de" className="hover:text-accent transition-colors">
                  Elektro-Bredl@Outlook.de
                </a>
              </div>
            </div>
          </section>

          {/* Geschäftsführung */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Geschäftsführung</h2>
            <p className="text-gray-700">Geschäftsführer: Georg Bredl</p>
          </section>

          {/* Registereintrag */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Registereintrag</h2>
            <div className="space-y-2 text-gray-700">
              <p>Eintragung im Handelsregister.</p>
              <p>Registergericht: Amtsgericht München</p>
              <p>Registernummer: <span className="font-semibold">HRB 93421</span></p>
            </div>
          </section>

          {/* Umsatzsteuer-ID */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Umsatzsteuer-ID</h2>
            <p className="text-gray-700">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">DE [USt-IdNr. wird nachgereicht]</span>
            </p>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>Georg Bredl</p>
              <p>Schopenhauerstr. 94</p>
              <p>80809 München</p>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Haftungsausschluss</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Haftung für Inhalte (§ 7 Abs. 1 TMG)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Haftung für Links (§ 8 TMG)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Urheberrecht (§ 15 ff. UrhG)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                  deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                  außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors 
                  bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                  Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden 
                  die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. 
                  Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                  entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte 
                  umgehend entfernen.
                </p>
              </div>

            </div>
          </section>

          {/* Streitschlichtung */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Streitschlichtung</h2>
            <p className="text-gray-700 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light ml-1"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-accent hover:text-accent-light transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" /> Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Impressum;

