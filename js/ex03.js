var a = 40;
var b = 30;
var c = 50;

var max = a; //Giả định giá trị lớn nhất là số đầu tiên

if (max < b) {
  max = b;
}

if (max < c) {
  max = c;
}

console.log(`Max`, max);

//Kỹ thuật đặt lính canh
