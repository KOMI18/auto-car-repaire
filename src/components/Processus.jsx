import React from 'react';
import { Calendar, Search, Wrench, CheckCircle, CreditCard, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion'; // ou utilisez CSS animations

export const Processus = () => {
  const steps = [
    { 
      icon: <Calendar className="w-8 h-8" />, 
      label: "Prise de RDV", 
      description: "Planifiez en ligne ou par téléphone en 2 minutes chrono",
      color: "bg-blue-100 text-blue-600"
    },
    { 
      icon: <Search className="w-8 h-8" />, 
      label: "Diagnostic expert", 
      description: "Analyse complète avec outils high-tech en 30 min max",
      color: "bg-purple-100 text-purple-600"
    },
    { 
      icon: <Wrench className="w-8 h-8" />, 
      label: "Réparation", 
      description: "Intervention par nos techniciens certifiés OEM",
      color: "bg-amber-100 text-amber-600"
    },
    { 
      icon: <CheckCircle className="w-8 h-8" />, 
      label: "Contrôle qualité", 
      description: "Double vérification par notre chef d'atelier",
      color: "bg-emerald-100 text-emerald-600"
    },
    { 
      icon: <CreditCard className="w-8 h-8" />, 
      label: "Paiement sécurisé", 
      description: "Facture détaillée avec options de paiement flexibles",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id='process' className="section-animate relative py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Élément décoratif */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-[#E67E22] to-transparent opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#E67E22]/10 text-[#E67E22] rounded-full text-sm font-semibold mb-4">
            Notre Méthode
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
            Processus de <span className="text-[#E67E22]">réparation transparent</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque étape est conçue pour votre confort et la qualité du service
          </p>
        </div>

        {/* Timeline horizontale - Desktop */}
        <motion.div 
          className="hidden lg:flex justify-between items-start relative"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
        >
          {/* Ligne de timeline */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 z-0">
            <motion.div 
              className="h-full bg-[#E67E22] origin-left" 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center relative z-10 w-1/5 px-4"
              variants={item}
            >
              <div className={`${step.color} p-4 rounded-full mb-4 shadow-md hover:shadow-lg transition-shadow duration-300`}>
                {step.icon}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#E67E22]/30 transition-all duration-300 w-full">
                <span className="inline-block text-xs font-semibold mb-1 text-gray-500">Étape {index + 1}</span>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{step.label}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline verticale - Mobile */}
        <motion.div 
          className="lg:hidden space-y-8 max-w-md mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex gap-6 items-start relative"
              variants={item}
            >
              <div className="flex-shrink-0">
                <div className={`${step.color} p-3 rounded-full relative z-10`}>
                  {step.icon}
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute top-12 left-6 w-1 h-full bg-gray-200 -z-0"></div>
                )}
              </div>
              <div className="pt-1">
                <span className="inline-block text-xs font-semibold mb-1 text-gray-500">Étape {index + 1}</span>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{step.label}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-20">
          <motion.a 
          href="#appointment"
          className="group px-8 py-4 bg-[#2C3E50] hover:bg-[#1a2635] text-white font-medium rounded-lg shadow-lg transition-all duration-300 inline-flex items-center">
            <span>Commencer maintenant</span>
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}