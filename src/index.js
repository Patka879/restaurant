"use strict"

const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
          el: ".swiper-pagination",
  }
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

    
