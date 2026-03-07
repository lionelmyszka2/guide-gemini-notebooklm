/* ===========================
   Recherche globale du guide
   =========================== */

(function () {
  'use strict';

  // --- Index de recherche ---
  var searchIndex = [
    // === GEMINI ===
    // Page 1 : Vue principale
    { title: "Barre de prompt", page: "gemini.html", section: "Gemini — Vue principale", keywords: "barre prompt saisie question demande rédaction fichier dicter vocalement micro importer" },
    { title: "Sélecteur de modèle", page: "gemini.html", section: "Gemini — Vue principale", keywords: "sélecteur modèle rapide raisonnement pro mode gemini" },
    { title: "Zone de conversation", page: "gemini.html", section: "Gemini — Vue principale", keywords: "zone conversation chat échange réponse copier structurée" },
    { title: "Historique des conversations", page: "gemini.html", section: "Gemini — Vue principale", keywords: "historique conversations passées retrouver reprendre panneau latéral" },
    { title: "Nouvelle discussion", page: "gemini.html", section: "Gemini — Vue principale", keywords: "nouvelle discussion sujet mémoire contexte séparer" },

    // Page 2 : Exploiter les réponses
    { title: "Suggestions de l'IA", page: "gemini-page2.html", section: "Exploiter les réponses", keywords: "suggestions ia questions suivi approfondir reformuler" },
    { title: "Bouton Sources", page: "gemini-page2.html", section: "Exploiter les réponses", keywords: "bouton sources vérifier recherche google liens web" },
    { title: "Actions sur la réponse", page: "gemini-page2.html", section: "Exploiter les réponses", keywords: "actions réponse copier partager évaluer pouce exporter google docs gmail" },

    // Page 3 : Les outils du chat
    { title: "Ajouter des fichiers", page: "gemini-page3.html", section: "Les outils du chat", keywords: "ajouter fichiers importer pdf image photo document tableur joindre pièce" },
    { title: "Outils créatifs", page: "gemini-page3.html", section: "Les outils du chat", keywords: "outils créatifs canvas deep research recherche approfondie générer image" },
    { title: "Sélecteur de modèle (chat)", page: "gemini-page3.html", section: "Les outils du chat", keywords: "sélecteur modèle rapide raisonnement pro mode choix" },
    { title: "Entrée vocale", page: "gemini-page3.html", section: "Les outils du chat", keywords: "entrée vocale micro parler dicter voix audio" },

    // Page 4 : Canvas
    { title: "Le panneau de conversation Canvas", page: "gemini-page4.html", section: "Canvas", keywords: "panneau conversation canvas chat dialogue document modifier" },
    { title: "L'en-tête du document Canvas", page: "gemini-page4.html", section: "Canvas", keywords: "en-tête document titre partage export canvas" },
    { title: "La barre de mise en forme", page: "gemini-page4.html", section: "Canvas", keywords: "barre mise forme formatage gras italique titres listes styles texte canvas" },
    { title: "La zone d'édition collaborative", page: "gemini-page4.html", section: "Canvas", keywords: "zone édition collaborative modifier texte sélectionner canvas rédiger document" },
    { title: "Piloter les modifications depuis le chat", page: "gemini-page4.html", section: "Canvas", keywords: "piloter modifications chat instructions rédiger reformuler compléter ton structurer canvas" },

    // Page 5 : Recherche approfondie
    { title: "Formuler une question de recherche", page: "gemini-page5.html", section: "Recherche approfondie", keywords: "formuler question recherche approfondie deep research contexte finalité détails prompt requête" },
    { title: "Le plan de recherche", page: "gemini-page5.html", section: "Recherche approfondie", keywords: "plan recherche valider modifier axes explorer deep research approfondie" },
    { title: "Sélectionner Deep Research", page: "gemini-page5.html", section: "Recherche approfondie", keywords: "sélectionner activer deep research recherche approfondie mode paramètres" },
    { title: "Combiner avec le mode Raisonnement", page: "gemini-page5.html", section: "Recherche approfondie", keywords: "combiner raisonnement mode analyse synthèse deep research approfondie qualité" },

    // === NOTEBOOKLM ===
    // Page 1 : Vue principale
    { title: "Ajouter des sources", page: "notebooklm.html", section: "NotebookLM — Vue principale", keywords: "ajouter sources importer documents pdf google docs slides web url audio vidéo youtube texte" },
    { title: "Panneau des sources", page: "notebooklm.html", section: "NotebookLM — Vue principale", keywords: "panneau sources sélection cocher décocher gérer supprimer renommer recherche web" },
    { title: "L'espace Discussion", page: "notebooklm.html", section: "NotebookLM — Vue principale", keywords: "espace discussion chatbot question réponse résumé automatique suggestions sources" },
    { title: "Le Studio : outils de création", page: "notebooklm.html", section: "NotebookLM — Vue principale", keywords: "studio outils création résumé audio podcast vidéo carte mentale rapports fiches quiz infographie présentation tableau" },
    { title: "Résultats générés", page: "notebooklm.html", section: "NotebookLM — Vue principale", keywords: "résultats générés notes studio consulter renommer supprimer" },
    { title: "Paramètres de la Discussion", page: "notebooklm.html", section: "NotebookLM — Vue principale", keywords: "paramètres discussion personnaliser objectif style rôle conversation" },

    // Page 2 : Vérification des sources
    { title: "La discussion en action", page: "notebooklm-page2.html", section: "Vérification des sources", keywords: "discussion action réponse références numérotées citations sources vérifier" },
    { title: "Survol d'une référence", page: "notebooklm-page2.html", section: "Vérification des sources", keywords: "survol référence aperçu extrait source bulle prévisualisation" },
    { title: "Source ouverte et surlignée", page: "notebooklm-page2.html", section: "Vérification des sources", keywords: "source ouverte surlignée passage original document texte surligné" },
    { title: "Fermer la source ouverte", page: "notebooklm-page2.html", section: "Vérification des sources", keywords: "fermer source panneau revenir discussion" },

    // Page 3 : Contenu d'une source
    { title: "Guide sur la source", page: "notebooklm-page3.html", section: "Contenu d'une source", keywords: "guide source résumé thèmes clés suggestions questions personnalisées" },
    { title: "Vidéo intégrée", page: "notebooklm-page3.html", section: "Contenu d'une source", keywords: "vidéo intégrée youtube lecteur regarder directement" },
    { title: "Transcription automatique", page: "notebooklm-page3.html", section: "Contenu d'une source", keywords: "transcription automatique sous-titres audio vidéo texte horodatage" }
  ];

  // --- Normalisation pour la recherche ---
  function normalize(str) {
    return str.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // enlever les accents
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // --- Recherche ---
  function search(query) {
    var q = normalize(query);
    if (q.length < 2) return [];

    var terms = q.split(' ').filter(function(t) { return t.length >= 2; });
    if (terms.length === 0) return [];

    var results = [];

    searchIndex.forEach(function(item) {
      var haystack = normalize(item.title + ' ' + item.section + ' ' + item.keywords);
      var score = 0;

      terms.forEach(function(term) {
        if (haystack.indexOf(term) !== -1) {
          score++;
          // Bonus si le terme est dans le titre
          if (normalize(item.title).indexOf(term) !== -1) {
            score += 2;
          }
        }
      });

      if (score > 0) {
        results.push({ item: item, score: score });
      }
    });

    // Trier par score décroissant
    results.sort(function(a, b) { return b.score - a.score; });

    return results.slice(0, 8).map(function(r) { return r.item; });
  }

  // --- Initialisation du DOM ---
  function init() {
    var searchContainer = document.querySelector('.search-container');
    if (!searchContainer) return;

    var searchInput = searchContainer.querySelector('.search-input');
    var searchResults = searchContainer.querySelector('.search-results');
    var searchClear = searchContainer.querySelector('.search-clear');

    if (!searchInput || !searchResults) return;

    var debounceTimer = null;

    // Afficher/masquer le bouton clear
    function toggleClear() {
      if (searchClear) {
        searchClear.style.display = searchInput.value.length > 0 ? 'flex' : 'none';
      }
    }

    // Afficher les résultats
    function showResults(items) {
      if (items.length === 0) {
        if (searchInput.value.trim().length >= 2) {
          searchResults.innerHTML = '<div class="search-no-result">Aucun résultat pour cette recherche</div>';
          searchResults.classList.add('active');
        } else {
          searchResults.classList.remove('active');
          searchResults.innerHTML = '';
        }
        return;
      }

      var html = '';
      items.forEach(function(item) {
        var icon = item.page.indexOf('notebooklm') !== -1 ? '📔' : '✨';
        html += '<a href="' + item.page + '" class="search-result-item">';
        html += '<span class="search-result-icon">' + icon + '</span>';
        html += '<div class="search-result-text">';
        html += '<span class="search-result-title">' + item.title + '</span>';
        html += '<span class="search-result-section">' + item.section + '</span>';
        html += '</div>';
        html += '</a>';
      });

      searchResults.innerHTML = html;
      searchResults.classList.add('active');
    }

    // Événement de saisie
    searchInput.addEventListener('input', function () {
      toggleClear();
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        var query = searchInput.value.trim();
        if (query.length >= 2) {
          var results = search(query);
          showResults(results);
        } else {
          searchResults.classList.remove('active');
          searchResults.innerHTML = '';
        }
      }, 200);
    });

    // Bouton clear
    if (searchClear) {
      searchClear.addEventListener('click', function (e) {
        e.preventDefault();
        searchInput.value = '';
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        toggleClear();
        searchInput.focus();
      });
    }

    // Fermer les résultats au clic en dehors
    document.addEventListener('click', function (e) {
      if (!searchContainer.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });

    // Focus : réafficher les résultats s'il y en a
    searchInput.addEventListener('focus', function () {
      if (searchInput.value.trim().length >= 2) {
        var results = search(searchInput.value.trim());
        showResults(results);
      }
    });

    // Navigation clavier dans les résultats
    searchInput.addEventListener('keydown', function (e) {
      var items = searchResults.querySelectorAll('.search-result-item');
      var active = searchResults.querySelector('.search-result-item.focused');
      var index = -1;

      if (active) {
        for (var i = 0; i < items.length; i++) {
          if (items[i] === active) { index = i; break; }
        }
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (active) active.classList.remove('focused');
        index = (index + 1) % items.length;
        items[index].classList.add('focused');
        items[index].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (active) active.classList.remove('focused');
        index = index <= 0 ? items.length - 1 : index - 1;
        items[index].classList.add('focused');
        items[index].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        if (active) {
          e.preventDefault();
          active.click();
        }
      } else if (e.key === 'Escape') {
        searchResults.classList.remove('active');
        searchInput.blur();
      }
    });

    toggleClear();
  }

  // Lancer au chargement
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
