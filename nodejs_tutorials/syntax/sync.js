/*
2021.01.15
28. Node js - 동기와 비동기
 */

var fs = require('fs');

// readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');

// readFile
console.log('A');
var result = fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
  console.log(result);
});
console.log('C');
