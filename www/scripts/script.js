$(document).ready(function () {


  $('.header-burger').on('click', function () {
    $('.menu').slideToggle();
  });

  $('.js-tab-link').on('click', function (event) {

    event.preventDefault();

    $('.js-tab-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tab-link');

    $('.js-contacts-info').removeClass('visible');
    $('.js-contacts-info').eq(index).addClass('visible');

  });


  // FAQ
  let prevAccordionBtn;

  $('.js-accordion-btn').on('click', function () {
    if (this == prevAccordionBtn) {
      $(this).next().slideToggle();
    } else {
      $(prevAccordionBtn).next().slideUp();
      $(this).next().slideDown();
      prevAccordionBtn = this;
    }

  });


    // каталог фильтрация

    ('.js-filter-link').on('click', function (event) {
      event.preventDefault();

      $('.js-filter-link').removeClass('active');
      $(this).addClass('active');

      let dataFilter = $(this).data('filter');

      if (dataFilter == 'all') {
        $('.js-catalog-item').show();
        return;
      }

      $('.js-catalog-item').each(function () {
        let dataType = $(this).data('type');

        if (dataType == dataFilter) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });

    });












});
