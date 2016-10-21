require(['functions','menu'],function() {
  updateData();
  $(document).ready(function() {
    var slides = $('.slide');

    $(".nav-slide").click(function(event) {

        var indexSlide = $(event.currentTarget).index();
        console.log(indexSlide);
        $('.slide').removeClass('active');
        $(slides[indexSlide]).addClass('active');
        $(".nav-slide").removeClass('nowShown');

        $(event.currentTarget).addClass('nowShown');
        $('.slides').animate({right: indexSlide * 100 + '%'},2000);
    });
  });
});





























function showSlid(numberSlide) {
  var arrSlides = $("a.slide");

  $(arrSlides[numberSlide]).css("display","block").animate({
    "left": "0"
  },1000);
}




// // showSlid(0)
// console.log();
// //
// // size();
// //
// function size() {
//   var a = $("a.slide").width();
//   $("a.slide").css("height",String(a));
//
//
// }
//
// $("span.item-slide").click(function(event) {
//
//
//
//   var arrSlides = $("a.slide");
//   var indexDot = $(event.currentTarget).index();
//
//   $("a.slide").removeClass("active").addClass("nonActive");
//   $(arrSlides[indexDot]).addClass("active").removeClass("nonActive");
//   $(".nonActive").hide();
//   $(".active").show()
//
//
//
// });





// $(arrSlides[numberSlide]).css("display","block");
