// 分割代入パターン2
let data = [56, 40, 26, 82, 19, 17, 99];
let [x0, x1, x2, ...other] = data;

console.log(x0);
console.log(x1);
console.log(x2);
console.log(other);