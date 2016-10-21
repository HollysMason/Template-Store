require(['functions','menu'],function() {
  $(document).ready(function() {
    updateData();
    var item2pictures = ["sisterJumperFirstEx.jpg","sisterJumperSecondEx.jpg","sisterJumperThirdEx.jpg"];
    var pathItem2 = "img/item2/";
    var orderObj = {size: null,
                    color: null,
                    name: null,
                    price: null,
                    count: 0,
                    mob:'img/shoppingbag/secondShoppingbag.png',
                    tablet: 'img/tablet_Shopping_bag/secondShoppingBagTablet.png',
                    descktop:'img/desctop_shopping_bag/secondtDescktopShoppingbag.png'
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
  })
});
