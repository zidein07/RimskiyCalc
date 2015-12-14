var button = document.getElementById('button');
var result = document.getElementById('result');
var dataFirst = document.getElementById('dataFirst');
var dataSecond = document.getElementById('dataSecond');
var dataFirstArrCount = [];
var dataSecondArrCount = [];
var FirstCount = 0;
var SecondCount = 0;
var count = 0;

button.addEventListener('click', function () {
  result.style.display = 'block';
  if (dataFirst.value !== '' && dataSecond.value !== '') {
    var symbol = $('.selectpicker :selected').val();
    countPlus(dataFirst.value);
    countPlus(dataSecond.value, true);
    FirstCount = arrDataGet(dataFirstArrCount);
    SecondCount = arrDataGet(dataSecondArrCount);
    if (symbol === '+') {
      count = FirstCount + SecondCount;
      result.innerHTML = 'Результат сложения: ';
    } else if (symbol === '-') {
      count = FirstCount - SecondCount;
      result.innerHTML = 'Результат вычитания: ';
    } else if (symbol === '*') {
      count = FirstCount * SecondCount;
      result.innerHTML = 'Результат умножения: ';
    } else {
      count = FirstCount / SecondCount;
      result.innerHTML = 'Результат деления: ';
    }
    if (count && count > 0) {
      result.innerHTML += getRimskData(count);
    } else {
      result.innerHTML = 'Неверные данные!';
    }
    sumWillBeNole();
  } else {
    result.innerHTML = 'Оба поля должны быть заполнены!'
  }
});

function countPlus(val, second) {
  var result = 0;
  for (i = 0; i <= val.length; i++) {
    switch (val[i]) {
      case 'I':
        result = 1;
        break;
      case 'V':
        result = 5;
        break;
      case 'X':
        result = 10;
        break;
      case 'L':
        result = 50;
        break;
      case 'C':
        result = 100;
        break;
      case 'D':
        result = 500;
        break;
      case 'M':
        result = 1000;
        break;
    }
    if (second) {
      dataSecondArrCount.push(result);
    } else {
      dataFirstArrCount.push(result);
    }
  }
}
function sumWillBeNole() {
  FirstCount = 0;
  SecondCount = 0;
  count = 0;
  dataFirstArrCount = [];
  dataSecondArrCount = [];
}

function arrDataGet(arr) {
  var countFunc = 0;
  arr.pop();
  console.log('arr', arr);
  arr.forEach(function (item, i, ar) {
    if (ar[i + 1]) {
      if (ar[i] < ar[i + 1]) {
        countFunc += -ar[i];
      } else {
        countFunc += ar[i];
      }
    } else {
      countFunc += ar[i];
    }
  });
  console.log('countFunc', countFunc);
  return countFunc;
}
function getRimskData(count) {
  var RimskData = '';
  while (count - 1000000 >= 0) {
    RimskData += "m";
    count -= 1000000;
  }
  while (count - 900000 >= 0) {
    RimskData += "cm";
    count -= 900000;
  }
  while (count - 500000 >= 0) {
    RimskData += "d";
    count -= 500000;
  }
  while (count - 400000 >= 0) {
    RimskData += "cd";
    count -= 400000;
  }
  while (count - 100000 >= 0) {
    RimskData += "c";
    count -= 100000;
  }
  while (count - 90000 >= 0) {
    RimskData += "xc";
    count -= 90000;
  }
  while (count - 50000 >= 0) {
    RimskData += "l";
    count -= 50000;
  }
  while (count - 40000 >= 0) {
    RimskData += "xl";
    count -= 40000;
  }
  while (count - 10000 >= 0) {
    RimskData += "x";
    count -= 10000;
  }
  while (count - 9000 >= 0) {
    RimskData += "Mx";
    count -= 9000;
  }
  while (count - 5000 >= 0) {
    RimskData += "v";
    count -= 5000;
  }
  while (count - 4000 >= 0) {
    RimskData += "Mv";
    count -= 4000;
  }
  while (count - 1000 >= 0) {
    RimskData += "M";
    count -= 1000;
  }
  while (count - 900 >= 0) {
    RimskData += "CM";
    count -= 900;
  }
  while (count - 500 >= 0) {
    RimskData += "D";
    count -= 500;
  }
  while (count - 400 >= 0) {
    RimskData += "CD";
    count -= 400;
  }
  while (count - 100 >= 0) {
    RimskData += "C";
    count -= 100;
  }
  while (count - 90 >= 0) {
    RimskData += "XC";
    count -= 90;
  }
  while (count - 50 >= 0) {
    RimskData += "L";
    count -= 50;
  }
  while (count - 40 >= 0) {
    RimskData += "XL";
    count -= 40;
  }
  while (count - 10 >= 0) {
    RimskData += "X";
    count -= 10;
  }
  while (count - 9 >= 0) {
    RimskData += "IX";
    count -= 9;
  }
  while (count - 5 >= 0) {
    RimskData += "V";
    count -= 5;
  }
  while (count - 4 >= 0) {
    RimskData += "IV";
    count -= 4;
  }
  while (count - 1 >= 0) {
    RimskData += "I";
    count -= 1;
  }
  return (RimskData);
}