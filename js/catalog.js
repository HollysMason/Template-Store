require(['functions','menu'],function() {

$(document).ready(function() {

  updateData();
  var ORIGINAL_OPTIONS = ["Fashion","Product type","Color","Brand","Size","Price range"];

// open filter
  $(".toggle-filter, mob").click(function() {
    $(this).toggleClass("close-filter");
    $(".toggle-filter.tablet").toggleClass("filter-tablet-drop-icon");
    $("ul.option-lists").toggle();
    $('li.name-filter').toggleClass('opened-filter');
  });

// open filter descktop
  $('input.drop').click(function(event) {
    var className = $(event.currentTarget).attr('class').split(' ')[1];
    var arr = $('div.area ul.droped-list');;

    for (var i = 0 ; i < arr.length; i++) {
      if($(arr[i]).attr('class').split(' ')[1] != className) {
        $(arr[i]).css('display','none');
      }
    }

    $('div.area ul.droped-list.'+className).toggle();
  });


//chose filter descktop
  $('ul.droped-list li').click(function(event) {
    var nameClass,
        text,
        ev,
        index;

        ev = event.currentTarget;
        nameClass = $(ev).parent().attr('class').split(' ')[1];
        index = $('li.'+ nameClass).index();//индекс категории
        text = $(ev).text();

        $('span.'+nameClass).text(text);
        $('li.'+nameClass).addClass('selected-paragraph');
        $("input.drop." + nameClass).css("margin-top","18px");
        $('ul.'+nameClass).toggle();
  });
//delete desktop chsen filter
$('span.selected').click(function(event) {
  var  nameClass = $(event.currentTarget).parent().attr('class').split(' ')[1];
  $(event.currentTarget).parent('.name-filter').removeClass('selected-paragraph');
  $("input.drop." + nameClass).css("margin-top","12px");
  $(this).text("");
});

// all funtions for tablet and mobile
// $('li.name-filter').click(function(event) {
//       var name = $(event.currentTarget).attr('class').split(" ")[1];
//       var index = $(event.currentTarget).index();
//       var originalItem = ORIGINAL_OPTIONS[index];
//
//       $($(event.currentTarget)).text(originalItem).css("color","black");
//       $("ul." + name + " li").css('color','#A8A8A8');
//       $("ul." + name + " li.not-selected").remove();
//       $("ul." + name).prepend('<li class="not-selected">Not Selected</li>');
// });
//
// $("ul.droped-list li").click(function(event) {
//       var index = $(event.currentTarget).index();
//       var name = $(event.currentTarget).parent().attr('class').split(" ")[1];
//       var text = $(event.currentTarget).text();
//
//       if ($('li').hasClass(name)) {
//         $('li.'+name).text(text).css('color','red');
//       }
//
//       $(event.currentTarget).siblings('.not-selected').css("display",'none');
//       $("ul.droped-list li").css("fontWeight", 'normal');
//
//
//       var arr = $("ul." + name + " li");
//
//       for (var i = 0 ; i < index; i++) {
//         $("ul." + name).append(arr[i]);
//       }
//       $('ul.droped-list li:nth-child(1)').css('color','red');
//       $(event.currentTarget).parent().parent().scrollLeft(0);
// });





  });
  // $(event.currentTarget).css("color","red");
  // $("ul.droped-list").prepend('<li class="not-selected">Not Selected</li>');

});
