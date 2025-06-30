import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
// import { useScrollDirection } from '@/hook/ScrollHook';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Processus', href: '#process' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];
  
  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home"
        //   onClick={(e) => handleSmoothScroll(e, '#home')}
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#2C3E50]">Auto</span>
          <span className="text-[#E67E22]">Works</span>
        </motion.a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
            //   onClick={(e) => handleSmoothScroll(e, link.href)}
              href={link.href}
              className="text-[#2C3E50] hover:text-[#E67E22] font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Bouton Contact Desktop */}
        <motion.div 
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="tel:+1234567890" 
            className="flex items-center gap-2 bg-[#E67E22] text-white px-4 py-2 rounded-lg hover:bg-[#d35400] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Appelez-nous</span>
          </a>
        </motion.div>

        {/* Menu Mobile */}
        <button 
          className="md:hidden text-[#2C3E50]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="block py-2 text-[#2C3E50] hover:text-[#E67E22] font-medium"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 bg-[#E67E22] text-white px-4 py-2 rounded-lg hover:bg-[#d35400] transition-colors mt-4"
            >
              <Phone className="w-4 h-4" />
              <span>Appelez-nous</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};