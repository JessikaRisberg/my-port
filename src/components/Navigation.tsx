import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import '../styles/navigation.css';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Hem' },
    { id: 'about', label: 'Om mig' },
    { id: 'projects', label: 'Projekt' },
    { id: 'experience', label: 'Erfarenhet' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <>
      <nav className="navigation">
        <div className="navigation-container">
          <div className="navigation-content">
            <button
              onClick={() => scrollToSection('home')}
              className="navigation-logo"
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="navigation-desktop">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`navigation-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="navigation-link-underline"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navigation-mobile-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="navigation-mobile-menu">
            <div className="navigation-mobile-menu-content">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`navigation-mobile-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}