/*
2021.01.13
22. JavaScript - 배열과 반복문
 */

var number = [1, 400, 12, 34, 5, 4000];
var i = 0;
var total = 0;

while (i<number.length) {
  console.log(number[i]);
  total = total +number[i];
  i = i + 1;
}

console.log(`total: ${total}`);
