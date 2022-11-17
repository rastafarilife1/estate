const swiper = new Swiper('.slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   slidesPerView: 1.933,
   spaceBetween: 20,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 20,
         autoHeight: true,
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 1.2,
         spaceBetween: 20,
      },
      // when window width is >= 640px
      998: {
         slidesPerView: 1.933,
         spaceBetween: 20,
      }
   },
});

const mainBlockArrow = document.querySelector('.main-block__arrow');
if (mainBlockArrow) {
   const mainBlockHeight = document.querySelector('.main-block').offsetHeight;
   mainBlockArrow.addEventListener('click', () => {
      window.scrollTo({
         top: mainBlockHeight,
         behavior: "smooth"
      });
   });
}



