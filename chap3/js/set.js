// Setオブジェクトでできること（インデックス/キーが存在しない）
// 1.hasメソッドで値の有無を確認すること
// 2.for...ofループ/valueプロパティで中身を列挙すること

// Setオブジェクトに値を追加
let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);
// 同じ値は無視（値は一意）
s.add(5)

// まとめて追加する場合は以下の様にもできる
// let s = new Set([10,5,100,50,5]);

console.log(s.has(100)); // true
console.log(s.size); // 4

// 値を順に取得
for(let val of s.values()){
	console.log(val); // 10, 5, 100, 50
}

// 値を順に取得（上と同じ意味）
for(let val of s){
	console.log(val); // 10, 5, 100, 50
}

// 値100を破棄
s.delete(100);
console.log(s.size); // 3

// 値をすべて破棄
s.clear();
console.log(s.size); // 0