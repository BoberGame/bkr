import Swiper, { Pagination, Keyboard, A11y } from 'swiper';

function sliderInit() {
  const swiperTestimonials = new Swiper('.swiper-testimonials', {
    modules: [Keyboard, Pagination, A11y],
    observer: true,
    observerParents: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          enabled: false,
        }
      },
      446: {
        slidesPerView: 1.5,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 2.4,
        slidesPerGroup: 2,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 4,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
    },
  });
}

export default sliderInit;
