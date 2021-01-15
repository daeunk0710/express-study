/*
2021.01.16
44. Node.js 모듈의 형식
 */

var M = {
  v:'v',
  f:function(){
    console.log(this.v);
  }
}

module.exports = M;
