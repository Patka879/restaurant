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
  },
});

const appSwiper = new Swiper('.app-swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

document.querySelector(".dropdown-menu-btn").addEventListener("click", function(event) {
  event.preventDefault()
    let nav = document.querySelector(".nav-top")
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
    console.log("clidked")
  }
)

    
