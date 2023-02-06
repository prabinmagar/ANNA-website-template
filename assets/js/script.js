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

    // REMOVING THE ACTIVE DROPDOWN ON OUTSIDE CLICK

    // scroll on mouse wheel
    const mouseWheel = $('.intro-scroll-content');
    $(mouseWheel).mousewheel(function(event){
      this.scrollLeft -= (event.deltaY * 200);
      event.preventDefault();
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
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    $('.events-slider').slick({
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
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    $('.people-slider').slick({
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
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    $('.preview-thumbnails').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1320,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    // custom image preview single
    const thumbnails = $('.preview-thumbnails .slick-slide');
    jQuery.each(thumbnails, function(index, thumbnailItem){
      $(thumbnailItem).on('click', function(){
        let imgURL = $(thumbnailItem).find('.thumbnail-item img').attr('src');
        $('.preview-main').find('img').attr('src', imgURL);
      });
    });

    // tags list
    const tagsList = $('.tags-list .tags-item .tags-item-icon');
    jQuery.each(tagsList, function(index, tagsItem){
      $(tagsItem).on('click', function(){
        $(tagsItem).parent().remove();
      });
    });

    // lightbox image previewer
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

    $( '#multiple-select-field' ).select2( {
      theme: "bootstrap-5",
      width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
      placeholder: $( this ).data( 'placeholder' ),
      closeOnSelect: false,
    });

    // pesonal update form image upload
    $('#img-upload-btn').on('click', function(){
      $('#img-upload-input').trigger('click');
    });

    $('#img-upload-input').on('change', function(event){
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        $('#img-upload-preview').attr('aria-label', file.name);
        $('#img-upload-preview').attr('src', reader.result);
      }
    });

    // eye toggle in form button
    const toggleBtnOne = $('.form-element-password .eye-icon');
    const passwordElemOne = $('.password-input');

    const togglePasswordVisibility = (toggleBtn, passwordElem) => {
      const type = passwordElem.attr('type') === "password" ? "text" : "password";
      passwordElem.attr('type', type);
      if(type === "text") toggleBtn.html('<i class = "fa-solid fa-eye"></i>');
      else toggleBtn.html('<i class = "fa-solid fa-eye-slash"></i>');
      console.log(type);
    }

    toggleBtnOne.on('click', () => togglePasswordVisibility(toggleBtnOne, passwordElemOne));

    

});