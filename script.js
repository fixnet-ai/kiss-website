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

// K.I.S.S 自动轮播：每 5 秒换一个字母展开对应单词（Keep it simple stupid）
(function () {
  var acronym = document.querySelector('.kiss-acronym');
  if (!acronym) return;
  var words = Array.prototype.slice.call(acronym.querySelectorAll('.w'));
  if (!words.length) return;
  var index = 0;
  words[index].classList.add('on');
  setInterval(function () {
    words[index].classList.remove('on');
    index = (index + 1) % words.length;
    words[index].classList.add('on');
  }, 3000);
})();
