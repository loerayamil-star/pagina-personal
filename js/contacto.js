(function () {
  "use strict";

  // ---------- Toggle de modo claro/oscuro ----------

  var raiz = document.documentElement;
  var botonTema = document.getElementById("boton-tema");
  var claveAlmacenamiento = "tema";

  function temaDelSistema() {
    var prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefiereOscuro ? "dark" : "light";
  }

  function temaActual() {
    var explicito = raiz.getAttribute("data-theme");
    return explicito || temaDelSistema();
  }

  function actualizarBoton() {
    if (!botonTema) return;
    var esOscuro = temaActual() === "dark";
    botonTema.setAttribute("aria-pressed", String(esOscuro));
  }

  try {
    var guardado = window.localStorage.getItem(claveAlmacenamiento);
    if (guardado === "dark" || guardado === "light") {
      raiz.setAttribute("data-theme", guardado);
    }
  } catch (error) {
    // Si localStorage no está disponible, seguimos con la preferencia del sistema.
  }

  actualizarBoton();

  if (botonTema) {
    botonTema.addEventListener("click", function () {
      var siguienteTema = temaActual() === "dark" ? "light" : "dark";
      raiz.setAttribute("data-theme", siguienteTema);
      actualizarBoton();
      try {
        window.localStorage.setItem(claveAlmacenamiento, siguienteTema);
      } catch (error) {
        // Sin almacenamiento disponible, el cambio solo dura esta carga de página.
      }
    });
  }

  // ---------- Correo de contacto (ofuscado) ----------

  var enlaceCorreo = document.getElementById("enlace-correo");

  if (enlaceCorreo) {
    var usuario = ["y", "x", "m", "d", "e", "l", "o", "e", "r", "a"].join("");
    var dominio = ["gmail", "com"].join(".");
    var correo = usuario + "@" + dominio;
    enlaceCorreo.setAttribute("href", "mailto:" + correo);
  }
})();
