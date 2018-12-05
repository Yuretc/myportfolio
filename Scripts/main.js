(function($) {
  $('.js-nav-menu-toggle').on('click', function() {
    $(this).parents('.navigation-menu').toggleClass('navigation-menu--closed');
    $('.navigation-menu__toggle').toggleClass('navigation-menu__toggle--open')
  });

})(jQuery);

// mainNavMenuBurger.addEventListener("click", function () {
//   $(".js-nav-menu").toggleClass("burgerOpen");

// });