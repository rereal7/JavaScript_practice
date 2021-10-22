// Numberオブジェクトに移動したメソッドのなかで、共同の異なるもの（isFiniteも）
console.log(isNaN('hoge')); // true（引数を数値に変換してから判定）
console.log(Number.isNaN('hoge')); // false（引数が数値型であり、かつNaNであるものがtrue）

// クエリコードをエスケープする（encodeURI/encodeURIComponent関数）
var str = '!"#$%&()+-*/@~_|;::,.';
console.log(encodeURI(str)); // !%22#$%25&()+-*/@~_%7C;::,.
console.log(encodeURIComponent(str)); // !%22%23%24%25%26()%2B-*%2F%40~_%7C%3B%3A%3A%2C.