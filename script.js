(function () {
  "use strict";

  function hideSubmenus() {
    const submenus = document.querySelectorAll("ul li ul");

    for (let i = 0; i < submenus.length; i++) {
      submenus[i].classList.add("hide-menu");
    }
  }

  hideSubmenus();

  const menulinks = document.querySelectorAll(".menulink");

  for (let i = 0; i < menulinks.length; i++) {
    menulinks[i].addEventListener("click", function (event) {
      event.preventDefault();

      const thisMenu = this.parentNode.querySelector("ul");

      if (thisMenu.classList.contains("hide-menu")) {
        hideSubmenus();
        thisMenu.classList.remove("hide-menu");
        thisMenu.classList.add("show-menu");
      } else {
        thisMenu.classList.remove("show-menu");
        thisMenu.classList.add("hide-menu");
      }
    });
  }
})();
