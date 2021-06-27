
$(document).ready(function() {

  'use strict';

  //Trigger nice Scroll Plugin
  $('html').niceScroll({
    cursorcolor: '#ffa5a5' , 
    cursorwidth: 10 , 
    cursorborderradius: 0 ,
    cursorborder: '1px solid #ffa5a5'
  });

  // Adjust the Header Height
  $('.header').height($(window).height());

  // Scroll To Features 
  $(".header .arrow i").click(function() {

    $("html , body").animate({

      scrollTop: $('.features').offset().top

    } , 1000);

  });


  // Scroll To Hire
  $('.hire').click(function() {
    $("html , body").animate({

      scrollTop: $('.our-team').offset().top

    }, 1000);
  })

  // Show Hidden Items From Work
  $('.show-more').click(function () {
    $('.our-work .hidden').fadeToggle(2000);
  });

  // Check Testimonials

  var leftArrow = $('.testimonials .fa-chevron-left'),

    rightArrow = $('.testimonials .fa-chevron-right');

  function checkClients() {

    $('.client:first').hasClass('active') ? leftArrow.fadeOut(500) : leftArrow.fadeIn();

    $('.client:last').hasClass('active') ? rightArrow.fadeOut(500) : rightArrow.fadeIn(); 

  }

  checkClients();

  $('.testimonials i').click(function() {

    if ($(this).hasClass('fa-chevron-right')) {

      $('.testimonials .active').fadeOut(100 , function() {

        $(this).removeClass('active').next('.client').addClass('active').fadeIn();

        checkClients();

      });

    } else {

      $('.testimonials .active').fadeOut(100, function () {

        $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

        checkClients();

      });

    }

  });

});

