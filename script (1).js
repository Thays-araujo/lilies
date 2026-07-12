// ============================================================
// RECANTO ROXO — geração da cena e controle do vento
// ============================================================

const rand = (min, max) => Math.random() * (max - min) + min;

// ---------- ESTRELAS ----------
function buildStars() {
  const container = document.getElementById('stars');
  const count = window.innerWidth < 720 ? 45 : 80;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const star = document.createElement('span');
    star.style.left = `${rand(0, 100)}%`;
    star.style.top = `${rand(0, 100)}%`;
    star.style.animationDelay = `${rand(0, 3.5)}s`;
    star.style.animationDuration = `${rand(2.5, 4.5)}s`;
    frag.appendChild(star);
  }
  container.appendChild(frag);
}

// ---------- GRAMA ROXA ----------
function purpleShade(lightness) {
  const hue = rand(258, 288);
  const sat = rand(42, 66);
  return `hsl(${hue.toFixed(0)}, ${sat.toFixed(0)}%, ${lightness}%)`;
}

function buildGrass() {
  const field = document.getElementById('grassField');
  const count = window.innerWidth < 720 ? 100 : 180;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const blade = document.createElement('div');
    blade.className = 'blade';

    const height = rand(30, 96);
    const width = rand(7, 13);
    const baseLightness = rand(24, 40);
    const tipLightness = baseLightness + rand(28, 42);

    blade.style.left = `${rand(0, 100)}%`;
    blade.style.height = `${height}px`;
    blade.style.width = `${width}px`;
    blade.style.background = `linear-gradient(180deg, ${purpleShade(Math.min(tipLightness, 88))} 0%, ${purpleShade(baseLightness)} 100%)`;
    blade.style.zIndex = String(Math.floor(height));
    blade.style.setProperty('--sway-angle', rand(6, 16).toFixed(1));
    blade.style.setProperty('--base-duration', `${rand(1.8, 3.4).toFixed(2)}s`);
    blade.style.setProperty('--delay', `${rand(0, 3).toFixed(2)}s`);

    frag.appendChild(blade);
  }
  field.appendChild(frag);
}

// ---------- JARDIM DE LÍRIOS ----------
function lilySVG() {
  return `
  <svg viewBox="0 0 60 160" xmlns="http://www.w3.org/2000/svg" overflow="visible">
    <path d="M30,158 C29,120 31,90 30,20" fill="none" stroke="url(#leafGrad)" stroke-width="3" stroke-linecap="round"/>
    <path d="M30,122 C18,116 6,102 2,84 C15,87 26,99 30,122 Z" fill="url(#leafGrad)"/>
    <path d="M30,122 C42,116 54,102 58,84 C45,87 34,99 30,122 Z" fill="url(#leafGrad)"/>
    <path d="M30,92 C21,87 11,76 8,62 C18,65 27,75 30,92 Z" fill="url(#leafGrad)" opacity="0.9"/>
    <path d="M30,92 C39,87 49,76 52,62 C42,65 33,75 30,92 Z" fill="url(#leafGrad)" opacity="0.9"/>
    <g filter="url(#softGlow)">
      <g transform="translate(30,20)">
        <path d="M0,0 C-5,-9 -5,-22 0,-32 C5,-22 5,-9 0,0 Z" fill="url(#petalGrad)" transform="rotate(0)"/>
        <path d="M0,0 C-5,-9 -5,-22 0,-32 C5,-22 5,-9 0,0 Z" fill="url(#petalGrad)" transform="rotate(60)"/>
        <path d="M0,0 C-5,-9 -5,-22 0,-32 C5,-22 5,-9 0,0 Z" fill="url(#petalGrad)" transform="rotate(120)"/>
        <path d="M0,0 C-5,-9 -5,-22 0,-32 C5,-22 5,-9 0,0 Z" fill="url(#petalGrad)" transform="rotate(180)"/>
        <path d="M0,0 C-5,-9 -5,-22 0,-32 C5,-22 5,-9 0,0 Z" fill="url(#petalGrad)" transform="rotate(240)"/>
        <path d="M0,0 C-5,-9 -5,-22 0,-32 C5,-22 5,-9 0,0 Z" fill="url(#petalGrad)" transform="rotate(300)"/>
        <circle r="4.5" fill="url(#centerGlow)"/>
      </g>
    </g>
  </svg>`;
}

function buildLilies() {
  const garden = document.getElementById('lilyGarden');
  const count = window.innerWidth < 720 ? 7 : 11;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const lily = document.createElement('div');
    lily.className = 'lily';
    lily.innerHTML = lilySVG();

    const stemHeight = rand(80, 140);

    lily.style.left = `${(i / count) * 100 + rand(-3, 3)}%`;
    lily.style.height = `${stemHeight}px`;
    lily.style.setProperty('--sway-angle', rand(3, 7).toFixed(1));
    lily.style.setProperty('--base-duration', `${rand(2.6, 4).toFixed(2)}s`);
    lily.style.setProperty('--delay', `${rand(0, 2.5).toFixed(2)}s`);
    lily.style.setProperty('--flip', Math.random() > 0.5 ? '1' : '-1');
    lily.style.filter = `hue-rotate(${rand(-10, 10).toFixed(0)}deg)`;

    frag.appendChild(lily);
  }
  garden.appendChild(frag);
}

// ---------- FUMAÇA DA CHAMINÉ ----------
function buildSmoke() {
  const smoke = document.getElementById('smoke');
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 4; i++) {
    const puff = document.createElement('span');
    puff.style.animationDelay = `${i * 1}s`;
    frag.appendChild(puff);
  }
  smoke.appendChild(frag);
}

// ---------- VAGA-LUMES ----------
function buildFireflies() {
  const container = document.getElementById('fireflies');
  const count = window.innerWidth < 720 ? 6 : 10;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const fly = document.createElement('div');
    fly.className = 'firefly';
    fly.style.left = `${rand(2, 36)}%`;
    fly.style.bottom = `${rand(16, 34)}%`;
    fly.style.animationDelay = `${rand(0, 5)}s`;
    fly.style.animationDuration = `${rand(5, 8)}s`;
    frag.appendChild(fly);
  }
  container.appendChild(frag);
}

// ---------- CONTROLE DE VENTO ----------
function setupWindControl() {
  const buttons = document.querySelectorAll('#windButtons button');
  const root = document.documentElement;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      root.style.setProperty('--wind-mult', btn.dataset.wind);
      root.style.setProperty('--wind-speed', btn.dataset.speed);
    });
  });
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  buildStars();
  buildGrass();
  buildLilies();
  buildSmoke();
  buildFireflies();
  setupWindControl();
});
