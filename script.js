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

// K.I.S.S 鱼眼：鼠标划到哪个字母，哪个字母放大并展开对应单词（跟手、局部）
(function () {
  var acronym = document.querySelector('.kiss-acronym');
  if (!acronym) return;
  var words = Array.prototype.slice.call(acronym.querySelectorAll('.w'));
  var THRESHOLD = 32;   // 展开单词的距离阈值
  var RADIUS = 110;     // 鱼眼放大影响半径

  acronym.addEventListener('mousemove', function (e) {
    var mx = e.clientX;
    words.forEach(function (w) {
      var init = w.querySelector('.init');
      var r = init.getBoundingClientRect();
      var cx = r.left + r.width / 2;
      var dist = Math.abs(mx - cx);
      var t = Math.max(0, 1 - dist / RADIUS);
      w.style.setProperty('--s', (1 + t * 0.3).toFixed(3));
      w.classList.toggle('on', dist < THRESHOLD);
    });
  });

  acronym.addEventListener('mouseleave', function () {
    words.forEach(function (w) {
      w.style.setProperty('--s', '1');
      w.classList.remove('on');
    });
  });
})();
