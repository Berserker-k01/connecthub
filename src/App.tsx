import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Values } from './components/sections/Values';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { Team } from './components/sections/Team';
import { Careers } from './components/sections/Careers';
import { Legal } from './components/sections/Legal';

function App() {
  const [currentView, setCurrentView] = React.useState('main');

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentView('main');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'careers':
        return <Careers />;
      case 'legal':
        return <Legal />;
      default:
        return (
          <div id="main-content" data-view="main">
            <Hero />
            <Values />
            <Services />
            <Team />
            <Portfolio />
            <Contact />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main>
        {renderContent()}
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <button 
              onClick={() => setCurrentView('main')}
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-600 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            >
              ConnectHub
            </button>
            <p className="text-gray-400 mb-6">Votre partenaire dans l'innovation numérique</p>
            <div className="flex justify-center space-x-6">
              <button 
                onClick={scrollToContact}
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => setCurrentView('careers')}
                className="hover:text-blue-400 transition-colors"
              >
                Carrières
              </button>
              <button 
                onClick={() => setCurrentView('legal')}
                className="hover:text-blue-400 transition-colors"
              >
                Mentions légales
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;