(function () {
   ("use strict");

   // -------------Загрузка шрифтов через скрипт------------
   // include('modules/_fonts.js')
   // ------------------------------------------------------

   // --------------------------------Загузка класса Аккардион----------------------------
   @@include('modules/_accordion.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса Валидации форм----------------------
   // @@include('modules/_formValidation.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса Событий "касаний"----------------------
   // include('modules/_eventTouch.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса "Общего класса"----------------------
   @@include('modules/__noda.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса "Модальных окон"----------------------
   @@include('modules/_modal.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса "Галереи"----------------------
   @@include('modules/_gallery.js')
   // ------------------------------------------------------------------------------------

   
   // -----------Модальное окно-----------------------------
   const m = new ModalDK({
      selector: ".nav-main",
      openBtnsSelector: ['[data-name="navigation"]'],
      focusTrap: true, // Требуется ли перемещаться табом только внутри объекта (default: false)
      collapseOnFocusOut: false, // Требуется ли закрывать при потери фокуса
      activeClass: "--active",
      matchMedia: "(max-width: 520px)",
   });
   // ------------------------------------------------------

   // -----------Галерея------------------------------------
   g = new GalleryDK({
   selector: ".featured__gallery", // селектор контейнера, который объединяет все изображения
   focusTrap: true,
   collapseOnFocusOut: false,
});

   // ------------------------------------------------------

   // ---------Слайдер----------------
   const slider = new A11YSlider(document.querySelector(".slider"), {
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      dots: true,
      responsive: {
         768: {
            arrows: true,
            dots: false
         }
      }
   });
// ---------------------------------

// -------Аккордион в футере------------------
const accServices = new AccordionBtn(".accordion", true);
// --------------------------------------------

// -------Набор цифр-------------------
const digitAnimate = () => {
   const digits = document.querySelectorAll(".solutions__digits");
   digits.forEach(digit => {
      digit.innerText = digit.dataset.text ? "0" + digit.dataset.text : "0";

      const target = +digit.dataset.target;
      const increment = target / 20;
      const updateCounter = () => {
         let current = parseInt(digit.innerText);
         if (current < target) {
            current += increment;
            current = Math.round(current);
            digit.innerText = digit.dataset.text ? current + digit.dataset.text : current;
            setTimeout(() => {
               updateCounter()
            }, 50);
         }
      };

      updateCounter();  
   });
};

digitAnimate();

// --------------

// ------------Анимация----------
AOS.init({
});

document.addEventListener('aos:in', ({ detail }) => {
  if (detail.classList.contains('solutions')) digitAnimate();
});

// -----------------------------
  

})();
