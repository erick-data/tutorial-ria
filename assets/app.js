/* Tutorial RIA — comportamiento compartido (tema, nav activo, prompts colapsables) */
(function () {
  // ---- Theme ----
  var KEY = "tutorial-ria-theme";
  function apply(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    var b = document.querySelector(".theme-toggle");
    if (b) b.textContent = t === "dark" ? "☀️" : "🌙";
  }
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved) apply(saved);
    else {
      var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      apply(dark ? "dark" : "light");
    }
  }
  window.toggleTheme = function () {
    var cur = document.documentElement.getAttribute("data-theme");
    apply(cur === "dark" ? "light" : "dark");
  };

  // ---- Active nav link (by filename) ----
  function initNav() {
    var here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navlinks a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === here) a.classList.add("active");
    });
  }

  // ---- Expand/collapse long prompt blocks ----
  window.togglePrompt = function (btn) {
    var box = btn.closest(".prompt");
    box.classList.toggle("open");
    btn.textContent = box.classList.contains("open") ? "▲ Contraer" : "▼ Ver completo";
  };

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNav();
  });
  // apply theme ASAP to avoid flash
  initTheme();
})();
