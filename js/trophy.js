/*
 * Spinning gold trophy (Contacts slide).
 *
 * It lives in its own small transparent canvas (#trophy-stage, fixed on the
 * right side of the screen) instead of the main scene. That keeps it
 * independent from the main camera, and from Swiper's loop clones, which
 * cannot copy a WebGL canvas. The render loop only runs while the Contacts
 * slide is showing.
 *
 * The trophy is also the CV download button: the <a class="trophy-cta"> below
 * it is a real link (keyboard friendly), and clicking the canvas triggers it.
 */
import * as THREE from 'three';

const SLIDE = 4; // index of the Contacts slide
const stage = document.getElementById('trophy-stage');

if (stage) init(stage);

function init(stage) {
  const canvas = stage.querySelector('canvas');
  const cta = stage.querySelector('.trophy-cta');

  let renderer = null;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (error) {
    renderer = null;
  }

  // Always handle visibility, even without WebGL (the CV link still works)
  let raf = 0;
  const show = (visible) => {
    stage.classList.toggle('is-visible', visible);
    if (!renderer) return;
    if (visible && !raf) raf = requestAnimationFrame(loop);
    if (!visible && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
  document.addEventListener('portfolio:slide', (event) => show(event.detail === SLIDE));

  if (!renderer) {
    stage.classList.add('no-webgl');
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 60);
  camera.position.set(0, 2.9, 9.8);
  camera.lookAt(0, 2.0, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xfff0cc, 1.2);
  key.position.set(3, 5, 4);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffc860, 0.7);
  rim.position.set(-4, 2, -3);
  scene.add(rim);

  /* ---------- trophy ---------- */

  const gold = new THREE.MeshPhongMaterial({
    color: 0xffc22e,
    specular: 0xfff2b8,
    shininess: 70,
    flatShading: true,
    emissive: 0x3d2600,
    side: THREE.DoubleSide,
  });
  const brightGold = new THREE.MeshPhongMaterial({
    color: 0xffd85a,
    specular: 0xffffff,
    shininess: 90,
    flatShading: true,
    emissive: 0x6b4a00,
    side: THREE.DoubleSide,
  });
  const charcoal = new THREE.MeshPhongMaterial({ color: 0x1b1b1b, specular: 0x555555, shininess: 30, flatShading: true });

  const group = new THREE.Group();
  const spinner = new THREE.Group(); // the part that rotates
  group.add(spinner);
  scene.add(group);

  const outline = (geometry, opacity = 0.5) =>
    new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry, 20),
      new THREE.LineBasicMaterial({ color: 0xfff1b0, transparent: true, opacity })
    );

  const add = (geometry, material, x, y, z) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.add(outline(geometry));
    mesh.position.set(x, y, z);
    spinner.add(mesh);
    return mesh;
  };

  // plinth
  add(new THREE.BoxGeometry(2.0, 0.28, 2.0), charcoal, 0, 0.14, 0);
  add(new THREE.BoxGeometry(1.5, 0.24, 1.5), charcoal, 0, 0.4, 0);
  // stem and knob
  add(new THREE.CylinderGeometry(0.14, 0.22, 0.75, 8), gold, 0, 0.895, 0);
  add(new THREE.CylinderGeometry(0.2, 0.34, 0.2, 8), gold, 0, 1.37, 0);
  // cup (a low-poly lathe keeps the arcade look)
  const profile = [
    [0.0, 1.47], [0.12, 1.47], [0.55, 1.62], [0.82, 2.15], [0.95, 2.9], [0.97, 3.2],
    [0.84, 3.2], [0.84, 2.95], [0.72, 2.3], [0.1, 1.8], [0.0, 1.8],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  add(new THREE.LatheGeometry(profile, 10), gold, 0, 0, 0);
  // handles
  const earGeometry = new THREE.TorusGeometry(0.42, 0.075, 6, 10, Math.PI);
  const right = add(earGeometry, gold, 0.9, 2.35, 0);
  right.rotation.z = -Math.PI / 2;
  const left = add(earGeometry, gold, -0.9, 2.35, 0);
  left.rotation.z = Math.PI / 2;

  // name plates on the four sides of the plinth
  const plateCanvas = document.createElement('canvas');
  plateCanvas.width = 128;
  plateCanvas.height = 32;
  const plateTexture = new THREE.CanvasTexture(plateCanvas);
  plateTexture.magFilter = THREE.NearestFilter;
  plateTexture.minFilter = THREE.NearestFilter;
  const drawPlate = () => {
    const ctx = plateCanvas.getContext('2d');
    ctx.fillStyle = '#e9ab1d';
    ctx.fillRect(0, 0, 128, 32);
    ctx.fillStyle = '#3a2300';
    ctx.fillRect(0, 0, 128, 3);
    ctx.fillRect(0, 29, 128, 3);
    ctx.font = '12px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('LUIS C.', 64, 17);
    plateTexture.needsUpdate = true;
  };
  drawPlate();
  if (document.fonts && document.fonts.load) {
    document.fonts.load('12px "Press Start 2P"').then(drawPlate).catch(() => {});
  }
  const plateMaterial = new THREE.MeshBasicMaterial({ map: plateTexture });
  for (let k = 0; k < 4; k += 1) {
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.2), plateMaterial);
    const angle = (k * Math.PI) / 2;
    plate.position.set(Math.sin(angle) * 1.003, 0.14, Math.cos(angle) * 1.003);
    plate.rotation.y = angle;
    spinner.add(plate);
  }

  // star above the cup
  const starShape = new THREE.Shape();
  for (let i = 0; i < 10; i += 1) {
    const radius = i % 2 === 0 ? 0.46 : 0.2;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const x = Math.cos(a) * radius;
    const y = Math.sin(a) * radius;
    if (i === 0) starShape.moveTo(x, y);
    else starShape.lineTo(x, y);
  }
  starShape.closePath();
  const starGeometry = new THREE.ExtrudeGeometry(starShape, { depth: 0.14, bevelEnabled: false });
  starGeometry.translate(0, 0, -0.07);
  const star = new THREE.Mesh(starGeometry, brightGold);
  star.add(outline(starGeometry, 0.8));
  star.position.set(0, 3.85, 0);
  spinner.add(star);

  // twinkling pixels around the trophy
  const sparkCount = 16;
  const sparkPositions = new Float32Array(sparkCount * 3);
  for (let i = 0; i < sparkCount; i += 1) {
    const a = Math.random() * Math.PI * 2;
    const r = 1.5 + Math.random() * 1.1;
    sparkPositions[i * 3] = Math.cos(a) * r;
    sparkPositions[i * 3 + 1] = 0.6 + Math.random() * 3.6;
    sparkPositions[i * 3 + 2] = Math.sin(a) * r;
  }
  const sparkGeometry = new THREE.BufferGeometry();
  sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
  const sparkMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.11, transparent: true });
  const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
  group.add(sparks);

  /* ---------- size, interaction ---------- */

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas);
  window.addEventListener('resize', resize);
  resize();

  let boost = 0;     // extra spin after a click
  let hovering = false;
  stage.addEventListener('pointerenter', () => { hovering = true; });
  stage.addEventListener('pointerleave', () => { hovering = false; });
  stage.addEventListener('click', () => { boost = 14; });
  canvas.addEventListener('click', () => cta && cta.click());

  /* ---------- loop ---------- */

  let last = performance.now();
  let time = 0;
  function loop(now) {
    raf = requestAnimationFrame(loop);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    time += dt;

    boost *= Math.pow(0.04, dt); // ease the extra spin out in about a second
    spinner.rotation.y += dt * (0.9 + (hovering ? 1.1 : 0) + boost);
    group.position.y = Math.sin(time * 1.6) * 0.07;
    star.rotation.y = time * 2.4;
    star.position.y = 3.85 + Math.sin(time * 2.2) * 0.1;
    sparks.rotation.y = -time * 0.25;
    sparkMaterial.opacity = 0.45 + 0.55 * Math.abs(Math.sin(time * 3));

    renderer.render(scene, camera);
  }

  // the slide may already be showing if this loads late
  last = performance.now();
}
