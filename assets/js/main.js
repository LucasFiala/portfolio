(function () {
  // Footer year follows the visitor's clock, so it never needs a manual update.
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Click an image to enlarge it; click again or press Esc to close.
  var zooms = document.querySelectorAll('.zoom');
  if (!zooms.length) return;
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', 'Enlarged image');
  var big = document.createElement('img');
  box.appendChild(big);
  document.body.appendChild(box);
  var last = null;
  function close() { box.hidden = true; big.removeAttribute('src'); if (last) last.focus(); }
  zooms.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      last = btn;
      box.hidden = false;
    });
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) close(); });
})();
