import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // ou CSS animations

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqItems = [
    { 
      question: "Dois-je prendre un rendez-vous ?", 
      answer: "Pour garantir un service optimal et éviter les attentes inutiles, nous recommandons fortement de prendre rendez-vous. Notre plateforme en ligne permet une réservation en moins de 2 minutes, 24h/24.",
      category: "Rendez-vous"
    },
    { 
      question: "Quels types de véhicules acceptez-vous ?", 
      answer: "Nous sommes spécialisés dans la réparation de toutes marques de voitures particulières, SUV et camionnettes (jusqu'à 3.5 tonnes). Nos techniciens sont certifiés par les principaux constructeurs : BMW, Mercedes, Audi, Toyota et bien d'autres.",
      category: "Services"
    },
    { 
      question: "Quelle est votre garantie sur les réparations ?", 
      answer: "Toutes nos réparations sont garanties 24 mois ou 40 000 km (selon la première éventualité). Cette garantie couvre à la fois la main d'œuvre et les pièces fournies.",
      category: "Garantie"
    },
    { 
      question: "Acceptez-vous les paiements en plusieurs fois ?", 
      answer: "Oui, nous proposons des solutions de paiement échelonné sans frais via notre partenaire financier. Des options 3x ou 4x sans intérêt sont disponibles pour les réparations supérieures à 300€.",
      category: "Paiement"
    },
    { 
      question: "Fournissez-vous des véhicules de courtoisie ?", 
      answer: "Nous mettons à disposition des véhicules de prêt pour les réparations nécessitant plus de 24h. Ce service est inclus dans nos forfaits Premium ou disponible avec un supplément modique pour les autres interventions.",
      category: "Services"
    }
  ];

  const categories = [...new Set(faqItems.map(item => item.category))];

  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const filteredItems = selectedCategory === 'Toutes' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id='faq' className="section-animate relative py-24 px-6 sm:px-8 bg-gradient-to-b from-[#F9F9F9] to-white overflow-hidden">
      {/* Élément décoratif */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[#E67E22]/10 transform -skew-y-2 origin-left -z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#E67E22]/10 text-[#E67E22] rounded-full px-6 py-2 mb-6">
            <HelpCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Questions fréquentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
            Trouvez vos <span className="text-[#E67E22]">réponses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur nos services et procédures
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('Toutes')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'Toutes' ? 'bg-[#E67E22] text-white' : 'bg-white text-[#2C3E50] hover:bg-gray-100 border border-gray-200'}`}
          >
            Toutes
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category ? 'bg-[#E67E22] text-white' : 'bg-white text-[#2C3E50] hover:bg-gray-100 border border-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Liste FAQ */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {filteredItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={`border-b border-gray-100 last:border-b-0 ${activeIndex === index ? 'bg-gray-50' : ''}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#2C3E50] pr-4">
                  {item.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-[#E67E22] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600">
                      <p className="mb-4">{item.answer}</p>
                      {item.category === 'Rendez-vous' && (
                        <button className="inline-flex items-center text-[#E67E22] font-medium hover:text-[#d35400] transition-colors">
                          Prendre rendez-vous en ligne
                          <ChevronDown className="w-4 h-4 ml-1 rotate-90" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA supplémentaire */}
        <div className="text-center mt-16">
          <div className="bg-[#2C3E50]/5 p-8 rounded-xl border border-gray-200 inline-block">
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Notre équipe se tient à votre disposition pour toute question supplémentaire</p>
            <button className="px-8 py-3 bg-[#2C3E50] hover:bg-[#1a2635] text-white font-medium rounded-lg shadow-lg transition-all duration-300 inline-flex items-center">
              Contactez-nous
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}