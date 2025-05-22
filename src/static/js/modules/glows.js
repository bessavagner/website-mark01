/* glows.js */
export class GlowFactory {
  /**
   * @param {string}  sectionSelector    – seletor das seções onde distribuir
   * @param {number}  glowsPerSection    – quantos blobs por seção
   * @param {string}  containerId        – id da div que ficará fixada no <body>
   */
  constructor({sectionSelector = 'section', glowsPerSection = 2, containerId = 'glow-container'}) {
    this.sections        = [...document.querySelectorAll(sectionSelector)];
    this.glowsPerSection = glowsPerSection;
    this.container       = document.getElementById(containerId);

    // tabelas de tamanhos em px (mobile / desktop)
    this.mobileSizes  = [64, 128, 256, 428];
    this.desktopSizes = [480, 600, 720, 960];

    // classes fixas (definidas no CSS)
    this.speedClass  = ['glow-slow-sm', 'glow-slow-md', 'glow-slow-lg', 'glow-slow-xl'];
    this.colorClass  = ['glow-accent-bg', 'glow-primary-bg'];
  }

  /** utilidade para pegar item aleatório */
  rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  /** cria um único blob/glow */
  createGlow({ top, left }, idx) {
    const g = document.createElement('div');
    g.id = `glow-${idx}`;

    /* === posições absolutas calculadas === */
    g.style.position   = 'absolute';
    g.style.top        = `${top}px`;
    g.style.left       = `${left}px`;
    g.style.pointerEvents = 'none';
    g.style.borderRadius  = '9999px';   // rounded-full
    g.style.filter        = 'blur(90px)';
    g.style.opacity       = '0.7';

    /* === tamanho dinâmico === */
    const m = this.rand(this.mobileSizes);   // largura/altura mobile
    const d = this.rand(this.desktopSizes);  // largura/altura desktop

    g.style.width  = `${m}px`;
    g.style.height = `${m}px`;

    /* responsivo (desktop) – via media query inline */
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @media (min-width: 768px){
        #${g.id}{ width:${d}px; height:${d}px; }
      }`;
    document.head.appendChild(styleTag);

    /* === classes de cor + animação reutilizáveis === */
    g.classList.add(this.rand(this.colorClass), this.rand(this.speedClass));

    this.container.appendChild(g);
  }

  /** cria os blobs distribuídos uniformemente pelas seções */
  init() {
    if (!this.container) {
      console.error('Glow container não encontrado'); return;
    }
    let idx = 0;
    const pageWidth = document.documentElement.clientWidth;

    this.sections.forEach(sec => {
      const rect   = sec.getBoundingClientRect();
      const scroll = window.scrollY || 0;              // compensar scroll
      const topAbs = rect.top  + scroll;               // posição absoluta da seção
      const midY   = rect.height / (this.glowsPerSection + 1);

      for (let k = 1; k <= this.glowsPerSection; k++) {
        /* distribui cada blob em “faixas” da seção para uniformidade */
        const y = topAbs + k * midY + (Math.random() * midY * 0.3);
        const x = Math.random() * pageWidth;
        this.createGlow({ top: y, left: x }, ++idx);
      }
    });
  }
}
