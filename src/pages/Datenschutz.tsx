import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Database, Mail, Server, Lock } from 'lucide-react';

const Datenschutz = () => {
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Datenschutzerklärung</h1>
          <p className="text-gray-600">Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">
          
          {/* Einleitung */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center">
              <Shield size={24} className="mr-3 text-accent" />
              1. Datenschutz auf einen Blick
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Allgemeine Hinweise</h3>
                <p className="leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                  Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Datenerfassung auf dieser Website</h3>
                <p className="leading-relaxed font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                <p className="leading-relaxed">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
              </div>
              <div>
                <p className="leading-relaxed font-semibold mb-2">Wie erfassen wir Ihre Daten?</p>
                <p className="leading-relaxed">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
                  Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer 
                  Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten 
                  (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt 
                  automatisch, sobald Sie diese Website betreten.
                </p>
              </div>
              <div>
                <p className="leading-relaxed font-semibold mb-2">Wofür nutzen wir Ihre Daten?</p>
                <p className="leading-relaxed">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere 
                  Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>
              <div>
                <p className="leading-relaxed font-semibold mb-2">Welche Rechte haben Sie?</p>
                <p className="leading-relaxed">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten 
                  zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung 
                  der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei 
                  der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Datenschutz können Sie sich jederzeit 
                  an uns wenden.
                </p>
              </div>
            </div>
          </section>

          {/* Verantwortliche Stelle */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center">
              <Database size={24} className="mr-3 text-accent" />
              2. Verantwortliche Stelle
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-bold text-gray-900">Elektro Bredl GmbH</p>
                <p>Schopenhauerstr. 94</p>
                <p>80809 München</p>
                <p className="mt-3">
                  Telefon: <a href="tel:+49893508181" className="text-accent hover:text-accent-light">(089) 350 81 81</a>
                </p>
                <p>
                  E-Mail: <a href="mailto:Elektro-Bredl@Outlook.de" className="text-accent hover:text-accent-light">Elektro-Bredl@Outlook.de</a>
                </p>
              </div>
              <p className="leading-relaxed mt-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über 
                die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </div>
          </section>

          {/* Speicherdauer */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">3. Speicherdauer</h2>
            <p className="text-gray-700 leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre 
              personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes 
              Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
              sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben 
              (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach 
              Fortfall dieser Gründe.
            </p>
          </section>

          {/* Kontaktformular */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center">
              <Mail size={24} className="mr-3 text-accent" />
              4. Kontaktformular (§ 6 Abs. 1 lit. b DSGVO)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
                Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Verwendeter Service: Web3Forms</p>
                <p className="leading-relaxed text-sm">
                  Unser Kontaktformular nutzt den Service Web3Forms (Web3Forms, 123 Main St, San Francisco, CA 94105, USA). 
                  Die von Ihnen im Formular eingegebenen Daten werden über Web3Forms an unsere E-Mail-Adresse weitergeleitet. 
                  Web3Forms speichert die Daten gemäß deren Datenschutzerklärung. Weitere Informationen finden Sie unter: 
                  <a 
                    href="https://web3forms.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-light ml-1"
                  >
                    https://web3forms.com/privacy
                  </a>
                </p>
                <p className="leading-relaxed text-sm mt-2">
                  <strong>Rechtsgrundlage:</strong> Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
                  erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der 
                  effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung 
                  (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                </p>
              </div>
              <p className="leading-relaxed">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, 
                Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach 
                abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – 
                bleiben unberührt.
              </p>
            </div>
          </section>

          {/* Hosting */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center">
              <Server size={24} className="mr-3 text-accent" />
              5. Hosting (§ 6 Abs. 1 lit. f DSGVO)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Diese Website wird bei folgendem Anbieter gehostet:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Vercel Inc.</p>
                <p className="text-sm leading-relaxed">
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789<br />
                  USA
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Die Erfassung und Verarbeitung von Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
                  Unser berechtigtes Interesse besteht in der Bereitstellung einer zuverlässigen und performanten Website. 
                  Vercel erfasst automatisch Server-Logfiles, die u. a. Ihre IP-Adresse enthalten können. Weitere Informationen 
                  finden Sie in der Datenschutzerklärung von Vercel: 
                  <a 
                    href="https://vercel.com/legal/privacy-policy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-light ml-1"
                  >
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Cookies und LocalStorage */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center">
              <Lock size={24} className="mr-3 text-accent" />
              6. Cookies und LocalStorage (§ 6 Abs. 1 lit. a DSGVO)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Diese Website verwendet LocalStorage, um Ihre Cookie-Einstellungen zu speichern. LocalStorage ist eine 
                Technologie, die es ermöglicht, Daten lokal in Ihrem Browser zu speichern.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Verwendete LocalStorage-Daten:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>cookieConsent:</strong> Speichert Ihre Entscheidung bezüglich der Cookie-Nutzung ("accepted" oder "declined")</li>
                  <li><strong>cookieConsentDate:</strong> Speichert das Datum Ihrer Cookie-Einstellung</li>
                </ul>
                <p className="text-sm leading-relaxed mt-3">
                  <strong>Rechtsgrundlage:</strong> Die Speicherung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
                  Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die LocalStorage-Daten in Ihrem Browser löschen.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  <strong>Zweck:</strong> Die Speicherung dient dazu, Ihre Cookie-Präferenz zu speichern, damit Sie nicht bei jedem 
                  Besuch erneut gefragt werden müssen.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  <strong>Speicherdauer:</strong> Die Daten werden dauerhaft gespeichert, bis Sie sie manuell in Ihrem Browser löschen 
                  oder Ihre Cookie-Einstellungen ändern.
                </p>
              </div>
              <p className="leading-relaxed">
                Diese Website verwendet derzeit keine Tracking-Cookies oder Analytics-Tools. Es werden keine personenbezogenen 
                Daten zu Marketing- oder Analysezwecken erfasst.
              </p>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">7. Ihre Rechte (Art. 15 ff. DSGVO)</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Sie haben folgende Rechte:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre von uns 
                  verarbeiteten personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, unverzüglich die Berichtigung 
                  unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer personenbezogenen 
                  Daten zu verlangen, soweit nicht gesetzliche Aufbewahrungspflichten oder andere rechtliche Gründe der Löschung 
                  entgegenstehen.
                </li>
                <li>
                  <strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung 
                  der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre personenbezogenen 
                  Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu 
                  erhalten oder die Übertragung an einen anderen Verantwortlichen zu verlangen.
                </li>
                <li>
                  <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer 
                  besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die 
                  aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.
                </li>
                <li>
                  <strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, Ihre erteilte Einwilligung 
                  jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung 
                  bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                </li>
                <li>
                  <strong>Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, 
                  insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, 
                  wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold text-gray-900 mb-2">Kontakt für Datenschutzanfragen:</p>
                <p className="text-sm">
                  Elektro Bredl GmbH<br />
                  Schopenhauerstr. 94<br />
                  80809 München<br />
                  E-Mail: <a href="mailto:Elektro-Bredl@Outlook.de" className="text-accent hover:text-accent-light">Elektro-Bredl@Outlook.de</a>
                </p>
              </div>
            </div>
          </section>

          {/* Änderung der Datenschutzerklärung */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">8. Änderung dieser Datenschutzerklärung</h2>
            <p className="text-gray-700 leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen 
              entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung 
              neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
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

export default Datenschutz;

