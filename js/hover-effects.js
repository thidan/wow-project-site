const navBar = document.querySelector(".nav-bar");
const logoBlizzard = document.querySelector(".logo-blizzard-container");
const setaSvg = document.querySelector(".seta-svg")


function showNav() {
  navBar.style.opacity = 1;
  navBar.style.pointerEvents = "auto";
  navBar.style.scale = '1';
  setaSvg.style.rotate = "180deg";
}


function hideNav() {
  navBar.style.opacity = 0;
  navBar.style.pointerEvents = "none";
  navBar.style.scale = '0.8';
  setaSvg.style.rotate = "0deg";
}


logoBlizzard.addEventListener("mouseenter", showNav);
navBar.addEventListener("mouseenter", showNav);

function mouseLeave(object) {
    object.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!navBar.matches(":hover") && !logoBlizzard.matches(":hover")) {
      hideNav();
    }
  }, 100);
});
}

mouseLeave(logoBlizzard);
mouseLeave(navBar);