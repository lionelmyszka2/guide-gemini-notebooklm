/* ===========================
   MeetFusion - Script interactif
   =========================== */

(function () {
  'use strict';

  // --- Éléments du DOM ---
  const modalOverlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalFooter = document.getElementById('modalFooter');

  // Sortir si pas de modal sur cette page (ex: index.html)
  if (!modalOverlay) return;

  // --- Gestion des hotspots ---
  const hotspots = document.querySelectorAll('.hotspot');

  hotspots.forEach(function (hotspot) {
    // Clic : ouvrir la modal
    hotspot.addEventListener('click', function () {
      var id = this.dataset.hotspot;
      // pageContent est défini dans le HTML de chaque page
      if (typeof pageContent !== 'undefined' && pageContent[id]) {
        openModal(pageContent[id], id);
      }
    });

    // Hover : afficher la zone highlight
    var zoneId = hotspot.dataset.zone;
    if (zoneId) {
      var zone = document.getElementById(zoneId);
      if (zone) {
        hotspot.addEventListener('mouseenter', function () {
          zone.classList.add('active');
        });
        hotspot.addEventListener('mouseleave', function () {
          zone.classList.remove('active');
        });
      }
    }
  });

  // --- Modal : ouvrir ---
  function openModal(content, id) {
    modalBadge.textContent = id;
    modalTitle.textContent = content.title;
    modalBody.innerHTML = content.body;
    modalFooter.innerHTML = content.footer || '';
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap : focus sur le bouton fermer
    setTimeout(function () {
      modalClose.focus();
    }, 100);
  }

  // --- Modal : fermer ---
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Fermer au clic sur X
  modalClose.addEventListener('click', closeModal);

  // Fermer au clic sur l'overlay (en dehors de la modal)
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Fermer avec Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // --- Image placeholder si screenshot manquant ---
  var img = document.getElementById('screenshotImg');
  if (img) {
    img.addEventListener('error', function () {
      var container = document.getElementById('screenshotContainer');
      if (container) {
        var placeholder = document.createElement('div');
        placeholder.className = 'screenshot-placeholder';
        placeholder.innerHTML = '<p>Capture d\'écran à ajouter<br><small>Placez votre image dans <code>images/notebooklm-main.png</code></small></p>';
        img.style.display = 'none';
        container.insertBefore(placeholder, container.firstChild);
      }
    });
  }

})();
