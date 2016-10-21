(function loadStoreage() {
  var arrOrders = JSON.parse(localStorage.getItem('arrOrders'));
    if (arrOrders == null) {
      localStorage.setItem('arrOrders','[]');
      return;
    }
})();


function showPic(n, pictures, path, action) {
  $('.shown-picture').attr('src',path + pictures[n]);
  $('.effect').removeClass('caption')
  $(action).find('.effect').addClass('caption');
}

function choseSize() {
  return $('input.input-size:checked').val();
}

function choseColor() {
  // return
  var color = $('input.input-colors:checked').val();
  return color;
}

function addToBag(item) {
  var reg,
      withoutSpace,
      oldTotal,
      oldcount,
      newTotal,
      newCount;

  reg = /\d+\.\d+/g;
  withoutSpace = /\s+/g;
  oldTotal = $('.current-count-price').text();

  oldcount = Number($('.count-items').text()[1]);
  item.name = $('.name-item').text(); //add item name
  item.price = Number($('.price').text().replace(withoutSpace, '').match(reg)); //add item price

  // console.log(item.size, item.color);

  for (key in item) {
    if(item[key] == null) {
        $('p.alert').text('Вы не выбрали цвет или размер');
        
        $('.mod').css('display','block');
      return;
    };
  }

  var arrItem = JSON.parse(localStorage.getItem('arrOrders'));
  arrItem.push(item);
  arrItem = JSON.stringify(arrItem);
  localStorage.setItem('arrOrders',arrItem);

    updateData();

  }

function updateData() {
  var totalPrice,
      count,
      arrOrders;

  arrOrders =  JSON.parse(localStorage.getItem('arrOrders'));
  count = arrOrders.length;

  if (count == 0) {
    $('.count-items').text('');
    $('.current-count-price').text('');
    return;
  }

  totalPrice = 0;
  for (key in arrOrders) {
    totalPrice += arrOrders[key].price;
  }
  if (count == 0) {
    count = '';
    return;
  }
  $('.count-items').text('('+count+')');
  $('.current-count-price').text(correctDigit(totalPrice.toFixed(2)));

}


function correctDigit(str) {
  str = String(str);
  var result,
      firstHalf,
      secondHalf,
      lastThree;

  str = str.split('.');
  firstHalf =  str[0];
  secondHalf = str[1];
  result = '';
  lastThree = firstHalf.slice(-3);
  for (var i = 0; i < firstHalf.length-3;  i++) {
   result += firstHalf[i];
  }

  return '£' + result+' '+lastThree + '.' +secondHalf;
}
