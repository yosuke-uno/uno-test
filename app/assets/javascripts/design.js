$(function(){
  $('#period_theme').fadeIn(1500);

  $('.tool-hover').hover(
    function() {
      $(this).find('.tool_description').addClass('text-active');
    },
    function() {
      $(this).find('.tool_description').removeClass('text-active');
    }
  );
});
