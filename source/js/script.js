var burger = document.querySelector(".burger");
var menu = document.querySelector(".left-menu");

burger.addEventListener("click", function () {
  if (menu.classList.contains("left-menu--close")) {
    menu.classList.remove("left-menu--close");
    menu.classList.add("left-menu--active");
  } else {
    menu.classList.remove("left-menu--active");
    menu.classList.add("left-menu--close");
  }
});
