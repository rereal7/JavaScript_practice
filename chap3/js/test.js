// マッチングの成否を検証する(test)
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = 'サポートサイトはhttp://www.wings.msn.to/です。';
var str2 = 'サボーとサイト「サーバサイド技術の学び舎」をよろしく';
console.log(p.test(str1)); // true
console.log(p.test(str2)); // false

// 指定された正規表現で最初にマッチした文字位置を返す(search)
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = 'サポートサイトはhttp://www.wings.msn.to/です。';
var str2 = 'サボーとサイト「サーバサイド技術の学び舎」をよろしく';
console.log(str1.search(p)); // 8
console.log(str2.search(p)); // -1(一致しなかった場合)

// 正規表現で文字列を置き換える(replace)
var p = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi; // 正規表現を()で囲うことで、特殊変数($1...$9)に格納可
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
document.write(str.replace(p, '<a href="$1">$1</a>')); // サポートサイトはhttp://www.wings.msn.to/です。