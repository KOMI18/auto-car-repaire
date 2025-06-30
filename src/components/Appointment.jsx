import React from  'react';
import { useState } from 'react';
import { Calendar, Clock, Car, User, Mail, Phone,CheckCircle, MessageSquare, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
export const  Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    
      const services = [
        "Réparation générale",
        "Diagnostic complet",
        "Entretien programmé",
        "Vidange et filtres",
        "Freinage",
        "Suspension",
        "Climatisation",
        "Carrosserie"
      ];
    
      const availableTimes = [
        "08:00", "09:00", "10:00", "11:00", 
        "13:00", "14:00", "15:00", "16:00"
      ];
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Soumission du formulaire
        console.log('Données soumises:', formData);
      };
    
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
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      };
    
  return (
    <section id='appointment' className=" section-animate relative py-24 px-6 sm:px-8 bg-gradient-to-b from-[#F9F9F9] to-white">
    {/* Élément décoratif */}
    <div className="absolute top-0 left-0 w-full h-32 bg-[#E67E22]/10 transform -skew-y-2 origin-left -z-0"></div>

    <div className="max-w-6xl mx-auto relative z-10">
      {/* En-tête */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center bg-[#E67E22]/10 text-[#E67E22] rounded-full px-6 py-2 mb-6">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="font-medium">Prise de rendez-vous</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
          Planifiez votre <span className="text-[#E67E22]">intervention</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Réservez en ligne en 2 minutes et bénéficiez de 10% de réduction sur votre premier service
        </p>
      </motion.div>

      {/* Formulaire */}
      <motion.div 
        className="grid md:grid-cols-2 gap-12"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Colonne gauche - Formulaire */}
        <motion.div 
          className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100"
          variants={item}
        >
          <h3 className="text-2xl font-bold text-[#2C3E50] mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-[#E67E22]" />
            Informations de rendez-vous
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <motion.div variants={item}>
              <label className="block mb-2 font-medium text-[#2C3E50] flex items-center">
                <User className="w-4 h-4 mr-2 text-[#E67E22]" />
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jean Dupont"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all"
                required
              />
            </motion.div>

            {/* Email et Téléphone */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={item}>
                <label className="block mb-2 font-medium text-[#2C3E50] flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#E67E22]" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean@exemple.com"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all"
                  required
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="block mb-2 font-medium text-[#2C3E50] flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#E67E22]" />
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all"
                  required
                />
              </motion.div>
            </div>

            {/* Service */}
            <motion.div variants={item}>
              <label className="block mb-2 font-medium text-[#2C3E50] flex items-center">
                <Car className="w-4 h-4 mr-2 text-[#E67E22]" />
                Service souhaité
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all pr-10"
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E67E22]" />
              </div>
            </motion.div>

            {/* Date et Heure */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={item}>
                <label className="block mb-2 font-medium text-[#2C3E50] flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[#E67E22]" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all"
                  required
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="block mb-2 font-medium text-[#2C3E50] flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-[#E67E22]" />
                  Heure
                </label>
                <div className="relative">
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all pr-10"
                    required
                  >
                    <option value="">Sélectionnez une heure</option>
                    {availableTimes.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                  <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E67E22]" />
                </div>
              </motion.div>
            </div>

            {/* Message */}
            <motion.div variants={item}>
              <label className="block mb-2 font-medium text-[#2C3E50] flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-[#E67E22]" />
                Message (optionnel)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Décrivez votre problème ou demande spéciale..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all"
              ></textarea>
            </motion.div>

            {/* Bouton de soumission */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="w-full py-4 bg-[#E67E22] hover:bg-[#d35400] text-white font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Confirmer le rendez-vous
                <Calendar className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Colonne droite - Informations */}
        <motion.div 
          className="space-y-8"
        //   variants={item}
        >
          <div className="bg-[#2C3E50] text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Vos avantages</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#E67E22] p-1 rounded-full mr-4 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>10% de réduction sur votre premier service</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#E67E22] p-1 rounded-full mr-4 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>Garantie 24 mois sur toutes les réparations</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#E67E22] p-1 rounded-full mr-4 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>Véhicule de prêt disponible sur demande</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#E67E22] p-1 rounded-full mr-4 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>Rappel SMS 24h avant votre rendez-vous</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Nos horaires</h3>
            <ul className="space-y-3">
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Lundi - Vendredi</span>
                <span>08h00 - 18h00</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Samedi</span>
                <span>09h00 - 14h00</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="font-medium">Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Urgence ?</h3>
            <p className="text-gray-600 mb-6">Pour les dépannages urgents en dehors des horaires d'ouverture :</p>
            <a href="tel:+33123456789" className="text-xl font-bold text-[#E67E22] hover:text-[#d35400] transition-colors">
              ☎ 01 23 45 67 89
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
  );
}