// 異なる2このNaNはお互いに等しいものとみなされ、後からの追加は無視されています。
let s = new Set();
s.add(NaN);
s.add(NaN);
console.log(s.size); // 1

// {}はお互いに違うものとみなされる
s.add({});
s.add({});
console.log(s.size); // 3