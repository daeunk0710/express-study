/*
2021.01.16
42. JavaScript - 객체 (데이터와 처리 방법을 담는 그릇으로서 객체)

 */

var o = {
  v1: 'v1',
  v2: 'v2',
  f1: function(){
    console.log(this.v1);
  },
  f2: function(){
    console.log(this.v2);
  }
}

o.f1();
o.f2();
