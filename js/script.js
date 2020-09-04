$(document).ready(function(){
   // ===> Logo page reload <===
   $(".logo").click(function (event) {
      event.preventDefault();
      // reload page by click to Logo
      window.location.reload();
   });
   // ===X Logo page reload X===


   // ===> Burger menu <===
   $(".burger").click(function (event) {
      event.preventDefault();
      $(this).toggleClass("burger--active");
      $("body").toggleClass("body-lock");
      $(".menu").toggleClass("menu--active");
      $(".header__inner").toggleClass("header__inner--active");
   });
   // ===X Burger menu X===


   var mySwiper1 = new Swiper('.locations-slider', {
      // Optional parameters
      loop: true,
      slidesPerView: 5,
      spaceBetween: 60,
      autoplay: true,
      keyboard: {
         enabled: true,
      },
      breakpoints : {
         0: {
            slidesPerView: 1,
         },
         576: {
            slidesPerView: 2,
         },
         768: {
            slidesPerView: 3,
         },
         992: {
            slidesPerView: 4,
         },
         1180: {
            slidesPerView: 5,
         },
      }
   })

   $('.review-slider').slick({
      dots: true,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1180,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
            }
         },
      ]
   });

   // ===> Smooth scrolling <===
   function smoothScroll() {
      const navBarLink = $("a, button");
      const navHeight = $('.header__inner').outerHeight();

      navBarLink.click((event) => {
         const target = event.target;
         if (target.hasAttribute("data-scrollto")) {
            const data = target.dataset.scrollto;
            event.preventDefault();

            const elementOffset = $(data).offset().top;
            window.scroll(0, elementOffset - navHeight);
         }
      });
   }
   smoothScroll();
   // ===X Smooth scrolling X===


   // ===> sticky nav-bar + hover links <===
   function stickyNavBar() {
      const navBar = $(".header__outer");
      const navOffsetTop = navBar.offset().top;
      const nextElement = navBar.next();

      const navHeight = navBar.outerHeight();
      // remove two last character in offset 133px => 133
      const nextElementPadding = Number(nextElement.css("paddingTop").slice(0, -2));

      const fullOffset = navHeight + nextElementPadding;

      const navBarLinks = document.querySelectorAll(".menu-link");

      navBar.addClass("fixedToTop");
      nextElement.css("paddingTop", fullOffset);

      // $(window).scroll(function () {
      //    const windowTop = $(window).scrollTop();

      //    if (windowTop > navOffsetTop) {
      //       navBar.addClass("fixedToTop");
      //       nextElement.css("paddingTop", fullOffset)
      //    } else {
      //       navBar.removeClass("fixedToTop");
      //       nextElement.css("paddingTop", "");
      //    }
      // });

      function navLinkHover() {
         const navBarLinks = document.querySelectorAll(".menu__link");
         $(window).scroll(function () {
            const windowTop = $(window).scrollTop();
            // === active nav-menu link by scrolling ===
            for (let index = 0; index < navBarLinks.length; ++index) {
               const data = navBarLinks[index].dataset.scrollto;
               const elementOffset = $(data).offset().top;
               const elementHeight = $(data).outerHeight();

               if (windowTop + navHeight + 1 > elementOffset && elementOffset + elementHeight - navHeight - 1 > windowTop) {
                  // color when active is #cee7ba
                  $(navBarLinks[index]).css("color", "#000");
               } else {
                  $(navBarLinks[index]).css("color", "");
               }
            }
            // === /active nav-menu link by scrolling ===
         });

      }
      // navLinkHover();
   }
   stickyNavBar();
   // ===X sticky nav-bar + hover links X===
});