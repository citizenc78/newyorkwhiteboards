/* ================================================================
   Site-wide behaviour
   (forms post directly to Jotform — no embed, nothing to set here)
   ================================================================ */

/* Mobile menu */
var menuBtn = document.querySelector(".menu-btn");
if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    var head = document.querySelector("header");
    var open = head.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

/* Accordions */
document.querySelectorAll(".acc-head").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var item = btn.parentElement;
    var body = item.querySelector(".acc-body");
    var wasOpen = item.classList.contains("open");
    document.querySelectorAll(".acc-item.open").forEach(function (o) {
      o.classList.remove("open");
      o.querySelector(".acc-body").style.maxHeight = null;
      o.querySelector(".acc-head").setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      item.classList.add("open");
      body.style.maxHeight = body.scrollHeight + "px";
      btn.setAttribute("aria-expanded", "true");
    }
  });
});
