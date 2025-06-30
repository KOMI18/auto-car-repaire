import React from 'react';
import { Wrench, Gauge, Car, ShieldCheck, Clock, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
export const Services = () => {
  const services = [
    { 
      title: "Réparation générale", 
      icon: <Wrench size={48} />,
      description: "Solutions complètes pour toutes les pannes mécaniques et électriques"
    },
    { 
      title: "Diagnostic expert", 
      icon: <Gauge size={48} />,
      description: "Analyse précise avec outils high-tech pour identifier les problèmes"
    },
    { 
      title: "Entretien complet", 
      icon: <Car size={48} />,
      description: "Programmes d'entretien personnalisés pour prolonger la durée de vie"
    },
    { 
      title: "Garantie", 
      icon: <ShieldCheck size={48} />,
      description: "Toutes nos réparations sont garanties 12 mois minimum"
    },
    { 
      title: "Service rapide", 
      icon: <Clock size={48} />,
      description: "Most repairs completed within 24-48 hours"
    },
    { 
      title: "Pièces premium", 
      icon: <Settings size={48} />,
      description: "Utilisation exclusive de pièces certifiées OEM ou équivalent"
    }
  ];

  return (
    <section id="services" className="section-animate relative py-20 px-6 sm:px-8 lg:py-28 bg-gradient-to-b from-[#F9F9F9] to-white">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de section avec décorations */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
            Nos <span className="text-[#E67E22]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour tous vos besoins automobiles
          </p>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#E67E22] rounded-full"></div>
        </div>

        {/* Grille de services avec animations */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E67E22]/20 relative overflow-hidden"
            >
              {/* Fond décoratif */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E67E22]"></div>
              
              {/* Contenu de la carte */}
              <div className="text-center">
                <div className="mx-auto mb-6 text-[#E67E22] group-hover:text-white group-hover:bg-[#E67E22] p-4 rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 border border-[#E67E22]/20">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#E67E22] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Effet hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white to-[#f5f5f5] group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA supplémentaire */}
        <div className="text-center mt-16">
          <motion.a 
           href="#appointment"
          className="px-8 py-4 bg-[#2C3E50] hover:bg-[#1a2635] text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Nous contacter →
          </motion.a>
        </div>
      </div>
    </section>
  );
}