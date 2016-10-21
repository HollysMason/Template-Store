$(document).ready(function () {
  $("button.toggle-menu").click(function(){
    $("nav.main-menu").toggleClass("display-menu");
    $("span.bar,span.close").toggle();
  });

  $(window).resize(function() {
    var widthHeader = $("header").width();
      if  (widthHeader > 480) {
        $("nav.main-menu").removeClass("display-menu");
        $('.bar').css('display','block');
        $('.close').css('display','none');

      }
  });

  $('input.button-search').click(function() {
    $('input.search').animate({width: '120px'});
    $(this).addClass('searchOpend');
  });
});
