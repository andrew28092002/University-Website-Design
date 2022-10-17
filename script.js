const showIcon = document.querySelector("#show-menu-icon");
const navLinks = document.querySelector("#nav-links");

showIcon.addEventListener("click", () => {
  if (window.screen.width < 760) {
    navLinks.style.display = "inline-block";
  }
});

const hideIcon = document.querySelector("#hide-menu-icon");

hideIcon.addEventListener("click", () => {
  if (window.screen.width < 760) {
    navLinks.style.display = "none";
  }
});

// Если уменьшить размер экрана до <760px, то сразу будет включено меню.
// Так же, если выключить меню, а потом увеличить экран >760px, то меню не появится. Для этого и нужен этот костыль

window.addEventListener("resize", () => {
  if (window.screen.width > 760 && navLinks.style.display === "none") {
    navLinks.style.display = "inline-block";
  }

  if (window.screen.width < 760 && navLinks.style.display === "inline-block") {
    navLinks.style.display = "none";
  }
});
