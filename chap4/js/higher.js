// 高階関数arrayWalkを定義
function arrayWalk(data, f){
	for(var key in data){
		f(data[key], key);
	}
}

// 配列を処理するためのユーザー関数定義
function showElement(value, key){
	console.log(key + ':' + value);
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);

// 匿名関数（関数リテラル）を使用した例
arrayWalk(
	ary,
	function(value,key){
		console.log(key + ':' + value);
	}
);

// 0:1
// 1:2
// 2:4
// 3:8
// 4:16

// 結果値を格納するためのグローバル変数
var result = 0;
function sumElement(value, key){
	// 与えられた配列要素で変数resultを加算
	result += value;
}

arrayWalk(ary,sumElement);
console.log('合計値：' + result); // 合計値：31

