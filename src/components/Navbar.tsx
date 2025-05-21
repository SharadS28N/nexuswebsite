import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://media.discordapp.net/attachments/1374625641978265610/1374627582871470150/Adobe_Express_-_file.png?ex=682ebd33&is=682d6bb3&hm=2736611e256e98a371a53b6a2233a1b6976635907f26c14c5d500758a5229ab0&=&format=webp&quality=lossless"
                alt="Nexus Event Logo"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold tracking-tight">
                <span className="text-white">Nexus</span> 
                <span className="text-cyan-400">Events</span>
              </span>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('team')} className="hover:text-cyan-400 transition-colors">Team</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-cyan-400 transition-colors">Clients</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button></li>
            </ul>
          </nav>
          
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="block px-3 py-2 w-full text-left hover:bg-slate-700 rounded-md">Home</button>
            <button onClick={() => scrollToSection('services')} className="block px-3 py-2 w-full text-left hover:bg-slate-700 rounded-md">Services</button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 w-full text-left hover:bg-slate-700 rounded-md">About</button>
            <button onClick={() => scrollToSection('team')} className="block px-3 py-2 w-full text-left hover:bg-slate-700 rounded-md">Team</button>
            <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 w-full text-left hover:bg-slate-700 rounded-md">Clients</button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 w-full text-left hover:bg-slate-700 rounded-md">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;