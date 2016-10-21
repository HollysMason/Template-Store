require(['functions','menu'],function() {
  $(document).ready(function () {

    updateData();
    loadItems();
    statusBag();

  $("span.remove-item").click(function (event) {
    var name = $(event.currentTarget).siblings('h5').text();
    var size = $(event.currentTarget).siblings('ul').find('li.size').text().split(':')[1].trim();
    var color = $(event.currentTarget).siblings('ul').find('li.color').text().split(':')[1].trim();
    var currentPrice = Number($(event.currentTarget).siblings('ul').find('li.quantity').text().split(':')[1]);
    var arr = JSON.parse(localStorage.getItem('arrOrders'));

    arr.splice(firstOccurrence(arr, name, size, color),1);

    var countItems = 0;



    for (var i = 0 ; i < arr.length; i++) {
      if (arr[i].name == name && arr[i].size == size && arr[i].color == color) {
        countItems++;
      }
    }
    console.log(countItems);

    $(event.currentTarget).siblings('ul').find('li:last-child').text('Quantity:'+ countItems);

      if (countItems == 0) {
        $(event.currentTarget).parent().parent().parent().remove();
      }

    localStorage.setItem('arrOrders',JSON.stringify(arr));
      updateData();
      statusBag();

  });


  $('.emoty-bag').click(function() {
    clearBag();
  });

  $('.buy-now').click(function() {
    thanksForParches();
  });

});


function firstOccurrence(arr, search, size, color) {
  for (var i = 0; i < arr.length; i++) {
     if  (arr[i].name == search && arr[i].size == size && arr[i].color == color) {

         return i;
     }

 }
}

function statusBag() {
  var arrItems = $('[class*="col-"]');
  if (arrItems.length == 0) {
    $('.status-bag').css('display','block');
  }
}


function clearBag() {
  $('.massege').append('<button class="cancel">Cancel</button>');
  $('.massege').css('display','block');
  $('button.cancel').click(function() {
    $('.massege').css('display','none');
  });
  $('button.ok').click(function() {
      cleanStorage();
      $('.status-bag').css('display','block');
      $('.thanks-for-parches').css('display','none');
  });

}

function thanksForParches() {
  var itemsOnThePage = $('[class*="col-"]');
  if (itemsOnThePage.length != 0) {
    cleanStorage();
    $('.status-bag').css('display','none');
    $('.thanks-for-parches').css('display','block');
  }

}

function cleanStorage() {
  var arrOrders = JSON.parse(localStorage.getItem('arrOrders'));
  var arrItemsOnPage = $('[class*="col-"]');
  localStorage.setItem('arrOrders',JSON.stringify(arrOrders.splice()));
  for (var i = 0 ; i < arrItemsOnPage.length; i++) {
    $(arrItemsOnPage[i]).remove();
  }
  updateData();
  loadItems();
}




function loadItems() {
  var arrOrdersWithoutRepeat = withoutRepeat(JSON.parse(localStorage.getItem('arrOrders')));
  var arrOrders = JSON.parse(localStorage.getItem('arrOrders'));
  var items = counter(arrOrdersWithoutRepeat, arrOrders);
  for (var i = 0 ; i < items.length; i++) {
    $('.catalog-content').append(
      '<div class="col-1-1 col-1-2">'+
        '<figure>'+
          '<div class="pic">'+
            '<picture>'+
              '<source srcset=" '+ items[i].mob +' " type="image/png" media="(max-width:480px)">'+
              '<source srcset=" '+ items[i].tablet +' " type="image/png" media="(max-width:1024px)">'+
              '<source srcset=" '+ items[i].descktop +' " type="image/png">'+
              '<img src=" '+ items[i].descktop + '" alt=""/>'+
            '</picture>'+
            '<span class="price">&pound'+items[i].price+'</span>'+
          '</div>'+
          '<figcaption>'+
            '<h5>'+items[i].name+'</h5>'+
            '<ul class="characterictics">'+
              '<li class="color">Color:'+items[i].color+'</li>'+
              '<li class="size">Size:'+items[i].size+'</li>'+
              '<li class="quantity">Quantity:'+items[i].count+'</li>'+
            '</ul>'+
            '<span class="remove-item">Remove item</span>'+
          '</figcaption>'+
        '</figure>'+
      '</div>'
    );
  }
}

function withoutRepeat(arr) {
  var result = [];

  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; // для каждого элемента
      for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
        if (result[j].name == str.name && result[j].size == str.size && result[j].color == str.color) continue nextInput; // если да, то следующий
      }
      result.push(str);
    }

  return result;
}

function counter(nonRep, yesRep) {
  var resultArr = [];
  for (var i = 0 ; i < nonRep.length; i++) {
  var temp = 0;
	for (var j = 0; j < yesRep.length; j++) {
          if (nonRep[i].name == yesRep[j].name && nonRep[i].size == yesRep[j].size && nonRep[i].color == yesRep[j].color) {
            temp++;
    		nonRep[i].count = temp;
          	resultArr.push(nonRep[i]);
          }
  		}
    }
  return withoutRepeat(resultArr)
}
});
