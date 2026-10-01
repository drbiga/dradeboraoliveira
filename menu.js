// Menu hambúrguer (mobile). Usado em todas as páginas.
(function () {
  var header = document.querySelector('header.site');
  var btn = header && header.querySelector('.mobile-toggle');
  if (!btn) return;

  function set(open) {
    header.classList.toggle('menu-open', open);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  btn.addEventListener('click', function () {
    set(!header.classList.contains('menu-open'));
  });
  header.querySelectorAll('nav a').forEach(function (a) {
    a.addEventListener('click', function () { set(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') set(false);
  });
  window.matchMedia('(min-width: 861px)').addEventListener('change', function (e) {
    if (e.matches) set(false);
  });
})();
