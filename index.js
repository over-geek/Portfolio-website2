const menuBtn = document.getElementById("menu-btn-open");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");

function navToggle() {
  menuBtn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

menuBtn.addEventListener("click", navToggle);
