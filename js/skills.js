/*
 * Skills slide: vector radar + 8-bit level bars.
 *
 * The data lives in index.html (.hud-data > section > li[data-level]).
 * This file only draws it, so the text stays readable by search engines and
 * screen readers, and levels are edited in one place.
 *
 * Event delegation is used on purpose: Swiper's loop mode clones slides
 * (cloneNode drops listeners), so every interaction is resolved from the DOM.
 */

const NS = 'http://www.w3.org/2000/svg';
const CX = 190;
const CY = 150;
const R = 116;        // radius of the outer ring
const LABEL_R = 135;  // radius where axis labels sit
const MAX = 10;
const RINGS = [2, 4, 6, 8, 10];

const svg = (name, attrs = {}, parent) => {
  const node = document.createElementNS(NS, name);
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  if (parent) parent.appendChild(node);
  return node;
};

const make = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const clamp = (n) => Math.max(0, Math.min(MAX, Number(n) || 0));
const pad = (n) => String(n).padStart(2, '0');
const angle = (i, n) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
const point = (i, n, value) => {
  const a = angle(i, n);
  const r = (R * value) / MAX;
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)];
};
const toPoints = (pts) => pts.map((p) => p.map((v) => v.toFixed(1)).join(',')).join(' ');

/* ---------- data ---------- */

function readData(hud) {
  return [...hud.querySelectorAll('.hud-data section')].map((section) => {
    const items = [...section.querySelectorAll('li')].map((li) => ({
      name: (li.querySelector('.n') || li).textContent.trim(),
      level: clamp(li.dataset.level),
    }));
    const average = items.reduce((sum, it) => sum + it.level, 0) / (items.length || 1);
    return { label: section.dataset.label, title: section.dataset.title, items, level: average };
  });
}

const selectedIndex = (hud) => {
  const i = [...hud.querySelectorAll('.hud-axis')].findIndex((g) => g.classList.contains('is-selected'));
  return i < 0 ? 0 : i;
};

/* ---------- bars ---------- */

function buildBar(bar, level) {
  bar.replaceChildren();
  for (let k = 0; k < MAX; k += 1) {
    const seg = make('i', k < level ? 'seg on' : 'seg');
    seg.style.setProperty('--k', k);
    bar.appendChild(seg);
  }
}

function renderBars(hud, axis, intro = false) {
  hud.querySelector('.hud-sel').textContent = axis.title;
  const list = hud.querySelector('.hud-list');
  list.style.setProperty('--d0', intro ? '.5s' : '0s');
  list.replaceChildren(
    ...axis.items.map((item, r) => {
      const row = make('div', 'hud-row');
      row.style.setProperty('--r', r);
      const bar = make('span', 'hud-bar');
      buildBar(bar, item.level);
      row.append(make('span', 'hud-name', item.name), bar, make('span', 'hud-num', pad(item.level)));
      return row;
    })
  );
}

/* ---------- radar ---------- */

function buildRadar(hud, data) {
  const host = hud.querySelector('.hud-radar');
  const n = data.length;
  const root = svg('svg', { viewBox: '0 0 380 300', preserveAspectRatio: 'xMidYMid meet', focusable: 'false' });

  RINGS.forEach((level) => {
    const ring = svg('polygon', {
      class: level === MAX ? 'hud-ring hud-ring-outer' : 'hud-ring',
      points: toPoints(data.map((_, i) => point(i, n, level))),
    });
    root.appendChild(ring);
  });

  data.forEach((_, i) => {
    const [x, y] = point(i, n, MAX);
    svg('line', { class: 'hud-spoke', x1: CX, y1: CY, x2: x.toFixed(1), y2: y.toFixed(1) }, root);
  });

  svg('polygon', {
    class: 'hud-shape',
    pathLength: 1,
    points: toPoints(data.map((axis, i) => point(i, n, axis.level))),
  }, root);

  data.forEach((axis, i) => {
    const a = angle(i, n);
    const g = svg('g', { class: 'hud-axis', 'data-i': i }, root);
    const lx = CX + LABEL_R * Math.cos(a);
    const ly = CY + LABEL_R * Math.sin(a);
    const cos = Math.cos(a);
    const anchor = cos > 0.3 ? 'start' : cos < -0.3 ? 'end' : 'middle';

    // hit areas first, so the visible parts stay on top
    svg('circle', { class: 'hud-hit', cx: lx.toFixed(1), cy: ly.toFixed(1), r: 24 }, g);
    const [vx, vy] = point(i, n, axis.level);
    svg('circle', { class: 'hud-hit', cx: vx.toFixed(1), cy: vy.toFixed(1), r: 14 }, g);

    const label = svg('text', {
      class: 'hud-label',
      x: lx.toFixed(1),
      y: ly.toFixed(1),
      'text-anchor': anchor,
      'dominant-baseline': 'central',
    }, g);
    label.textContent = axis.label.toUpperCase();

    const vertex = svg('rect', {
      class: 'hud-vertex',
      x: (vx - 3.5).toFixed(1),
      y: (vy - 3.5).toFixed(1),
      width: 7,
      height: 7,
    }, g);
    vertex.style.setProperty('--i', i);
  });

  host.replaceChildren(root);
}

/* ---------- interaction ---------- */

function select(hud, i) {
  const axes = [...hud.querySelectorAll('.hud-axis')];
  if (!axes[i] || axes[i].classList.contains('is-selected')) return;
  axes.forEach((g, k) => g.classList.toggle('is-selected', k === i));
  renderBars(hud, readData(hud)[i]);
}

function onPoint(event) {
  const group = event.target.closest && event.target.closest('.hud-axis');
  if (!group) return;
  select(group.closest('.skills-hud'), Number(group.dataset.i));
}

function play(hud) {
  hud.classList.remove('hud-play');
  void hud.offsetWidth; // restart the CSS animations
  hud.classList.add('hud-play');
  renderBars(hud, readData(hud)[selectedIndex(hud)], true);
  hud.querySelectorAll('.hud-boss .hud-bar').forEach((bar) => buildBar(bar, clamp(bar.dataset.level)));
}

function init() {
  document.querySelectorAll('.skills-hud').forEach((hud) => {
    if (hud.querySelector('.hud-radar svg')) return; // already drawn
    const data = readData(hud);
    if (!data.length) return;
    buildRadar(hud, data);
    hud.querySelectorAll('.hud-boss .hud-bar').forEach((bar) => buildBar(bar, clamp(bar.dataset.level)));
    hud.querySelectorAll('.hud-axis')[0].classList.add('is-selected');
    renderBars(hud, data[0]);
  });
}

init();

document.addEventListener('click', onPoint);
document.addEventListener('pointerover', (event) => {
  if (event.pointerType === 'mouse') onPoint(event); // hover on desktop, tap on touch
});

// main.js announces which slide is showing; replay the intro when this one appears
document.addEventListener('portfolio:slide', (event) => {
  if (event.detail === 2) document.querySelectorAll('.skills-hud').forEach(play);
});
