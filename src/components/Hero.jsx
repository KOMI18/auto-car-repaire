import React from 'react';
import { motion } from 'framer-motion';
export const Hero = () => {
  return (
    <section id="home" className=" section-animate relative bg-cover bg-center text-white py-32 px-6 md:py-40 lg:py-48 overflow-hidden">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('/hero.jpg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Gradient transparent par-dessus l'image */}
      <div 
        className="absolute inset-0 z-1"
        style={{ 
          background: "linear-gradient(to right, rgba(44, 62, 80, 0.9), rgba(230, 126, 34, 0.5))",
        }}
      />
      
      {/* Contenu aligné à gauche */}
      <div className=" animate-fadeInUp relative z-10 max-w-4xl mx-auto text-left px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Votre service de réparation <span className="text-[#E67E22]">de confiance</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed">
          Des techniciens certifiés et des équipements haute performance pour votre véhicule
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
          href="#services"
          
          className="bg-[#E67E22] hover:bg-[#d35400] px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            Nos Services
          </motion.a>
          <motion.a 
          href="#appointment"
        
          className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all duration-300">
            Prendre RDV
          </motion.a>
        </div>
      </div>

      {/* Indicateur de défilement (optionnel) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}