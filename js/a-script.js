jQuery(document).ready(function ($) {


   var modal = document.getElementById('trailerdivbox');

   // Get the button that opens the modal
   var btn = document.getElementById("watchbutton");

   function playVideo() {
      var video = document.getElementById('videos');

      if (location.toString().indexOf('spanish') !== -1) {
         var src = 'https://www.youtube.com/embed/oaQfWxqA9rc';
      } else {
         var src = 'https://www.youtube.com/embed/kx3Lxaf0qyM';
      }



      video.src = src + '?autoplay=1&mute=1&enablejsapi=1';
   }

   function resetVideo() {
      var video = document.getElementById('videos');
      if (location.toString().indexOf('spanish') !== -1) {
         var src = video.src.replace('https://www.youtube.com/embed/oaQfWxqA9rc?autoplay=1&mute=1&enablejsapi=1', '');
      } else {
         var src = video.src.replace('https://www.youtube.com/embed/kx3Lxaf0qyM?autoplay=1&mute=1&enablejsapi=1', '');
      }


      video.src = '';
      video.src = src;
   }

   // When the user clicks the button, open the modal 
   btn.onclick = function () {
      modal.style.display = "block";
      $('body').addClass('lock');
      playVideo();
   }

   var trailerbox = document.getElementById("close");

   trailerbox.onclick = function () {
      modal.style.display = "none";
      $('body').removeClass('lock');
      resetVideo();
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
         $('body').removeClass('lock');
         resetVideo();
      }
   }





   function initRedirect() {

      $('.js-redirect__submit').on('click', function (e) {
         e.preventDefault();
         if ($('.js-redirect__input').val().replace(/^\s+|\s+$/g, '').length != 0) {
            makeRedirect();
         }
      });

      $(document).on('keypress', function (e) {
         if (e.which == 13 && $('body').hasClass('is-modal-active') && $('.js-redirect__input').val().replace(/^\s+|\s+$/g, '').length != 0) {
            makeRedirect();
         }
      });

      $('.js-redirect-form').on('submit', function () {
         if ($('.js-redirect__input').val().replace(/^\s+|\s+$/g, '').length != 0) {
            makeRedirect();
         }
      });
   }


   function makeRedirect() {
      var storeName = $('.js-redirect__input').val().replace(/\s/g, '');
      console.log('storeName', storeName);
      if (storeName === '') {
         location.href = "https://404.posiflora.com/admin/login";
      } else {
         location.href = "https://" + storeName + ".posiflora.com/admin/login";
      }
   }

   initRedirect();

   ///////////////////////////////////////////////////////

   $('.enter').click(function (event) {
      $('.modal-enter').addClass('active');
      $('body').addClass('lock');
   });
   $('.modal-enter-close').click(function (event) {
      $('.modal-enter').removeClass('active');

      $('body').removeClass('lock');
   });

   $('.modal-enter').click(function (e) {
      if ($(e.target).closest('.modal-body').length == 0) {
         $('.modal-enter').removeClass('active');

         $('body').removeClass('lock');
      }
   });

   //////////////////////////////////////////////////////////

   $('.fix-button-call').click(function (event) {
      $('.a-callback').addClass('active');
      $('body').addClass('lock');
   });
   $('.a-callback-close').click(function (event) {
      $('.a-callback').removeClass('active');

      $('body').removeClass('lock');
   });

   $('.a-callback').click(function (e) {
      if ($(e.target).closest('.a-callback-body').length == 0) {
         $('.a-callback').removeClass('active');

         $('body').removeClass('lock');
      }
   });
   //////////////////////////////////////////////////////////////

   $('.fix-button-chat').click(function (event) {
      $('.a-chat').addClass('active');
      $('body').addClass('lock');
   });
   $('.a-chat-close').click(function (event) {
      $('.a-chat').removeClass('active');

      $('body').removeClass('lock');
   });

   $('.a-chat').click(function (e) {
      if ($(e.target).closest('.a-chat-body').length == 0) {
         $('.a-chat').removeClass('active');

         $('body').removeClass('lock');
      }
   });


   //////////////////////////////////////////////////////////

   $('.burger').click(function () {

      $('.burger').toggleClass('active');
      $('.list').toggleClass('active');
      $('.nav').toggleClass('active');
      $('.msgrs').toggleClass('active');


      return false;
   });

   //////////////////////////////////////////// intro slider


   const slides = document.querySelectorAll('.slide');
   slides[0].classList.add('active');

   const prevButton = document.querySelector('.slider-control-prev');
   const nextButton = document.querySelector('.slider-control-next');

   function nextSlide() {
      const currentSlide = document.querySelector('.slide.active');
      const currentIndex = Array.from(slides).indexOf(currentSlide);
      const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      const nextSlide = slides[nextIndex];

      gsap.timeline()
         .to(currentSlide, { opacity: 0 })
         .to(nextSlide, { opacity: 1 }, '-=0.5')

      currentSlide.classList.remove('active');
      nextSlide.classList.add('active');

      if (nextIndex === 0) {
         animateSlide1();
      }
      if (nextIndex === 1) {
         animateSlide2();
      }
      if (nextIndex === 2) {
         animateSlide3();
      }
   }

   function prevSlide() {
      const currentSlide = document.querySelector('.slide.active');
      const currentIndex = Array.from(slides).indexOf(currentSlide);
      const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      const prevSlide = slides[prevIndex];

      gsap.timeline()
         .to(currentSlide, { opacity: 0 })
         .to(prevSlide, { opacity: 1 }, '-=0.5')

      currentSlide.classList.remove('active');
      prevSlide.classList.add('active');

      if (prevIndex === 0) {
         animateSlide1();
      }
      if (prevIndex === 1) {
         animateSlide2();
      }
      if (prevIndex === 2) {
         animateSlide3();
      }
   }


   nextButton.addEventListener('click', nextSlide);
   prevButton.addEventListener('click', prevSlide);

   setInterval(nextSlide, 6000);

   function animateSlide1() {
      const slideContent = document.querySelector('.slide-1 .slide-content');
      const slideTitle = slideContent.querySelector('h2');
      const slideParagraph = slideContent.querySelector('p');
      const slideCard1 = slideContent.querySelector('.card-1');
      const slideCard2 = slideContent.querySelector('.card-2');
      const slideCard3 = slideContent.querySelector('.card-3');
      const slidePag1 = document.querySelector('.circ-01');
      const slidePag2 = document.querySelector('.circ-02');
      const slidePag3 = document.querySelector('.circ-03');

      gsap.timeline({ delay: 0.5 })
         .from(slideTitle, { opacity: 0, x: -50 })
         .from(slideParagraph, { opacity: 0, y: 50 }, '-=0.2')
         .from(slideCard1, { opacity: 0, y: 50 }, '-=0.2')
         .from(slideCard2, { opacity: 0, y: 50 }, '-=0.3')
         .to(slidePag1, { x: 0, duration: 1, ease: 'power2.inOut' }, '-=1')
         .to(slidePag2, { x: 0, duration: 1, ease: 'power2.inOut' }, '-=1')
         .to(slidePag3, { x: 0, duration: 1, ease: 'power2.inOut' }, '-=1')
         .from(slideCard3, { opacity: 0, y: 50 }, '-=0.4');
   }

   function animateSlide2() {
      const slideContent = document.querySelector('.slide-2 .slide-content');
      const slideTitle = slideContent.querySelector('h2');
      const slideParagraph = slideContent.querySelector('p');
      const slideCard4 = slideContent.querySelector('.card-4');
      const slideCard5 = slideContent.querySelector('.card-5');
      const slideCard6 = slideContent.querySelector('.card-6');
      const slidePag1 = document.querySelector('.circ-01');
      const slidePag2 = document.querySelector('.circ-02');
      const slidePag3 = document.querySelector('.circ-03');

      gsap.timeline({ delay: 0.5 })
         .from(slideTitle, { opacity: 0, x: -50 })
         .from(slideParagraph, { opacity: 0, y: 50 }, '-=0.2')
         .from(slideCard4, { opacity: 0, y: 50 }, '-=0.2')
         .from(slideCard5, { opacity: 0, y: 50 }, '-=0.3')
         .to(slidePag1, { x: 20, duration: 1, ease: 'power2.inOut' }, '-=1')
         .to(slidePag2, { x: -20, duration: 1, ease: 'power2.inOut' }, '-=1')
         .to(slidePag3, { x: 0, duration: 1, ease: 'power2.inOut' }, '-=1')
         .from(slideCard6, { opacity: 0, y: 50 }, '-=0.4');
   }

   let slideChatTimeline;

   function animateSlide3() {
      const slideContent = document.querySelector('.slide-3 .slide-content');
      const slideTitle = slideContent.querySelector('h2');
      const slideParagraph = slideContent.querySelector('p');
      const slideChat = slideContent.querySelector('.chat');
      const slideChatWind = slideContent.querySelector('.mess-win');
      const slidePag1 = document.querySelector('.circ-01');
      const slidePag2 = document.querySelector('.circ-02');
      const slidePag3 = document.querySelector('.circ-03');

      gsap.timeline({ delay: 0.5 })
         .from(slideTitle, { opacity: 0, x: -50 })
         .from(slideChatWind, { opacity: 0, y: 100 })
         .to(slidePag1, { x: 40, duration: 1, ease: 'power2.inOut' }, '-=1')
         .to(slidePag2, { x: -20, duration: 1, ease: 'power3.inOut' }, '-=1')
         .to(slidePag3, { x: -20, duration: 1, ease: 'power3.inOut' }, '-=1')
         .from(slideParagraph, { opacity: 0, y: 50 }, '-=0.2');

      // останавливаем предыдущую анимацию, если есть
      if (slideChatTimeline) {
         slideChatTimeline.kill();
      }


      slideChatTimeline = gsap.timeline({ delay: 2, repeat: -1, repeatDelay: 3 })
         .fromTo(slideChat, {
            y: '0%',
         }, {
            y: '-80%',
            duration: 35,
            ease: 'none', // тип плавности анимации
         })
         .to({}, { duration: 2 })
         .to(slideChat, {
            y: '0%',
            duration: 4,
            ease: 'Elastic.easeInOut',
         });

   }


   animateSlide1();




   ///////////////////////////////////////////////////////// block green




   // Получаем блок, в котором находится анимация
   const block1 = document.querySelector('.animation2');

   // Создаем Timeline для анимации
   const tl1 = gsap.timeline({ delay: 0.5, paused: true });
   const tl2 = gsap.timeline({ delay: 1, paused: true });
   tl1.from('.in01', { duration: 0.5, opacity: 0, y: 100 });
   tl2.from('.in02', { duration: 0.5, opacity: 0, y: 100 });
   // .to('.scrll', { duration: 0.5, y: '+=0' });

   // Функция для проверки, виден ли блок на экране
   function isBlockVisible() {
      const rect = block1.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
   }

   let animationEnabled = true;

   // Функция для проигрывания анимации, если блок виден на экране
   function playAnimation() {
      if (isBlockVisible() && animationEnabled) {
         tl1.play();
         tl2.play();
      }
   }

   // Проигрываем анимацию при загрузке страницы, если блок сразу виден на экране
   //playAnimation();

   // Добавляем обработчик события прокрутки экрана
   window.addEventListener('scroll', playAnimation);




   // Получаем кнопку для управления анимацией
   const button1 = document.querySelector('.button-01');
   const button2 = document.querySelector('.button-02');
   const button3 = document.querySelector('.button-03');
   const button4 = document.querySelector('.button-04');

   // Создаем вторую Timeline для другой анимации
   const tl3 = gsap.timeline({ paused: true });
   tl3.from('.in03', { opacity: 0, y: 100 });
   //.to('.scrll', { delay: 0, duration: 0.5, y: '+=200', ease: 'power2.out' });

   const tl4 = gsap.timeline({ paused: true });
   tl4.from('.in04', { opacity: 0, y: 100 });
   //.to('.scrll', { delay: 0, duration: 0.5, y: '+=390', ease: 'power2.out' });

   const tl5 = gsap.timeline({ paused: true });
   tl5.from('.in05', { opacity: 0, y: 100 });
   //.to('.scrll', { delay: 0, duration: 0.5, y: '+=580', ease: 'power2.out' });

   const tlbutt = gsap.timeline({ paused: true });
   tlbutt.to('.buttn', { duration: 0.5, y: -270 });


   // Функция для обработки нажатия на кнопку
   function handleButtonClick1() {
      // Останавливаем текущую анимацию
      tl3.pause().progress(0);
      tl4.pause().progress(0);

      // Запускаем новую анимацию
      tl1.play();
      tl2.play();
      tlscrl1.play();
   }
   function handleButtonClick2() {
      // Останавливаем текущую анимацию
      tl1.pause().progress(0);
      tl2.pause().progress(0);
      tl4.pause().progress(0);
      tl5.pause().progress(0);
      // Запускаем новую анимацию
      tl3.play();
      tlbutt.reverse();
      tlscrl2.play();
      gsap.to('.element', { duration: 1, x: '+=100' });


   }
   function handleButtonClick3() {
      // Останавливаем текущую анимацию
      tl1.pause().progress(0);
      tl2.pause().progress(0);
      tl3.pause().progress(0);
      tl5.pause().progress(0);
      // Запускаем новую анимацию
      tl4.play();
      tlbutt.play();
      tlscrl3.play();

   }

   function handleButtonClick3() {

      // Проверяем разрешение экрана
      if (window.innerWidth >= 1200) {
         // Останавливаем текущую анимацию
         tl1.pause().progress(0);
         tl2.pause().progress(0);
         tl3.pause().progress(0);
         tl5.pause().progress(0);
         // Запускаем новую анимацию
         tl4.play();
         tlbutt.play();
         tlscrl3.play();

      } else {
         // Останавливаем текущую анимацию
         tl1.pause().progress(0);
         tl2.pause().progress(0);
         tl3.pause().progress(0);
         tl5.pause().progress(0);
         // Запускаем новую анимацию
         tl4.play();
         //tlbutt.play();
         tlscrl3.play();

      }
   }
   function handleButtonClick4() {
      // Останавливаем текущую анимацию
      tl1.pause().progress(0);
      tl2.pause().progress(0);
      tl3.pause().progress(0);
      tl4.pause().progress(0);
      // Запускаем новую анимацию
      tl5.play();
      tlscrl4.play();

   }

   // Добавляем обработчик события клика на кнопку
   button1.addEventListener('click', handleButtonClick1);
   button2.addEventListener('click', handleButtonClick2);
   button3.addEventListener('click', handleButtonClick3);
   button4.addEventListener('click', handleButtonClick4);

   $('.buttn').click(function () {
      if ($(this).hasClass('active') == false) {
         $('.buttn').removeClass('active');
         animationEnabled = false;
         $(this).addClass('active');
      } else {
         $(this).removeClass('active');

      }

      return false;
   });

   ////////////////////////////////////////////////////// 

   $('.question-js').click(function () {
      if ($(this).hasClass('active') == false) {
         $('.question-js').removeClass('active');
         $('.answer-js').removeClass('active');
         $(this).addClass('active').next().addClass('active');
      } else {
         $(this).removeClass('active');
         $('.answer-js').removeClass('active');
      }

      return false;
   });

   ////////////////////////////////////////

   $('.q-item').click(function () {

      $(this).toggleClass('chosen');


      return false;
   });





   const inputElement = document.querySelector('.js-webinar-id');
   const buttonElements = document.querySelectorAll('.quiz-question');

   buttonElements.forEach(function (buttonElement) {
      buttonElement.addEventListener('click', function () {
         const buttonValue = buttonElement.getAttribute('data-value');
         const currentValue = inputElement.value;
         const values = currentValue ? currentValue.split(', ') : [];
         const index = values.indexOf(buttonValue);
         if (index === -1) {
            values.push(buttonValue);
         } else {
            values.splice(index, 1);
         }
         const newValue = values.join(', ');
         inputElement.value = newValue;
      });
   });


   ////////////////////////////////////

   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            // Запускаем анимацию при появлении блока на экране
            gsap.to('.chat-dir', { delay: 3, duration: 1, y: -460, ease: 'power2.out' });
         }
      });
   });

   // Наблюдаем за блоком и добавляем его в список элементов для наблюдения
   const block = document.querySelector('.anim');
   observer.observe(block);




   /////////////////////////////////////// block blue




   // Получаем блок, в котором находится анимация
   const ccblock1 = document.querySelector('.cc-animation2');

   // Создаем Timeline для анимации
   const cctl1 = gsap.timeline({ delay: 0.5, paused: true });
   const cctl2 = gsap.timeline({ delay: 1, paused: true });
   cctl1.from('.ccin01', { duration: 0.5, opacity: 0, y: 100 });
   cctl2.from('.ccin02', { duration: 0.5, opacity: 0, y: 100 });
   //.to('.ccscrll', { delay: 0, duration: 1, y: '+=0' });

   // Функция для проверки, виден ли блок на экране
   function ccisBlockVisible() {
      const ccrect = ccblock1.getBoundingClientRect();
      return ccrect.top < window.innerHeight && ccrect.bottom >= 0;
   }

   let ccanimationEnabled = true;

   // Функция для проигрывания анимации, если блок виден на экране
   function ccplayAnimation2() {
      if (ccisBlockVisible() && ccanimationEnabled) {
         cctl1.play();
         cctl2.play();
      }
   }

   // Проигрываем анимацию при загрузке страницы, если блок сразу виден на экране
   //playAnimation();

   // Добавляем обработчик события прокрутки экрана
   window.addEventListener('scroll', ccplayAnimation2);




   // Получаем кнопку для управления анимацией
   const ccbutton1 = document.querySelector('.cc-button-01');
   const ccbutton2 = document.querySelector('.cc-button-02');
   const ccbutton3 = document.querySelector('.cc-button-03');
   const ccbutton4 = document.querySelector('.cc-button-04');

   // Создаем вторую Timeline для другой анимации
   const cctl3 = gsap.timeline({ paused: true });
   cctl3.from('.ccin03', { duration: 0.5, opacity: 0, y: 100 });
   //.to('.ccscrll', { delay: 0, duration: 0.5, y: '+=200', ease: 'power2.out' });

   const cctl4 = gsap.timeline({ paused: true });
   cctl4.from('.ccin04', { duration: 0.5, opacity: 0, y: 100 });
   // .to('.ccscrll', { delay: 0, duration: 0.5, y: '+=390', ease: 'power2.out' });

   const cctl5 = gsap.timeline({ paused: true });
   cctl5.from('.ccin05', { duration: 0.5, opacity: 0, y: 100 });
   //.to('.ccscrll', { delay: 0, duration: 0.5, y: '+=580', ease: 'power2.out' });

   const cctlbutt = gsap.timeline({ paused: true });
   cctlbutt.to('.buttn2', { duration: 0.5, y: -270 });


   // Функция для обработки нажатия на кнопку
   function cchandleButtonClick1() {
      // Останавливаем текущую анимацию
      cctl3.pause().progress(0);
      cctl4.pause().progress(0);

      // Запускаем новую анимацию
      cctl1.play();
      cctl2.play();
      cctlscrl1.play();
   }
   function cchandleButtonClick2() {
      // Останавливаем текущую анимацию
      cctl1.pause().progress(0);
      cctl2.pause().progress(0);
      cctl4.pause().progress(0);
      cctl5.pause().progress(0);
      // Запускаем новую анимацию
      cctl3.play();
      cctlbutt.reverse();
      cctlscrl2.play();

   }
   // function cchandleButtonClick3() {
   //    // Останавливаем текущую анимацию
   //    cctl1.pause().progress(0);
   //    cctl2.pause().progress(0);
   //    cctl3.pause().progress(0);
   //    cctl5.pause().progress(0);
   //    // Запускаем новую анимацию
   //    cctl4.play();
   //    cctlbutt.play();
   //    tlscrl3.play();

   // }
   function cchandleButtonClick3() {


      // Проверяем разрешение экрана
      if (window.innerWidth >= 1200) {
         cctl1.pause().progress(0);
         cctl2.pause().progress(0);
         cctl3.pause().progress(0);
         cctl5.pause().progress(0);
         // Запускаем новую анимацию
         cctl4.play();
         cctlbutt.play();
         tlscrl3.play();
      } else {
         cctl1.pause().progress(0);
         cctl2.pause().progress(0);
         cctl3.pause().progress(0);
         cctl5.pause().progress(0);
         // Запускаем новую анимацию
         cctl4.play();
         //cctlbutt.play();
         tlscrl3.play();

      }
   }
   function cchandleButtonClick4() {
      // Останавливаем текущую анимацию
      cctl1.pause().progress(0);
      cctl2.pause().progress(0);
      cctl3.pause().progress(0);
      cctl4.pause().progress(0);
      // Запускаем новую анимацию
      cctl5.play();
      tlscrl4.play();

   }

   // Добавляем обработчик события клика на кнопку
   ccbutton1.addEventListener('click', cchandleButtonClick1);
   ccbutton2.addEventListener('click', cchandleButtonClick2);
   ccbutton3.addEventListener('click', cchandleButtonClick3);
   ccbutton4.addEventListener('click', cchandleButtonClick4);


   $('.buttn2').click(function () {
      if ($(this).hasClass('active') == false) {
         $('.buttn2').removeClass('active');
         ccanimationEnabled = false;
         $(this).addClass('active');
      } else {
         $(this).removeClass('active');

      }

      return false;
   });





   ////////////////////////////////////////////////////////////////////


   // выбираем блок a-info и элементы a-left
   const info = document.querySelector('.a-info');
   const items = document.querySelectorAll('.a-left');

   // функция для проверки, виден ли блок на экране
   function isElementVisible(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top <= windowHeight && rect.bottom >= 0;
      return isVisible;
   }

   // создаем переменные для анимации
   let tl, i;

   // функция для анимации появления элементов
   function showItem(item) {
      tl.to(item, {
         opacity: 1,
         x: 0,
         duration: 0.5,
         ease: 'power2.out',
         delay: 1 // добавляем задержку на 1 секунду
      }, '-=0.4');
   }

   // функция для проигрывания анимации, если блок виден на экране
   function playAnimation5() {
      if (isElementVisible(info)) {
         tl = gsap.timeline({ defaults: { opacity: 0, x: -50 } });
         for (i = 0; i < items.length; i++) {
            showItem(items[i]);
         }
         // удаляем обработчик события после запуска анимации
         window.removeEventListener('scroll', playAnimation5);
      }
   }

   // добавляем обработчик события на прокрутку страницы
   window.addEventListener('scroll', playAnimation5);


});


