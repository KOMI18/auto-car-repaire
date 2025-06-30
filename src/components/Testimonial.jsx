import React from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

export const Testimonial = () => {
  const testimonials = [
    { 
      text: "Je suis impressionné par le professionnalisme de l'équipe. Ma voiture est revenue comme neuve après la réparation, avec un délai plus court que prévu. Un service vraiment exceptionnel !", 
      author: "Jean Dupont",
      role: "Client depuis 3 ans",
      rating: 5
    },
    { 
      text: "Service rapide et efficace. J'ai apprécié la transparence sur les coûts et les explications techniques claires. Je recommande sans hésiter ce garage à tous mes proches.", 
      author: "Marie Tremblay",
      role: "Nouvelle cliente",
      rating: 4
    },
    { 
      text: "Garage honnête et professionnel. Après une mauvaise expérience ailleurs, j'ai enfin trouvé un atelier qui fait du travail de qualité à prix raisonnable. Merci pour votre intégrité !", 
      author: "Luc Bouchard",
      role: "Client fidèle",
      rating: 5
    },
    { 
      text: "La révision complète a été faite en moins d'une journée avec un résultat impeccable. Le personnel est accueillant et compétent. Je ne vais plus ailleurs maintenant.", 
      author: "Sophie Lambert",
      role: "Cliente entreprise",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextTestimonial(),
    onSwipedRight: () => prevTestimonial(),
    trackMouse: true
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id='testimonials' className="section-animate relative py-24 px-6 sm:px-8 bg-gradient-to-b from-[#2C3E50] to-[#1a2635] overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#E67E22] mix-blend-overlay"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#E67E22] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-2 bg-[#E67E22]/20 rounded-full mb-6">
            <span className="text-[#E67E22] font-semibold">Ils nous font confiance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ce que disent <span className="text-[#E67E22]">nos clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plus de 500 clients satisfaits chaque année depuis 2010
          </p>
        </motion.div>

        {/* Carrousel */}
        <div className="relative" {...handlers}>
          {/* Contrôles */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300 hidden md:block"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300 hidden md:block"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Conteneur des témoignages */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-12 max-w-4xl mx-auto"
            >
              <Quote className="w-10 h-10 text-[#E67E22] mx-auto mb-6 opacity-30" />
              
              <p className="text-xl md:text-2xl text-white italic text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-6 h-6 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                  />
                ))}
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].author}</h4>
                <p className="text-gray-300">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-10 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#E67E22] w-6' : 'bg-white/30'}`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Logo cloud (optionnel) */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
          {['BMW', 'Mercedes', 'Audi', 'Toyota'].map((brand, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-white text-xl font-bold">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}