/*
2021.01.15
28. Node js - 동기와 비동기
 */

// function a(){
//   console.log('A');
// }

var a = function(){
  console.log('A');
}

function slowfunc(callback){
  callback();
}

slowfunc(a);
