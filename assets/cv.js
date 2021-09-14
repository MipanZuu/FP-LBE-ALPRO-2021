let header = document.querySelector("header");
const text = document.querySelector(".font");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
const menuToggle = document.querySelector(".menu-icon");
const nav = document.querySelector("header ul");

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);
function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  header.classList.toggle("sticky", window.scrollY > 150);
});

window.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
