/*
  This script controls the "scroll for more" prompt and handles sticking the
  top nav bar to the top of the screen on scroll.
*/
// When the user scrolls the page, execute affixTopNav
window.onscroll = function() {affixTopNav()};

// Get the navbar
var topNav = document.getElementById("nav_wrapper");

// Get the offset position of the navbar
var sticky = topNav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function affixTopNav() {
  if (window.pageYOffset >= sticky) {
    topNav.classList.add("sticky")
  } else {
    topNav.classList.remove("sticky");
  }
}

/*
  This script handles displaying the gallery submenu and changing the 'aria' values
  for screen readers to indicate whether the submenu is visible or not
*/
var gallery = document.getElementById('gallery_item');
var submenu = document.getElementById('sub_menu');

gallery.addEventListener('click', display_submenu);

function display_submenu() {
  (gallery.getAttribute('aria-expanded')=='false')?(gallery.setAttribute('aria-expanded', 'true')):(gallery.setAttribute('aria-expanded', 'false'));

  submenu.classList.toggle('sub_menu_visibility');
  submenu.classList.toggle('sub_menu_flex');
}
