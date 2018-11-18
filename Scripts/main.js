(function($) {
  $('.js-nav-menu-toggle').on('click', function() {
    $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
    $('.navigation-menu__toggle').toggleClass('navigation-menu__toggle--open')
  });
  
  
  // $('html').on('click', function(e) {
  //   if(!$(e.target).closest('.js-nav-menu').length &&
  //     ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
  //       $('.js-nav-menu').removeClass('navigation-menu--open');
  //   }
  // });
})(jQuery);

// mainNavMenuBurger.addEventListener("click", function () {
//   $(".js-nav-menu").toggleClass("burgerOpen");

// });