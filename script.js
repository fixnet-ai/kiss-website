(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
  }

  // Default to dark (terminal aesthetic); honor an explicit saved choice.
  var saved = null;
  try { saved = localStorage.getItem('kiss-theme'); } catch (e) {}
  apply(saved === 'light' ? 'light' : 'dark');

  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('kiss-theme', next); } catch (e) {}
  });

  // Mobile navigation
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav-links');
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
})();
