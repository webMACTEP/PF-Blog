
jQuery(document).ready(function ($) {

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

   // Бургер-меню

   $('.burger').click(function () {

      $('.burger').toggleClass('active');
      $('.list').toggleClass('active');
      $('.nav').toggleClass('active');
      $('.msgrs').toggleClass('active');


      return false;
   });

   // Вход
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




});

