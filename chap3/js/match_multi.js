// マルチモードオフ
var p = /^[0-9]{1,}/g;
var str = '101匹ワンちゃん。\n7人の小人';
var result = str.match(p);
console.log(result) // ['101']
for (var i = 0, len = result.length; i < len; i++){
	console.log(result[i]);
}
// 101

// マルチモードオン
var p = /^[0-9]{1,}/gm;
var str = '101匹ワンちゃん。\n7人の小人';
var result = str.match(p);
console.log(result) // ['101']
for (var i = 0, len = result.length; i < len; i++){
	console.log(result[i]);
}
// 101
// 7

// 正規表現では「^」は行の先頭
// 正規表現では「$」は行の末尾