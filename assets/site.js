(function () {
  'use strict';
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');
  var toast = document.getElementById('toast');
  var status = document.getElementById('downloadStatus');
  var toastTimer;

  function say(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toast.classList.remove('show'); }, 4200);
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  document.querySelectorAll('[data-download]').forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      var oldText = button.innerHTML;
      button.classList.add('is-checking');
      if (status) status.textContent = 'Memeriksa berkas APK…';
      fetch('animego.apk', { method: 'HEAD', cache: 'no-store' }).then(function (response) {
        if (!response.ok) throw new Error('APK belum tersedia di folder website.');
        var link = document.createElement('a');
        link.href = 'animego.apk';
        link.download = 'animego.apk';
        document.body.appendChild(link);
        link.click();
        link.remove();
        if (status) status.textContent = 'Download dimulai.';
      }).catch(function () {
        var message = 'File animego.apk belum diunggah. Letakkan APK di folder yang sama dengan index.html atau di folder docs/. Lalu coba lagi.';
        if (status) status.textContent = message;
        say(message);
      }).finally(function () {
        button.classList.remove('is-checking');
        button.innerHTML = oldText;
      });
    });
  });

  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightboxImage');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-preview]').forEach(function (card) {
    card.addEventListener('click', function () {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = card.getAttribute('data-preview');
      lightboxImage.alt = card.getAttribute('data-caption') || 'Preview AnimeGo';
      lightboxCaption.textContent = card.getAttribute('data-caption') || 'Preview AnimeGo';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', function (event) { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeLightbox(); });
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
