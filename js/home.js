/*
 * Home slide: arcade scoreboard, player card and the invader mini-game.
 *
 * main.js owns the 3D objects and only announces what happened:
 *   portfolio:invader  { killed, total }   after every click on an invader (and once on load)
 * This file owns the score, the HUD text and the "wave cleared" reward, then asks
 * main.js to bring the invaders back with:
 *   portfolio:respawn
 *
 * Everything is resolved from the DOM on every update because Swiper's loop mode
 * clones slides (cloneNode drops listeners but keeps the markup).
 */
import '../home.css';

const HI_KEY = 'portfolio-hiscore';
const HI_DEFAULT = 7000; // 7+ years of experience, times 1000
const KILL_POINTS = 100;
const WAVE_BONUS = 1000;

let score = 0;
let hiscore = HI_DEFAULT;
let killed = 0;
let total = 0;
let wave = 1;
let cleared = false;

try {
  hiscore = Math.max(HI_DEFAULT, Number(localStorage.getItem(HI_KEY)) || 0);
} catch (error) {
  /* storage can be blocked: the game still works, the hi-score just isn't saved */
}

const pad = (n, size) => String(Math.min(n, 10 ** size - 1)).padStart(size, '0');

/* ---------- level bar ---------- */

function buildBars() {
  document.querySelectorAll('.pc-bar').forEach((bar) => {
    const level = Math.max(0, Math.min(10, Number(bar.dataset.level) || 0));
    bar.replaceChildren(
      ...Array.from({ length: 10 }, (_, k) => {
        const seg = document.createElement('i');
        seg.className = k < level ? 'seg on' : 'seg';
        return seg;
      })
    );
  });
}

/* ---------- HUD ---------- */

function render() {
  document.querySelectorAll('[data-score]').forEach((el) => { el.textContent = pad(score, 6); });
  document.querySelectorAll('[data-hiscore]').forEach((el) => { el.textContent = pad(hiscore, 6); });

  document.querySelectorAll('.player-card').forEach((card) => {
    card.classList.toggle('is-cleared', cleared);
    const text = card.querySelector('.pc-hint-text');
    const count = card.querySelector('.pc-count');
    if (text) {
      text.textContent = cleared
        ? `Wave cleared! +${WAVE_BONUS}`
        : wave > 1
          ? `Wave ${wave}: keep shooting`
          : 'Click the invaders';
    }
    if (count) count.textContent = `${pad(killed, 2)}/${pad(total, 2)}`;
  });
}

function flashScore() {
  document.querySelectorAll('[data-score]').forEach((el) => {
    el.classList.add('is-hit');
    setTimeout(() => el.classList.remove('is-hit'), 250);
  });
}

function addScore(points) {
  score += points;
  if (score > hiscore) {
    hiscore = score;
    try {
      localStorage.setItem(HI_KEY, String(hiscore));
    } catch (error) { /* ignore */ }
  }
  flashScore();
}

/* ---------- confetti (small pixel burst) ---------- */

function confetti() {
  document.querySelectorAll('.home-confetti').forEach((node) => node.remove());
  const canvas = document.createElement('canvas');
  canvas.className = 'home-confetti';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:fixed;inset:0;z-index:60;pointer-events:none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const colors = ['#ffc22e', '#ffffff', '#21ee0a', '#e0287d', '#1bc7fb'];
  const originX = window.innerWidth * 0.5;
  const originY = window.innerHeight * 0.55;
  const pieces = Array.from({ length: 120 }, () => {
    const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.3;
    const speed = 6 + Math.random() * 10;
    return {
      x: originX, y: originY,
      vx: Math.cos(a) * speed, vy: Math.sin(a) * speed,
      size: Math.random() < 0.5 ? 4 : 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0, max: 70 + Math.random() * 50,
    };
  });

  (function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    pieces.forEach((p) => {
      p.life += 1;
      if (p.life > p.max) return;
      alive = true;
      p.vy += 0.28;
      p.vx *= 0.985;
      p.x += p.vx;
      p.y += p.vy;
      ctx.globalAlpha = p.life > p.max - 15 ? (p.max - p.life) / 15 : 1;
      ctx.fillStyle = p.color;
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
    });
    ctx.globalAlpha = 1;
    if (alive) requestAnimationFrame(tick);
    else canvas.remove();
  })();
}

/* ---------- game events ---------- */

document.addEventListener('portfolio:invader', (event) => {
  const detail = event.detail || {};
  if (detail.total) total = detail.total;
  const next = Number(detail.killed) || 0;

  if (next === 0 && cleared) {
    // invaders are back after a cleared wave
    cleared = false;
    wave += 1;
  }
  if (next > killed) addScore(KILL_POINTS * (next - killed));
  killed = next;

  if (total > 0 && killed >= total && !cleared) {
    cleared = true;
    addScore(WAVE_BONUS);
    confetti();
    setTimeout(() => document.dispatchEvent(new CustomEvent('portfolio:respawn')), 3500);
  }
  render();
});

/* ---------- intro ---------- */

function play() {
  document.querySelectorAll('.player-card').forEach((card) => {
    [...card.children].forEach((child, n) => child.style.setProperty('--n', n));
    card.classList.remove('is-play');
    void card.offsetWidth; // restart the CSS animation
    card.classList.add('is-play');
  });
}

document.addEventListener('portfolio:slide', (event) => {
  if (event.detail === 0) play();
});

buildBars();
render();
play();
