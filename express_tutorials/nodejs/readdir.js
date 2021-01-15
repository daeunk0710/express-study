/*
2021.01.13
23. Node.js 에서 파일목록 알아내기
 */


var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
});
