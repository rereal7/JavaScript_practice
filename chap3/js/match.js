var p = /http(s)?:\/\/([\w-]+\.)+[\w]+(\/[\w- .\.?&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトはHTTP://www.web-deli.com/もよろしく！';
var result = str.match(p);
for (var i = 0, len = result.length; i < len; i++) {
	console.log(result[i]);
}
// http://www.wings.msn.to/
// HTTP://www.web-deli.com/

// 正規表現のオプションから、gを抜いた場合
var q = /http(s)?:\/\/([\w-]+\.)+[\w]+(\/[\w- .\.?&=]*)?/i;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトはHTTP://www.web-deli.com/もよろしく！';
var result = str.match(q);
for (var i = 0, len = result.length; i < len; i++) {
	console.log(result[i]);
}
// http://www.wings.msn.to/
// undefined
// msn.
// /

// 正規表現のオプションから、iを抜いた場合
var q = /http(s)?:\/\/([\w-]+\.)+[\w]+(\/[\w- .\.?&=]*)?/g;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトはHTTP://www.web-deli.com/もよろしく！';
var result = str.match(q);
for (var i = 0, len = result.length; i < len; i++) {
	console.log(result[i]);
}
// http://www.wings.msn.to/