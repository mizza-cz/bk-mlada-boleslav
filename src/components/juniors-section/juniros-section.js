$('.tabs-wrapper .tab').on('click', function (event) {
   var id = $(this).attr('data-id');
   $('.tabs-wrapper').find('.tab-content').removeClass('tab-active').hide();
   $('.tabs-wrapper .tabs').find('.tab').removeClass('active');
   $(this).addClass('active');
   $('#' + id)
     .addClass('tab-active')
     .fadeIn();
   return false;
 })