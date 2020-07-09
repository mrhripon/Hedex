(function ($) {
    "use strict";

    // Script for OffCanvas Menu Activation
    $(document).ready(function () {
        $('.toggle-bar').on('click', function () {
            $('.off-canvas-menu-wrap, .off-canvas-overlay').addClass('active');
        })

        $('.cls-off-canvas-menu').on('click', function () {
            $('.off-canvas-menu-wrap, .off-canvas-overlay').removeClass('active');
        })
    })


    $(document).ready(function(){
        $('.categoreis-trigger').on('click', function(){
            $(this).toggleClass('show');
            $('#mobile-categori-dropdown').slideToggle();
        })
    })

    $(document).ready(function(){
        $('.search-trigger').on('click', function(){
            $('#mobile-search-box').slideDown();
            $('.off-canvas-overlay').addClass('active');
        })

        $('.off-canvas-overlay').on('click', function(){
            $('#mobile-search-box').slideUp();
            $('.off-canvas-overlay').removeClass('active');
        })
    })


    $('.banner-slider-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav-active',
        vertical:true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    vertical:false,
                    dots:true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
      });
      $('.slider-nav-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.banner-slider-active',
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        vertical:true
      });





      // Script for Nice Number
      function counter(bubbleWrap) {
        if(document.querySelectorAll(bubbleWrap) !== null) {
            document.querySelectorAll(bubbleWrap).forEach(function(each){
                each.addEventListener('click', function(e){
                    let newValue;
                    if(e.target.className.includes('plus-btn')) {
                        newValue = parseInt(e.target.previousElementSibling.innerHTML);
                        e.target.previousElementSibling.innerHTML = newValue + 1;
                    } else if(e.target.className.includes('minus-btn')) {
                        newValue = parseInt(e.target.nextElementSibling.innerHTML);
                        if(newValue > 0) {
                            e.target.nextElementSibling.innerHTML = newValue - 1;
                        }
                    }
                })
            })
        }
    }
    counter('.p-counter');


    $('.desk-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="./assets/img/jesture-left.svg" alt="logo"></button>',
        nextArrow: '<button class="next"><img src="./assets/img/jesture-right.svg" alt="logo"></button>',
        fade: true,
        asNavFor: '.desk-nav'
      });
      $('.desk-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.desk-active',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        prevArrow: '.left-jesture',
        nextArrow: '.right-jesture',
        prevArrow: '<button class="prev"><img src="./assets/img/jesture-left.svg" alt="logo"></button>',
        nextArrow: '<button class="next"><img src="./assets/img/jesture-right.svg" alt="logo"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
      });



      $('.tab-link-box').on('click', function(){
          $('.all-tb-links').slideToggle();
      })

      
      





    // Script for Nice Select Activation 
    $(document).ready(function () {
        $('select').niceSelect();
    })


    // Script for Magnific Popup Activation 
    $(document).ready(function () {
        $('.iframe-link').magnificPopup({ type: 'iframe' });
    });



    // Script For Scroll to top Button
    $(document).ready(function () {
        var back = $('.back-to-top');
        back.on('click', function () {
            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        })
        $(window).on('scroll', function () {
            var self = $(this),
                height = self.height(),
                top = self.scrollTop();
            if (top > height) {
                back.addClass('visible');
            } else {
                back.removeClass('visible');
            }
        })

    })




    Util.cModal('#m-open','#c-modal-one', '.cls-modal')



  
})(jQuery);	 // End line