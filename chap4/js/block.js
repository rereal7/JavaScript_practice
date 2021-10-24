// 即時関数で変数名の競合を防ぐ（擬似的なブロックスコープ）
(function(){
	var i = 5;
	console.log(i); // 5
}).call(this);

console.log(i); // i is not defined