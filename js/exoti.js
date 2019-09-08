  //====================== Hide NavBar ======================//
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  $(document).ready(function () {

    'use strict';

    var c, currentScrollTop = 0,
      navbar = $('#nav');

    $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();

      currentScrollTop = a;

      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
    });

  });
  //====================== Back to Top Button ======================//
  // When the user scrolls down from the top of the document, show the button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });