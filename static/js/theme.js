// Light/dark choice. Runs in <head> so the page never flashes the wrong theme.
// The choice is kept in this browser's localStorage only; nothing is sent anywhere.
(function () {
  var root = document.documentElement;
  var KEY = "theme";
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function current() {
    var s = root.getAttribute("data-theme");
    if (s) return s;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  var s = saved();
  if (s === "light" || s === "dark") root.setAttribute("data-theme", s);
  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme");
    if (!button) return;
    function label() {
      var dark = current() === "dark";
      button.setAttribute("data-mode", dark ? "dark" : "light");
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    }
    button.hidden = false;
    label();
    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      label();
    });
  });
})();
