var TIMEOUT = 6000;
 
// var interval = setInterval(handleNext, TIMEOUT);
 
// function handleNext() {

//   // autoScrolling: true;
 
//   var $radios = $('input[class*="slide-radio"]');
//   var $activeRadio = $('input[class*="slide-radio"]:checked');
 
//   var currentIndex = $activeRadio.index();
//   var radiosLength = $radios.length;
 
//   $radios
//     .attr('checked', false);
 
//   if (currentIndex >= radiosLength - 1) {
 
//     $radios
//       .first()
//       .attr('checked', true);
 
//   } else {
 
//     $activeRadio
//       .next('input[class*="slide-radio"]')
//       .attr('checked', true);
 
//   }
 
// }

//scroll with mousewheel
// const scrollContainer = document.querySelector('.slider');

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
// });

////////////////////////

// const slide = {
//   hero: document.querySelector('.slider'),
//   main: document.querySelector('#slides-main'),
//   aux: document.querySelector('#slides-aux'),
//   current: document.querySelector('#slider-nav .current'),
//   handle: null,
//   idle: true,
//   activeIndex: -1,
//   interval: 3500
// };

// const wheelControl = function () {
// 	slide.hero.addEventListener('wheel', e => {
//        if (slide.idle) {
//            const direction = e.deltaY > 0 ? 'next' : 'prev';
//            stopAutoplay();
//            changeSlide(direction);
//        }
//    });
// }

// document.getElementsByClassName("slide-1").addEventListener = function() {};


////////////////////

// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   var $radios = $('input[class*="slide-radio"]');
//   var $activeRadio = $('input[class*="slide-radio"]:checked');

//   var currentIndex = $activeRadio.index();
//   var radiosLength = $radios.length;

//   $radios.attr("checked", false);

//   // if (currentIndex >= radiosLength - 1) {
//   //   $radios.first().attr("checked", true);
//   // } else {
//   //   $activeRadio
//   //     .next('input[class*="slide-radio"]')
//   //     .attr("checked", true);
//   // }

//   if (document.documentElement.scrollTop > 0) {
//     $activeRadio
//       .next('input[class*="slide-radio"]')
//       .attr("checked", true);
//   } else {
//     $activeRadio
//       .previous('input[class*="slide-radio"]')
//       .attr("checked", true);
//     // document.getElementById("myP").className = "";
//   }
// }