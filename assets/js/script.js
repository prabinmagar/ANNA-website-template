$(document).ready(function(){
    // header slider
    $('.header-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
    });

    // $('.navbar-close-btn')
    $(".navbar-open-btn").on('click', function(){
      $('.navbar-main').addClass('navbar-main-show');
    });

    $('.navbar-close-btn').on('click', function(){
      $('.navbar-main').removeClass('navbar-main-show');
    });

    let resizeTimer;
    $(window).on('resize', function(){
      $(document.body).addClass('resize-animation-stopper');
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        $(document.body).removeClass('resize-animation-stopper');
      }, 400);
    })

    // dropdown menu
    const dropdownList = $('.nav-dropdown');

    jQuery.each(dropdownList, function(index, dropdownItem){
      $(dropdownItem).on('click', function(){
        $(dropdownItem).find('.nav-dropdown-menu').toggleClass('nav-dropdown-menu-show');

        if($(dropdownItem).find('.nav-dropdown-menu').hasClass('nav-dropdown-menu-show')){
          $(dropdownItem).find('.fa-chevron-down').addClass('fa-chevron-up');
          $(dropdownItem).find('.fa-chevron-down').removeClass('fa-chevron-down');
        } else {
          $(dropdownItem).find('.fa-chevron-up').addClass('fa-chevron-down');
          $(dropdownItem).find('.fa-chevron-up').removeClass('fa-chevron-up');
        }
      });
    });

    // slick slider
    $('.blogs-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '16.5px',
      responsive: [
        {
          breakpoint: 1320,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
})