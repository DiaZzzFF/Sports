'use strict';

(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    freeMode: true,
    slidesPerView: 3,
    spaceBetween: 36,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.comments__arrow--next',
      prevEl: '.comments__arrow--prev',
    },
  });

})();
