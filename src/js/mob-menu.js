(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const bodyRef = document.querySelector("[data-body]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    bodyRef.classList.toggle('no-scroll');

    mobileMenuRef.classList.toggle("is-open");
  });
})();

jQuery(document).ready(function($) {
    $('nav').on('click', function() {
      $('nav').removeClass('is-open');
      $('.menu-button').removeClass('is-open');
      $('body').removeClass('no-scroll');
    })
});

/*------------STICKY HEADER------------*/

window.onscroll = function() {myFunction()};

var header = document.getElementById("top");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
