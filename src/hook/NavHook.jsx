export const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajustez selon la hauteur de votre header
        behavior: 'smooth'
      });

      // Animation supplémentaire avec Framer Motion
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

