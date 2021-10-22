// オプションgが有効にも関わらず、execメソッドは一度の実行で1つの実行結果しか返さない。
// matchメソッドのデフォルトと同じ挙動で、マッチした文字列全体とサブマッチ文字列を配列として返す。
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- . \/?&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトはHTTP://www.web-deli.comです。';
var result = p.exec(str);
for (var i = 0, len = str.length; i < len; i++){
	console.log(result[i]);
}
// http://www.wings.msn.to/
// undefined
// msn
// /

// 一致する文字列をすべて返してほしい場合
var q = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- . \/?&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトはHTTP://www.web-deli.comです。';
while((result = q.exec(str)) !== null){
	console.log(result[0]);
}
// http://www.wings.msn.to/
// HTTP://www.web-deli.com