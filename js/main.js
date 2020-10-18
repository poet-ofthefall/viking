$(function(){

  $('.nav__btn').on('click', function () {
    $('.nav__list').toggleClass('nav__list--active')
  });

  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    }
  });

  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow: '<button class="slick-prev slick-btn"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="slick-next slick-btn"><img src="images/arrow-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      }
    ]
  });
  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false
  });

});