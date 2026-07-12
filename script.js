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
const GRASS_COLORS = ['var(--grass-dark)', 'var(--grass-mid)', 'var(--grass-light)', 'var(--grass-tip)'];

function buildGrass() {
  const field = document.getElementById('grassField');
  const count = window.innerWidth < 720 ? 90 : 160;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const blade = document.createElement('div');
    blade.className = 'blade';

    const height = rand(28, 92);
    const width = rand(4, 8);
    const colorIndex = Math.floor(rand(0, GRASS_COLORS.length));

    blade.style.left = `${rand(0, 100)}%`;
    blade.style.height = `${height}px`;
    blade.style.width = `${width}px`;
    blade.style.background = GRASS_COLORS[colorIndex];
    blade.style.zIndex = String(Math.floor(height));
    blade.style.setProperty('--sway-angle', rand(6, 16).toFixed(1));
    blade.style.setProperty('--base-duration', `${rand(1.8, 3.4).toFixed(2)}s`);
    blade.style.setProperty('--delay', `${rand(0, 3).toFixed(2)}s`);

    frag.appendChild(blade);
  }
  field.appendChild(frag);
}

// ---------- JARDIM DE LÍRIOS ----------
function buildLilies() {
  const garden = document.getElementById('lilyGarden');
  const count = window.innerWidth < 720 ? 8 : 13;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const lily = document.createElement('div');
    lily.className = 'lily';

    const stemHeight = rand(46, 78);
    const scale = rand(0.75, 1.15);

    lily.style.left = `${(i / count) * 100 + rand(-3, 3)}%`;
    lily.style.height = `${stemHeight}px`;
    lily.style.width = '2px';
    lily.style.setProperty('--sway-angle', rand(4, 9).toFixed(1));
    lily.style.setProperty('--base-duration', `${rand(2.4, 3.8).toFixed(2)}s`);
    lily.style.setProperty('--delay', `${rand(0, 2.5).toFixed(2)}s`);

    const stem = document.createElement('div');
    stem.className = 'lily-stem';
    stem.style.height = `${stemHeight}px`;

    const bloom = document.createElement('div');
    bloom.className = 'lily-bloom';
    bloom.style.transform = `translate(-50%, 40%) scale(${scale.toFixed(2)})`;

    for (let p = 0; p < 5; p++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      bloom.appendChild(petal);
    }
    const center = document.createElement('div');
    center.className = 'lily-bud-center';
    bloom.appendChild(center);

    lily.appendChild(stem);
    lily.appendChild(bloom);
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
    fly.style.left = `${rand(2, 34)}%`;
    fly.style.bottom = `${rand(14, 30)}%`;
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
