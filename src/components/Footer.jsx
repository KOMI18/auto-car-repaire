import React from 'react';
import { MapPin, Phone, Mail, Clock, ChevronRight , Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <footer className="section-animate relative bg-[#2C3E50] text-white pt-20 pb-12 px-6 sm:px-8 overflow-hidden">
      {/* Élément décoratif */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E67E22] to-transparent opacity-20"></div>

      <motion.div 
        className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true }}
      >
        {/* Colonne 1 - Logo et description */}
        <motion.div variants={item}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-[#E67E22]">Auto</span>Works
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Votre partenaire de confiance pour toutes vos réparations automobiles depuis 2010. Expertise, transparence et qualité à chaque intervention.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="bg-white/10 hover:bg-[#E67E22] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Colonne 2 - Liens rapides */}
        <motion.div variants={item}>
          <h4 className="text-xl font-bold mb-6 pb-2 border-b border-white/10">Liens rapides</h4>
          <ul className="space-y-3">
            {[
              { label: 'Nos services', href: '#services' },
              { label: 'Notre processus', href: '#process' },
              { label: 'Témoignages', href: '#testimonials' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Prendre RDV', href: '#appointment' }
            ].map((link, index) => (
              <li key={index}>
                <motion.a 
                  href={link.href}
                  className="text-gray-300 hover:text-[#E67E22] transition-colors duration-300 flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-[#E67E22]" />
                  {link.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Colonne 3 - Contact */}
        <motion.div variants={item}>
          <h4 className="text-xl font-bold mb-6 pb-2 border-b border-white/10">Nous contacter</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mt-1 mr-4 text-[#E67E22] flex-shrink-0" />
              <span className="text-gray-300">123 Rue de l'Auto, Québec, QC G1V 2M3</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-4 text-[#E67E22] flex-shrink-0" />
              <a href="tel:+14181234567" className="text-gray-300 hover:text-[#E67E22] transition-colors duration-300">(418) 123-4567</a>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-4 text-[#E67E22] flex-shrink-0" />
              <a href="mailto:contact@autoworks.com" className="text-gray-300 hover:text-[#E67E22] transition-colors duration-300">contact@autoworks.com</a>
            </li>
            <li className="flex items-start">
              <Clock className="w-5 h-5 mt-1 mr-4 text-[#E67E22] flex-shrink-0" />
              <div className="text-gray-300">
                <p>Lun-Ven: 8h-18h</p>
                <p>Sam: 9h-14h</p>
                <p>Dim: Fermé</p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Colonne 4 - Newsletter */}
        <motion.div variants={item}>
          <h4 className="text-xl font-bold mb-6 pb-2 border-b border-white/10">Newsletter</h4>
          <p className="text-gray-300 mb-6">
            Abonnez-vous pour recevoir nos offres spéciales et conseils d'entretien.
          </p>
          <form className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 bg-[#E67E22] hover:bg-[#d35400] text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              S'abonner
              <Mail className="w-5 h-5 ml-2" />
            </motion.button>
          </form>
          <div className="mt-6 flex items-center">
            <div className="bg-[#E67E22]/20 p-2 rounded-lg mr-4">
              <Phone className="w-6 h-6 text-[#E67E22]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Urgence 24/7</p>
              <a href="tel:+14189876543" className="font-bold hover:text-[#E67E22] transition-colors duration-300">(418) 987-6543</a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bas de footer */}
      <motion.div 
        className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/10 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <a href="#" className="hover:text-[#E67E22] transition-colors duration-300">Politique de confidentialité</a>
          <a href="#" className="hover:text-[#E67E22] transition-colors duration-300">Conditions d'utilisation</a>
          <a href="#" className="hover:text-[#E67E22] transition-colors duration-300">Mentions légales</a>
        </div>
        <p>© {currentYear} AutoWorks. Tous droits réservés.</p>
        <p className="mt-2">Site créé avec ❤️ à Québec</p>
      </motion.div>
    </footer>
  );
}