$(function(){
    $('.banner-section__slider').slick({
         dots: true,
         prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
         nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
         responsive: [
            {
              breakpoint: 1301,
              settings: {
                arrows: false,
                dots: true,
              }
            },
        ]
    })

    $('.tab ').on('click', function(e){
        e.preventDefault(); 

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper ').siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass("tab--active"); 
         
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.poroduct-slider').slick('setPosition');
 
         
    });
    
    $('.product-item__favorite').on('click', function() { 
        $(this  ).toggleClass('product-item__favorite--active')
    });

    $('.poroduct-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="poroduct-slider__slider-btn poroduct-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
         nextArrow: '<button class="poroduct-slider__slider-btn poroduct-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
         responsive: [
            {
              breakpoint: 1301,
              settings: {
                arrows: false,
                dots: true,
              }
            },
            {
                breakpoint: 1301,
                settings:{
                    slidesToShow: 4,
                    arrows: false,
                    dots: true,

                } 
            },
            {
                breakpoint: 1201,
                settings:{
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,

                } 
            },
            {
                breakpoint: 870,
                settings:{
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,

                } 
            },
            {
                breakpoint: 570,
                settings:{
                    slidesToShow: 1,
                    arrows: false,
                    dots: true, 

                } 
            },
        ]
   });
 

   $('.filter-styler').styler();

   $('.filter__item-drop, .filter__extra').on('click', function(){
       $(this).toggleClass('filter__item-drop--active');
       $(this).next().slideToggle('200')
   });

   $(".js-range-slider").ionRangeSlider({
    
   type: "double" ,
   min: 10000,
   max: 1000 
   });

   
   $('.catalog__filter-btngrid').on('click', function(){

    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list')


   });
    
   $('.catalog__filter-btnline').on('click', function(){

    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list')


   });


   $(".rate-yo").rateYo({
    starWidth: "23px",
    ratedFill: "#1C62CD",
    spacing   : "7px",
    normalFill: '#C4C4C4'
    
  });

  $('.menu__btn').on('click', function() {
      $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  })

  $('.footer__top-drop').on('click', function(){
      $(this).next().slideToggle();
      $(this).toggleClass('footer__top--active')
  });
  

  $('.aside__btn').on('click', function(){
    $(this).next().slideToggle();
    });
 
});


