import Navbar from './components/Navbar';
import OnePage from './pages/OnePage';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <OnePage />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;

