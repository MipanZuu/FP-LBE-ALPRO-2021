let header = document.querySelector("header");
const menuOpen = document.querySelector(".menu-icon");
const nav = document.querySelector("header ul");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  header.classList.toggle("sticky", window.scrollY > 100);
});

window.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
