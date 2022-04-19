var now = new Date();
var data = new Date(2022,3,12, 19, 39,00);

console.log(now);
console.log(data);

dif = now -data 
console.log(dif);

console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.toLocaleDateString());