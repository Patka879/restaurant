"use strict"

const discountSwiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const appSwiper = new Swiper('.app-swiper', {
  loop: true,
  simulateTouch: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,

  },

  slidesPerView: 3,
  spaceBetween: 5,

  breakpoints: {
    1300: {
      slidesPerView: 5,
      autoplay: false,
    }
  }

})
  
document.querySelector(".dropdown-menu-btn").addEventListener("click", function(event) {
  event.preventDefault()
  let nav = document.querySelector(".nav-top")
  if (nav.classList.contains("nav-top-visible")) {
    nav.classList.remove("nav-top-visible")
  } else {
    nav.classList.add("nav-top-visible")
  }
})

    
