var data = [4,9,16,25];
var result = data.map(function(value, index, array){
	return value%3 === 0;
});

console.log(result); // [false, true, false, false]

if(result){
	console.log('3の倍数が見つかりました。');
}else{
	console.log('3の倍数が見つかりませんでした。');
}
// 3の倍数が見つかりました。

// 似たような挙動のメソッドとしてeveryメソッドがあるが
// someが1つでも条件に合致すればよいのに対して、everyはすべてが合致しているかを判定する。