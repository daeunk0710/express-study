/*
2021.01.16
41. JavaScript - 객체 (값으로서 함수)

 */

var f = function (){
  console.log(1+1);
  console.log(1+2);
}

var a =[f];
a[0]();

var o = {
  func:f
}

o.func();
