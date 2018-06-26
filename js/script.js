jQuery(function($) {
	"use strict";

//Mobile menu
$('.header__btn').click(function() {
  $('.header__nav').slideToggle();
  $(this).toggleClass('header__btn--opened');
})

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});

});