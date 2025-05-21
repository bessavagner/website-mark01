document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  const observerSobre = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const anim = el.dataset.animate;
        el.classList.remove("opacity-0");
        el.classList.add(`animate-${anim}`);
        observerSobre.unobserve(el); // roda apenas 1x
      }
    });
  }, {
    threshold: 0.2,
  });
  
  document.querySelectorAll("[data-animate]").forEach(el => observerSobre.observe(el));
  
  const observerCards = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const anim = el.dataset.animate;
        const delay = el.dataset.delay || '0';
  
        el.style.animationDelay = `${delay}s`;
        el.classList.remove("opacity-0");
        el.classList.add(`animate-${anim}`);
        observerCards.unobserve(el);
      }
    });
  }, {
    threshold: 0.2,
  });
  
  document.querySelectorAll("[data-animate]").forEach(el => observerCards.observe(el));
  