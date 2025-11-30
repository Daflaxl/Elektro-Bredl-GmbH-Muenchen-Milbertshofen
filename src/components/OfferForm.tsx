import React, { useState, useRef } from 'react';
import { AlertCircle, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  address: string;
  email: string;
  phone: string;
  area: string;
}

const OfferForm = () => {
  const WEB3FORMS_ACCESS_KEY = 'ec1ce72e-b1c5-4085-a769-2a5d91054f4c';
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    email: '',
    phone: '',
    area: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formRef.current) {
      setError('Formular konnte nicht gefunden werden.');
      setIsSubmitting(false);
      return;
    }

    try {
      // FormData aus dem HTML-Formular erstellen
      const formDataObj = new FormData(formRef.current);
      formDataObj.append('access_key', WEB3FORMS_ACCESS_KEY);
      formDataObj.append('to_email', 'Elektro-Bredl@Outlook.de');
      formDataObj.append('from_name', 'Elektro Bredl Kontaktformular');

      // Web3Forms API aufrufen
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Erfolg
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Formular zurücksetzen
        formRef.current.reset();
        setFormData({
          name: '',
          address: '',
          email: '',
          phone: '',
          area: ''
        });
      } else {
        // Fehler von Web3Forms
        setError(data.message || 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter (089) 350 81 81.');
        setIsSubmitting(false);
      }
    } catch (err: any) {
      console.error('Fehler beim Senden der E-Mail:', err);
      setError('Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter (089) 350 81 81.');
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 p-8 rounded-lg border border-green-200 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-serif text-green-800 mb-2">Vielen Dank!</h3>
        <p className="text-green-700 mb-6">
          Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden, um ein individuelles Angebot zu erstellen.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-green-700 font-medium underline hover:text-green-800"
        >
          Neue Anfrage senden
        </button>
      </motion.div>
    );
  }

  return (
    <form 
      id="form"
      ref={formRef}
      onSubmit={handleSubmit} 
      className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-serif text-primary mb-6">Individuelles Angebot anfordern</h3>
      
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="Max Mustermann"
          />
        </div>

        {/* Adresse */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse des Objekts *</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="Straße, Hausnummer, PLZ, Ort"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              placeholder="max@beispiel.de"
            />
          </div>

          {/* Telefon */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefonnummer *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              placeholder="089 12345678"
            />
          </div>
        </div>

        {/* Wohnfläche */}
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Wohnfläche (ca. in m²) *</label>
          <input
            type="number"
            id="area"
            name="area"
            required
            min="0"
            value={formData.area}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="z.B. 120"
          />
        </div>

        {error && (
          <div className="mt-2 text-sm text-red-600 flex items-center">
            <AlertCircle size={14} className="mr-1" /> {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-white font-medium text-lg transition-all ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-primary hover:bg-primary-light'
          }`}
        >
          {isSubmitting ? 'Wird gesendet...' : (
            <>
              <Send size={18} className="mr-2" /> Angebot anfordern
            </>
          )}
        </button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          Ihre Daten werden vertraulich behandelt und nur zur Angebotserstellung genutzt.
        </p>
      </div>
    </form>
  );
};

export default OfferForm;

