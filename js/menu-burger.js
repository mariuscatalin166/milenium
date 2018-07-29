var nav = document.getElementsByClassName("navheader")[0];
var menu = document.getElementsByClassName("menu")[0];
document.getElementsByClassName("burger")[0].addEventListener("click", function(){
  this.classList.toggle("active");
  // HEADER BLACK
  nav.classList.toggle("black-background");
  // MENU ANIMATION
  if (menu.classList.contains("menu_active")) {
    setTimeout(function() {
      menu.classList.toggle("menu_active");
    }, 400);
    menu.classList.toggle("menu-trans");
  } else {
    setTimeout(function() {
      menu.classList.toggle("menu-trans");
    }, 50); 
    menu.classList.toggle("menu_active");
  }
});
window.onload = function() {
  nav.classList.add("fadeNav");
}