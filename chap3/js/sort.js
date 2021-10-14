var ary = [5, 25, 10];
console.log(ary.sort()); // [10, 25, 5](文字列としてソート)
console.log(ary.sort(function(x,y){
	return x-y;
}))
// [5, 10, 25](数値としてソート)

console.log(ary.sort((a,b) => a - b)); // [5, 10, 25](アロー関数を使用した場合)