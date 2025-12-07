const Maintenance = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
            Elektro B-Punkt
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
          Website vorübergehend nicht verfügbar
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Unsere Website befindet sich derzeit in Wartung. 
          Wir arbeiten daran, den Service so schnell wie möglich wiederherzustellen.
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-700 mb-4">
            Bei dringenden Anfragen erreichen Sie:
          </p>
          <p className="text-xl font-semibold text-primary mb-2">
            Felix Bredl
          </p>
          <p className="text-lg text-gray-600">
            <a href="tel:+4915119784023" className="hover:text-accent transition-colors">
              +49 151 19784023
            </a>
          </p>
        </div>
        
        <p className="text-sm text-gray-500 mt-8">
          Vielen Dank für Ihr Verständnis.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;

