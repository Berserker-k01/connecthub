import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Values } from './components/sections/Values';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { Careers } from './components/sections/Careers';
import { Legal } from './components/sections/Legal';

function App() {
  // Simple routing based on hash
  const [currentPage, setCurrentPage] = React.useState('home');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Values />
          <Services />
          <Portfolio />
          <Contact />
        </>
      )}
      
      {currentPage === 'careers' && <Careers />}
      {currentPage === 'legal' && <Legal />}
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">ConnectHub</h2>
            <p className="text-gray-400 mb-6">Votre partenaire dans l'innovation numérique</p>
            <div className="flex justify-center space-x-6">
              <a href="#contact" className="hover:text-blue-400">Contact</a>
              <a href="#careers" className="hover:text-blue-400">Carrières</a>
              <a href="#legal" className="hover:text-blue-400">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;