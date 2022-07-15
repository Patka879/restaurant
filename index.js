"use strict"

// import Swiper from "swiper"
// import 'swiper/css'

// const swiper = new Swiper


document.querySelector(".dropdown-menu-btn").addEventListener("click", function() {
    let nav = document.querySelector(".nav-top")
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
    console.log("clidked")
  }
)

    
