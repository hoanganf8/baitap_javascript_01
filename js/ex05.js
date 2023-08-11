var a = 30;
var b = 20;
var c = 5;

if (a > b) {
  var tmp = a;
  a = b;
  b = tmp;
}

if (a > c) {
  var tmp = a;
  a = c;
  c = tmp;
}

if (b > c) {
  var tmp = b;
  b = c;
  c = tmp;
}

console.log(a, b, c);
