function show(x, y=1){
	console.log('x = ' + x );
	console.log('y = ' + y );
}

show();
// x = undefined
// y = 1

// もし、必須の引数を表現するならば以下のように
function required(){
	throw new Error('引数が不足しています。');
}

function hoge(value = required()){ // requiredをデフォルト値として設定している。
	return value;
}
hoge(); // Uncaught Error: 引数が不足しています。
console.log(hoge(634)); // 634