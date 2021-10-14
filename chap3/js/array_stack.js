// スタックなので、後入れ先出し(LIFO)
var data = [];
data.push(1);
data.push(2);
data.push(3);
console.log(data); // [1, 2, 3]

console.log(data.pop()); // 3
console.log(data.pop()); // 2
console.log(data.pop()); // 1
console.log(data); // []