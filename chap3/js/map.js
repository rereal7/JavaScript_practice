// Mapオブジェクトのオブジェクトリテラルとの相違点(Mapオブジェクトにのみある機能)

// 1.任意の型でキーを設定できる
// 2.マップのサイズを取得できる
// 3.クリーンなマップを作成できる(オブジェクトリテラル(実態はObjectオブジェクト)は、作成時には厳密には空ではない)

// Mapオブジェクトに値を追加
let m = new Map();
m.set('dog', 'ワンワン');
m.set('cat', 'にゃーにゃー');
m.set('mouse', 'チューチュー');

// 配列内配列を利用して、コンストラクターからまとめて初期化することも可能
// let m = new Map([['dog', 'ワンワン'], ['cat', 'にゃーにゃー'], ['mouse', 'チューチュー']]);

console.log(m.size); // 3
console.log(m.get('dog')); // ワンワン
console.log(m.has('cat')); // true

// キーを順番に取得
for(let key of m.keys()){
	console.log(key); // dog, cat, mouse
}

// 値を順番に取得
for(let value of m.values()){
	console.log(value); // ワンワン, にゃーにゃー, チューチュー
}

// キー/値を順番に取得
for(let [key,value] of m){
	console.log(key+'='+value); //dog=ワンワン, cat=にゃーにゃー, mouse=チューチュー
}

// キー'dog'を削除
m.delete('dog'); //
console.log(m.size); //2

// すべてのキー/値を破棄
m.clear();
console.log(m.size); // 0

