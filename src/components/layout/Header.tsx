import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

function NavLink({ children, onClick }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="text-gray-700 hover:text-blue-600 transition-colors"
    >
      {children}
    </button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigateToMain = (sectionId: string) => {
    // Retourner à la vue principale
    window.history.pushState({}, '', '/');
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('data-view', 'main');
    }
    
    // Attendre que la vue principale soit chargée avant de scroller
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={() => navigateToMain('accueil')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-600 text-transparent bg-clip-text"
            >
              ConnectHub
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink onClick={() => navigateToMain('accueil')}>Accueil</NavLink>
            <NavLink onClick={() => navigateToMain('services')}>Services</NavLink>
            <NavLink onClick={() => navigateToMain('portfolio')}>Portfolio</NavLink>
            <NavLink onClick={() => navigateToMain('contact')}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <NavLink onClick={() => navigateToMain('accueil')}>Accueil</NavLink>
              <NavLink onClick={() => navigateToMain('services')}>Services</NavLink>
              <NavLink onClick={() => navigateToMain('portfolio')}>Portfolio</NavLink>
              <NavLink onClick={() => navigateToMain('contact')}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}