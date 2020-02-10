'use strict';

(function () {
  var currentBreakpoint = '';
  var swiperComments;

  var desktopSwiperConfig = {
    loop: true,
    freeMode: true,
    slidesPerView: 3,
    spaceBetween: 36,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.comments__arrow--next',
      prevEl: '.comments__arrow--prev',
    },
  };

  var tabletSwiperConfig = {
    loop: true,
    freeMode: true,
    slidesPerView: 2,
    spaceBetween: 25,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.comments__arrow--next',
      prevEl: '.comments__arrow--prev',
    },
  };

  var mobileSwiperConfig = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    freeMode: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    navigation: {
      nextEl: '.comments__arrow--next',
      prevEl: '.comments__arrow--prev',
    },
  };

  function initSwiper() {
    if (window.matchMedia('(max-width: 767px)').matches && currentBreakpoint !== 'mobile') {
      currentBreakpoint = 'mobile';

      if (swiperComments) {
        swiperComments.destroy();
      }

      swiperComments = new Swiper('.swiper-container', mobileSwiperConfig);
      swiperComments.init();
    }

    if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches && currentBreakpoint !== 'tablet') {
      currentBreakpoint = 'tablet';

      if (swiperComments) {
        swiperComments.destroy();
      }

      swiperComments = new Swiper('.swiper-container', tabletSwiperConfig);
      swiperComments.init();
    }

    if (window.matchMedia('(min-width: 1024px)').matches && currentBreakpoint !== 'desktop') {
      currentBreakpoint = 'desktop';

      if (swiperComments) {
        swiperComments.destroy();
      }

      swiperComments = new Swiper('.swiper-container', desktopSwiperConfig);
      swiperComments.init();
    }
  }

  initSwiper();

  window.addEventListener('resize', initSwiper);
})();
