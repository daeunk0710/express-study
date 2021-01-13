/*
2021.01.13
18. NodeJS - 콘솔에서의 입력값
 */

var args = process.argv;
console.log(args[2]);

if(args[2] === '1'){
  console.log('C1');
} else {
  console.log('C2');
}

console.log('D');
