function navigationSlider() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".navbar-links");
  const navLinks = document.querySelectorAll(".navbar-links li");
  // const navButton = document.querySelector(".nav-button");
  const body = document.querySelector("body");

  hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("navbar-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `fadingNavLinks 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    // if (navButton.style.animation) {
    //   navButton.style.animation = "";
    // } else {
    //   navButton.style.animation = `fadingNavLinks 0.5s ease forwards ${
    //     5 / 7 + 0.5
    //   }s`;
    // }

    hamburgerMenu.classList.toggle("toggle");
  });
}
navigationSlider();
