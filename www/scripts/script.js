// const { active } = require("browser-sync");

$(document).ready(function () {

$('.header-burger').on('click', function (){
  $('.menu').slideToggle();
})

$('.js-tab-link').on('click', function (event) {
  event.preventDefault ();

  $('.js-tab-link').removeClass('active');
  $(this).addClass('active');

  let index = $(this).index('.js-tab-link');

  $('.js-contacts-info').removeClass('visible');
  $('.js-contacts-info').eq(index).addClass('visible');



  // FAQ
  let=prevFaqBtn

 $('.js-faq-btn').on('click', function(){
  if(this == prevFaqBtn){
    $(this).next().slideToggle();

  } else {
    $(prevFaqBtn).next().slideUp();
    $(this).next().slideDown();
    prevFaqBtn = this;

  }

 })



});














});
