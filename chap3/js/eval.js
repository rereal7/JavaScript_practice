// このような仕様は厳禁（セキュリティ問題、パフォーマンス問題がある）
var str = 'console.log("eval関数")';
eval(str); // eval関数

// 一般的な用途
var obj = {hoge:1, foo:2};
var prop = 'hoge';
eval('console.log(obj.'+ prop + ')') // 1

// シンプルなブラケット構文でのコード
console.log(obj[prop]); // 1

// JSONを使用した場合（JSON文字列→JS）
var data = JSON.parse('{"hoge":1, "foo":2}');
console.log(data.hoge); // 1

// JavaScriptの配列/オブジェクトをJSON文字列に変換
var obj = {hoge:1, foo:2};
console.log(JSON.stringify(obj)); // {"hoge":1,"foo":2}