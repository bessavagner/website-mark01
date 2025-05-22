import { GlowFactory } from './modules/glows.js';

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Encontra todos os filhos animáveis dentro da seção
        const animatables = entry.target.querySelectorAll("[data-animate-child]");

        animatables.forEach((el, index) => {
          el.style.opacity = "0";
          el.style.animation = `fadeInUp 0.6s ease-out forwards`;
          el.style.animationDelay = `${index * 0.1}s`;
        });

        // Só anima uma vez
        observerInstance.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // quando 15% da seção aparecer
  });

  // Observa todas as seções com o atributo
  document.querySelectorAll("[data-animate-on-view]").forEach((section) => {
    observer.observe(section);
  });
  new GlowFactory({sectionSelector: 'section', glowsPerSection: 3, containerId: 'glow-container'}).init(); 
});
