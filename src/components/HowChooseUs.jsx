import React from 'react';
import { CheckCircle, Award, Clock, Image ,DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
export const  HowChooseUs = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Prix compétitifs",
      description: "Tarifs transparents sans surprise, avec des options adaptées à votre budget"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Service rapide",
      description: "90% des réparations effectuées en moins de 24h grâce à notre organisation optimisée"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Techniciens certifiés",
      description: "Tous nos mécaniciens possèdent des certifications OEM et 10+ ans d'expérience moyenne"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Équipements haute précision",
      description: "Outils dernier cri et logiciels de diagnostic à la pointe de la technologie"
    }
  ];
  return (
    <section id='how' className="section-animate relative py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-[#2C3E50] to-[#1a2635] overflow-hidden">
    {/* Éléments décoratifs */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5">
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#E67E22] mix-blend-screen"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[#E67E22] mix-blend-screen"></div>
    </div>

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
      {/* Colonne texte avec animation */}
      <div className="space-y-8 animate-fadeInLeft">
        <div className="inline-block px-4 py-2 bg-[#E67E22]/20 rounded-full mb-6">
          <span className="text-[#E67E22] font-semibold">Pourquoi nous choisir ?</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          L'excellence automobile <span className="text-[#E67E22]">à votre service</span>
        </h2>
        
        <p className="text-xl text-gray-300">
          Plus de 15 ans d'expérience au service de votre satisfaction
        </p>

        <ul className="space-y-6">
          {benefits.map((benefit, index) => (
            <li 
              key={index}
              className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 mt-1 text-[#E67E22] group-hover:text-white transition-colors duration-300">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 mt-8">
          <motion.a 
          href="#appointment"
          
          className="px-8 py-3 bg-[#E67E22] hover:bg-[#d35400] text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Prendre rendez-vous
          </motion.a>
          <button className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
            Nous contacter
          </button>
        </div>
      </div>

      {/* Colonne image avec effet parallax */}
      <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-fadeInRight">
        <div className="absolute inset-0 bg-[#E67E22]/30 z-10"></div>
        <img
          src="/mecanics.jpg"
          alt="Technicien certifié AutoWorks"
          fill
          className="object-cover object-center"
          quality={90}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {/* Badge flottant */}
        <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-xl z-20 animate-float">
          <div className="flex items-center gap-3">
            <div className="bg-[#E67E22] p-2 rounded-full">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-[#2C3E50]">+5 000 clients</p>
              <p className="text-sm text-gray-600">satisfaits depuis 2008</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}