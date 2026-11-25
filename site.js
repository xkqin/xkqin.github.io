/* Fancy edition, runtime: reveal, scroll effects, the live hero drawing, plate tilt + cursor badge, light / dark switch. */
(function () {
  var root = document.documentElement, thumb = root.classList.contains('is-thumb');
  root.classList.add('fx');             /* g.css hides the pre-reveal states only under .fx, so without this script nothing stays hidden */
  var still = thumb || matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = !still && matchMedia('(hover: hover) and (pointer: fine)').matches;
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }

  /* ---------- reveal on scroll ---------- */
  var rv = $$('.rv');
  function showAll() { rv.forEach(function (el) { el.classList.add('in'); }); }
  if (still || !('IntersectionObserver' in window)) showAll();
  else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rv.forEach(function (el) { io.observe(el); });
    setTimeout(function () { if (document.hidden) showAll(); }, 2500);   /* a background tab never fires the observer */
  }

  /* ---------- scroll-linked: progress line, the statement lighting up, plates drifting ---------- */
  var mast = $('.mast'), bar = $('.progress i'), lit = $('.lit'), words = $$('.lit .w'), imgs = $$('.plate-in img'), queued = false;
  function onScroll() {
    queued = false;
    var y = window.scrollY, vh = innerHeight, max = root.scrollHeight - vh;
    mast.classList.toggle('scrolled', y > 40);
    bar.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
    var r = lit.getBoundingClientRect(), p = still ? 1 : clamp((vh * 0.9 - r.top) / (vh * 0.42 + r.height * 0.7), 0, 1), n = Math.round(p * (words.length + 1));
    words.forEach(function (w, i) { w.classList.toggle('on', i < n); });
    if (!still) imgs.forEach(function (img) {
      var b = img.parentNode.getBoundingClientRect();
      if (b.bottom < -80 || b.top > vh + 80) return;
      img.style.setProperty('--py', ((b.top + b.height / 2 - vh / 2) / vh * -44).toFixed(1) + 'px');
    });
  }
  addEventListener('scroll', function () { if (!queued) { queued = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---------- pointer: plates tilt and carry a round badge; marked links lean toward the cursor ---------- */
  if (fine) {
    var cur = $('.cursor'), cx = -200, cy = -200, px = -200, py = -200;
    $$('.plate').forEach(function (pl) {
      pl.addEventListener('mousemove', function (e) {
        var b = pl.getBoundingClientRect(), u = (e.clientX - b.left) / b.width, v = (e.clientY - b.top) / b.height;
        pl.style.setProperty('--ry', ((u - 0.5) * 9).toFixed(2) + 'deg');
        pl.style.setProperty('--rx', ((0.5 - v) * 7).toFixed(2) + 'deg');
        pl.style.setProperty('--gx', (u * 100).toFixed(1) + '%');
        pl.style.setProperty('--gy', (v * 100).toFixed(1) + '%');
      });
      pl.addEventListener('mouseenter', function () { cur.classList.add('on'); });
      pl.addEventListener('mouseleave', function () { cur.classList.remove('on'); pl.style.setProperty('--rx', '0deg'); pl.style.setProperty('--ry', '0deg'); });
    });
    addEventListener('mousemove', function (e) { cx = e.clientX; cy = e.clientY; }, { passive: true });
    (function follow() {
      px += (cx - px) * 0.24; py += (cy - py) * 0.24;
      cur.style.transform = 'translate3d(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px,0)';
      requestAnimationFrame(follow);
    })();
    $$('[data-mag]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var b = el.getBoundingClientRect();
        el.style.transform = 'translate(' + ((e.clientX - b.left - b.width / 2) * 0.26).toFixed(1) + 'px,' + ((e.clientY - b.top - b.height / 2) * 0.4).toFixed(1) + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  /* ---------- light / dark: the new colours open from the button in a circle ---------- */
  var PAIR = { cream: 'night', night: 'cream', vermilion: 'ember', ember: 'vermilion', sage: 'abyss', abyss: 'sage' };
  var mode = $('.mode');
  function setPalette(p) { root.setAttribute('data-p', p); window.dispatchEvent(new Event('palettechange')); }
  if (mode) mode.addEventListener('click', function () {
    var next = PAIR[root.getAttribute('data-p')] || 'night';
    try { localStorage.setItem('xq-palette', next); } catch (e) {}
    if (still || !document.startViewTransition) { setPalette(next); return; }
    var b = mode.getBoundingClientRect(), x = b.left + b.width / 2, y = b.top + b.height / 2;
    var rad = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.classList.add('no-tr');
    var vt = document.startViewTransition(function () { setPalette(next); });
    vt.ready.then(function () {
      root.animate({ clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + rad + 'px at ' + x + 'px ' + y + 'px)'] },
        { duration: 750, easing: 'cubic-bezier(.4, 0, .2, 1)', pseudoElement: '::view-transition-new(root)' });
    });
    function done() { root.classList.remove('no-tr'); }
    vt.finished.then(done, done);
    setTimeout(done, 1600);             /* never leave transitions switched off if the browser stalls the animation */
  });

  /* ---------- hero: the camera-path illustration, alive ----------
     A patch of terrain breathes; the path draws itself node by node; then a camera flies it, again and again. */
  var cv = $('.hero-cv');
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext('2d'), W = 0, H = 0, s = 1, t0 = performance.now(), seen = true, raf = 0, col = {}, mx = 0, my = 0, ax = 0, ay = 0;
  var HX = 17, HZ = 8, N = 11;
  function colors() {
    var cs = getComputedStyle(root);
    col.acc = cs.getPropertyValue('--accent').trim(); col.ink = cs.getPropertyValue('--ink').trim();
    col.g1 = cs.getPropertyValue('--g1').trim(); col.g3 = cs.getPropertyValue('--g3').trim();
  }
  function size() {
    var d = Math.min(2, window.devicePixelRatio || 1);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.round(W * d); cv.height = Math.round(H * d);
    ctx.setTransform(d, 0, 0, d, 0, 0);
    s = Math.max(W / 44, 15);
  }
  function hgt(x, z, t) { return 0.95 * Math.sin(x * 0.42 + t * 0.45) * Math.cos(z * 0.5 - t * 0.3) + 0.6 * Math.sin(x * 0.21 - z * 0.33 + 1.7 + t * 0.2) + 0.3 * Math.cos(z * 0.9 + x * 0.13); }
  function P(x, y, z) { return [W * 0.52 + (x + z * 0.55) * s + ax * (10 + z * 1.6), H * 0.6 + (z * 0.42 - x * 0.1) * s - y * s * 0.9 + ay * (6 + z * 0.8)]; }
  function edge(x, z) { return (1 - Math.pow(Math.abs(x) / HX, 2.4)) * (1 - Math.pow(Math.abs(z) / HZ, 2.4)); }
  function path(u, t) { var x = -15 + 30 * u, z = 5.2 * Math.sin(u * 5 + 0.4) - 0.6; return [x, hgt(x, z, t) * 0.35 + 3.3 + 1.7 * Math.sin(Math.PI * u), z]; }
  /* direction of travel at u; the two fixed cameras and the flying one all use it, so they coincide where they meet */
  function heading(u, t) { var a = path(Math.max(0, u - 0.012), t), b = path(Math.min(1, u + 0.012), t); return [b[0] - a[0], b[1] - a[1], b[2] - a[2]]; }
  function dot(p, r) { ctx.beginPath(); ctx.arc(p[0], p[1], r, 0, 6.2832); ctx.fill(); }
  function frustum(o, d, alpha) {                        /* a little wire camera at o, looking along d */
    var l = Math.hypot(d[0], d[1], d[2]) || 1, dx = d[0] / l, dy = d[1] / l, dz = d[2] / l;
    var sl = Math.hypot(dz, dx) || 1, sx = dz / sl, sz = -dx / sl;                 /* side = d x up */
    var c = [o[0] + dx * 1.5, o[1] + dy * 1.5, o[2] + dz * 1.5], a = P(o[0], o[1], o[2]), q = [], i;
    [[1, 1], [1, -1], [-1, -1], [-1, 1]].forEach(function (k) { q.push(P(c[0] + sx * 0.75 * k[0], c[1] + 0.5 * k[1], c[2] + sz * 0.75 * k[0])); });
    ctx.globalAlpha = alpha; ctx.lineWidth = 1; ctx.beginPath();
    for (i = 0; i < 4; i++) { ctx.moveTo(a[0], a[1]); ctx.lineTo(q[i][0], q[i][1]); ctx.lineTo(q[(i + 1) % 4][0], q[(i + 1) % 4][1]); }
    ctx.stroke();
  }
  function frame(now) {
    var t = still ? 6 : (now - t0) / 1000, R = still ? 1 : clamp((t - 0.6) / 2.6, 0, 1), i, k, x, z;
    ax += (mx - ax) * 0.06; ay += (my - ay) * 0.06;
    ctx.clearRect(0, 0, W, H); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.setLineDash([]);

    /* terrain: one projected point per vertex, lines sorted into five strengths so the patch fades out at its rim */
    var pt = [], buckets = [[], [], [], [], []];
    for (x = -HX; x <= HX; x++) { pt[x + HX] = []; for (z = -HZ; z <= HZ; z++) pt[x + HX][z + HZ] = P(x, hgt(x, z, t), z); }
    function seg(x1, z1, x2, z2) { var e = edge((x1 + x2) / 2, (z1 + z2) / 2); if (e > 0.02) buckets[Math.min(4, Math.floor(e * 5))].push(pt[x1 + HX][z1 + HZ], pt[x2 + HX][z2 + HZ]); }
    for (x = -HX; x <= HX; x++) for (z = -HZ; z <= HZ; z++) { if (x < HX) seg(x, z, x + 1, z); if (z < HZ) seg(x, z, x, z + 1); }
    ctx.strokeStyle = col.ink; ctx.lineWidth = 0.8;
    for (k = 0; k < 5; k++) {
      ctx.globalAlpha = 0.04 + k * 0.036; ctx.beginPath();
      for (i = 0; i < buckets[k].length; i += 2) { ctx.moveTo(buckets[k][i][0], buckets[k][i][1]); ctx.lineTo(buckets[k][i + 1][0], buckets[k][i + 1][1]); }
      ctx.stroke();
    }

    var ink = col.acc;
    if (col.g1) { ink = ctx.createLinearGradient(P(-15, 3, 0)[0], 0, P(15, 3, 0)[0], 0); ink.addColorStop(0, col.g1); ink.addColorStop(1, col.g3 || col.g1); }
    ctx.strokeStyle = ink; ctx.fillStyle = ink;

    /* the nodes of the path, each dropped to the ground and tied into a small network there */
    var nodes = [];
    for (k = 0; k < N; k++) {
      var u = k / (N - 1), q = path(u, t), zs = q[2] + (k % 2 ? 3.4 : -3.2);
      nodes.push({ vis: clamp((R - u + 0.02) * 10, 0, 1), top: P(q[0], q[1], q[2]), bot: P(q[0], hgt(q[0], q[2], t), q[2]), side: P(q[0] + 1.6, hgt(q[0] + 1.6, zs, t), zs) });
    }
    ctx.lineWidth = 1;
    nodes.forEach(function (n, j) {
      if (n.vis <= 0) return;
      ctx.globalAlpha = 0.36 * n.vis; ctx.setLineDash([3, 5]);
      ctx.beginPath(); ctx.moveTo(n.top[0], n.top[1]); ctx.lineTo(n.bot[0], n.bot[1]); ctx.stroke(); ctx.setLineDash([]);
      ctx.globalAlpha = 0.26 * n.vis; ctx.beginPath(); ctx.moveTo(n.bot[0], n.bot[1]); ctx.lineTo(n.side[0], n.side[1]);
      if (j) { var m = nodes[j - 1]; ctx.moveTo(n.bot[0], n.bot[1]); ctx.lineTo(m.bot[0], m.bot[1]); ctx.moveTo(n.side[0], n.side[1]); ctx.lineTo(m.bot[0], m.bot[1]); }
      ctx.stroke();
      ctx.globalAlpha = 0.6 * n.vis; dot(n.bot, 2.6); dot(n.side, 2.1);
    });

    /* the path itself, drawn as far as it has got */
    ctx.globalAlpha = 0.95; ctx.lineWidth = 1.7; ctx.beginPath();
    for (i = 0; i <= 96; i++) { var c = path(i / 96 * R, t), p = P(c[0], c[1], c[2]); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }
    ctx.stroke();
    nodes.forEach(function (n) { if (n.vis <= 0) return; ctx.globalAlpha = 0.18 * n.vis; dot(n.top, 8.5 * n.vis); ctx.globalAlpha = n.vis; dot(n.top, 3.6); });
    frustum(path(0, t), heading(0, t), 0.75);
    if (R >= 1) {
      frustum(path(1, t), heading(1, t), 0.75);
      /* the camera in flight, with a short fading wake: it leaves the first fixed camera, docks exactly on the last one, rests there, starts again */
      var ph = ((t - 3.2) * 0.07) % 1.16, uc = Math.min(1, ph), o = path(uc, t), po = P(o[0], o[1], o[2]), docked = ph >= 1;
      if (!docked) for (i = 1; i < 14; i++) { var ut = uc - i * 0.008; if (ut < 0) break; var w = path(ut, t); ctx.globalAlpha = 0.45 * (1 - i / 14); dot(P(w[0], w[1], w[2]), 4.4 * (1 - i / 16)); }
      ctx.globalAlpha = docked ? 0.3 * (1 - (ph - 1) / 0.16) : 0.22; dot(po, docked ? 13 + 60 * (ph - 1) : 13 + 3 * Math.sin(t * 4));
      ctx.globalAlpha = 1; dot(po, 5.4);
      frustum(o, heading(uc, t), 0.9);
    }
    ctx.globalAlpha = 1;
  }
  function loop(now) { frame(now); if (seen) raf = requestAnimationFrame(loop); }
  /* always paint one frame right away, so the drawing is there even where animation frames are paused (background tabs) */
  function kick() { cancelAnimationFrame(raf); frame(performance.now()); if (!still) raf = requestAnimationFrame(loop); }
  cv._seek = function (sec) { t0 = performance.now() - sec * 1000; kick(); };   /* for checking a moment of the loop by hand */
  root.classList.add('fx-on');          /* first: this is what un-hides the canvas, and size() must measure it visible */
  colors(); size(); kick();
  addEventListener('resize', function () { size(); kick(); });
  addEventListener('palettechange', function () { colors(); kick(); });
  if (!still && 'IntersectionObserver' in window) new IntersectionObserver(function (e) { seen = e[0].isIntersecting; if (seen) kick(); }).observe(cv);
  if (fine) addEventListener('mousemove', function (e) { mx = e.clientX / innerWidth * 2 - 1; my = e.clientY / innerHeight * 2 - 1; }, { passive: true });
})();
