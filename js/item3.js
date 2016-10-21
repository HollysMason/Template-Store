require(['functions','menu'],function() {
  $(document).ready(function() {
    updateData();
    var item2pictures = ["bohemianFirstExampl.jpg","bohemianSecondExampl.jpg","bohemianThirdExampl.jpg"];
    var pathItem2 = "img/item3/";
    var orderObj = {size: null,
                    color: null,
                    name: null,
                    price: null,
                    count: 0,
                    mob:'img/shoppingbag/thirdShoppingBag.png',
                    tablet: 'img/tablet_Shopping_bag/thirdShoppingBagTablet.png',
                    descktop:'img/desctop_shopping_bag/thirdDescktopShoppingbag.png'
                  };

    showPic(0,item2pictures,pathItem2, '.col-mob:nth-child(1)');

    $("div.col-mob").click(function(event) {
      var index = $(event.currentTarget).index();
      showPic(index,item2pictures,pathItem2,event.currentTarget);
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
