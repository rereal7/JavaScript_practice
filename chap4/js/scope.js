var scope = 'Global Variable';

function getValue(){
	var scope = 'Local Variable';
	return scope;
}

console.log(getValue()); //Local Variable
console.log(scope); // Global Variable

// 変数宣言からvarを取り除いた
scope = 'Global Variable';

function getValue(){
	scope = 'Local Variable';
	return scope;
}

console.log(getValue()); // Local Variable
console.log(scope); // Local Variable（上書きされてるぅぅぅぅぅ）
// つまり、JavaScriptではvar命令を使わずに宣言された変数はグローバル変数をみなす！

// ローカル変数の有効範囲はどこまで？
var scope = 'Global Variable';

function getValue(){
	console.log(scope); // undefined
	var scope = 'Local Variable';
	return scope;
}
console.log(getValue()); // Local Variable
console.log(scope); // Global Variable