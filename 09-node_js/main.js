import Swiper from "swiper";
import "swiper/swiper.css";
// const swiper = new Swiper("엘리먼트 이름, {옵션 은 객체 형태로로 입력되는. key : value}");
const swiper = new Swiper("엘리먼트 이름", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

import hello from "./module.js";
hello();
