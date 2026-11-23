/* xkqin.github.io: the page is plain HTML; this only adds the masthead hairline and the scroll reveal. */
(function () {
  var mast = document.querySelector('.mast');
  function onScroll() { mast.classList.toggle('scrolled', window.scrollY > 40); }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var els = [].slice.call(document.querySelectorAll('.rv'));
  function showAll() { els.forEach(function (el) { el.classList.add('in'); }); }
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { showAll(); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (el) { io.observe(el); });
  /* a tab opened in the background never fires the observer */
  setTimeout(function () { if (document.hidden) showAll(); }, 2500);
})();
