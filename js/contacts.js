/*
 * Contacts slide ("stage clear" screen):
 *  - replays the intro animation and fires a pixel confetti burst on arrival
 *  - arrow-key / hover selection in the contact list
 *  - "Continue?" countdown
 *
 * Everything is resolved from the DOM through event delegation, because
 * Swiper's loop mode clones slides and cloned nodes lose their listeners.
 */

const SLIDE = 4; // index of the Contacts slide
let active = false;
let timer = 0;
let count = 9;
let confettiTimer = 0;

/* ---------- confetti ---------- */

function confetti() {
  document.querySelectorAll('.confetti').forEach((node) => node.remove());

  const stage = document.getElementById('trophy-stage');
  const rect = stage ? stage.getBoundingClientRect() : null;
  const originX = rect ? rect.left + rect.width / 2 : window.innerWidth * 0.72;
  const originY = rect ? rect.top + rect.height * 0.42 : window.innerHeight * 0.5;

  const canvas = document.createElement('canvas');
  canvas.className = 'confetti';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const colors = ['#ffc22e', '#ffffff', '#21ee0a', '#e0287d', '#1bc7fb'];
  const pieces = Array.from({ length: 120 }, () => {
    const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.15;
    const speed = 6 + Math.random() * 9;
    return {
      x: originX,
      y: originY,
      vx: Math.cos(a) * speed,
      vy: Math.sin(a) * speed,
      size: Math.random() < 0.5 ? 4 : 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      max: 70 + Math.random() * 50,
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
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size); // snapped to the pixel grid
    });
    ctx.globalAlpha = 1;
    if (alive) requestAnimationFrame(tick);
    else canvas.remove();
  })();
}

/* ---------- "Continue?" countdown ---------- */

function setCount(n) {
  document.querySelectorAll('.continue-count').forEach((node) => {
    node.textContent = n;
    node.classList.toggle('is-low', n <= 3);
  });
}

function startCountdown() {
  clearInterval(timer);
  count = 9;
  setCount(count);
  timer = setInterval(() => {
    count = count > 0 ? count - 1 : 9;
    setCount(count);
  }, 1000);
}

function stopCountdown() {
  clearInterval(timer);
  timer = 0;
}

/* ---------- list selection ---------- */

const rowsOf = (hud) => [...hud.querySelectorAll('.score-row')];

function select(row, focus) {
  const hud = row.closest('.contacts-hud');
  rowsOf(hud).forEach((r) => r.classList.toggle('is-selected', r === row));
  if (focus) row.focus({ preventScroll: true });
}

document.addEventListener('pointerover', (event) => {
  if (event.pointerType !== 'mouse') return;
  const row = event.target.closest && event.target.closest('.score-row');
  if (row) select(row, false);
});

document.addEventListener('focusin', (event) => {
  const row = event.target.closest && event.target.closest('.score-row');
  if (row) select(row, false);
});

// Capture phase so we run before Swiper's own arrow-key handler. At the first
// or last row the key is passed through, so Swiper still changes slide.
document.addEventListener(
  'keydown',
  (event) => {
    if (!active || (event.key !== 'ArrowUp' && event.key !== 'ArrowDown')) return;
    const hud = document.querySelector('.swiper-slide-active .contacts-hud') || document.querySelector('.contacts-hud');
    if (!hud) return;
    const rows = rowsOf(hud);
    const current = rows.findIndex((r) => r.classList.contains('is-selected'));
    const next = current + (event.key === 'ArrowDown' ? 1 : -1);
    if (next < 0 || next >= rows.length) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    select(rows[next], true);
  },
  true
);

// the trophy link downloads the CV: celebrate too
document.addEventListener('click', (event) => {
  if (event.target.closest && event.target.closest('.trophy-cta')) confetti();
});

/* ---------- arrival ---------- */

function play() {
  document.querySelectorAll('.contacts-hud').forEach((hud) => {
    hud.classList.remove('is-play');
    void hud.offsetWidth; // restart the CSS animations
    hud.classList.add('is-play');
  });
  startCountdown();
  clearTimeout(confettiTimer);
  confettiTimer = setTimeout(() => {
    if (active) confetti();
  }, 900);
}

document.addEventListener('portfolio:slide', (event) => {
  const on = event.detail === SLIDE;
  if (on && !active) {
    active = true;
    play();
  } else if (!on && active) {
    active = false;
    stopCountdown();
    clearTimeout(confettiTimer);
  }
});
