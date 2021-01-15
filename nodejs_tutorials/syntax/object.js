/*
2021.01.16
39. JavaScript - 객체의 형식
40. JavaScript - 객체 (반복)

 */

var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);

var roles = {'programmer':'egoing', 'designer':'k8805', 'manager':'hoya'}

console.log(roles.designer);
console.log(roles['designer']);

for(var name in roles){
  console.log('object => ', name, 'values => ', roles[name]);
}
