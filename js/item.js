require(['functions','menu'],function() {

$(document).ready(function(){
  updateData();
  var pictures = ["full.png","thumb1.png","thumb2.png"];
  var path = "img/item_descktop/";
  var orderObj = {size: null,
                  color: null,
                  name: null,
                  price: null,
                  count: 0,
                  mob:'img/shoppingbag/firstShoppingbag.png',
                  tablet: 'img/tablet_Shopping_bag/firstShoppingBagTablet.png',
                  descktop:'img/desctop_shopping_bag/firstDescktopShoppingbag.png'
                  };

showPic(0,pictures,path, '.col-mob:nth-child(1)');

  $("div.col-mob").click(function(event) {
    var index = $(event.currentTarget).index();
    showPic(index,pictures,path,event.currentTarget);
  });

  $('div.sizes input').click(function () {
    orderObj.size = choseSize();

  });



  $('div.colors input').click(function () {
    orderObj.color =  choseColor();
  });

  $('.add-to-bag').click(function() {
    addToBag(orderObj);
  });
});

});
