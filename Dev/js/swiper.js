// // Select elements in the page
// const slideNumber = document.querySelector(".swiper-slide-num");
// const slides = document.querySelectorAll(".swiper-slide");
// const headings = document.querySelectorAll(".heading");

// // Store the speed of the animations
// const speed_anim = 800;

// // Define Swiper instance
// const swiper = new Swiper(".swiper", {
//     direction: "vertical",
//     loop: true,
//     speed: speed_anim,
//     mousewheel: true,
//     keyboard: {
//         enable: true
//     },

//     pagination: {
//         el: ".swiper-pagination-custom",
//         bulletClass: "swiper-bullet-custom",
//         bulletActiveClass: "is-active",
//         bulletElement: "button",
//         clickable: true
//     }
// });

// //  event that fires when swipe.activeIndex changes
// swiper.on("activeIndexChange", () => {
//     let realIndex = swiper.realIndex;

//     slideNumber.textContent = swiper.realIndex+1;

// });