import * as webpFunction from './modules/webp.js';
import sliderInit from './modules/slider.js';
import startScore from './modules/starRating.js';
import burger from './modules/burger.js';
import initTabs from './modules/tabs.js';
import videoModule from './modules/video.js';
import DynamicAdapt from './modules/dynamicAdapt.js';
import scrollTo from './modules/scrollTo.js';
import AOS from 'aos';

/* Webp checking */
webpFunction.isWebp();

/* Init Swiper Js */
sliderInit();

/* Init Dynamic Adapt */
const dynamicFunc = new DynamicAdapt('max');
dynamicFunc.init();

/* Init rating stars */
startScore(5, '.testimonials__rating');

/* Init scroll function */
scrollTo(769, 2);

/* Init burger function */
burger('.nav__menu');

/* Init tabs function */
initTabs(false);

/* Init video function */
videoModule();

/* Init aos */
AOS.init({
  disable: false,
  offset: 200,
  duration: 500,
  once: true,
});
