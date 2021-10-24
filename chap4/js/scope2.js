// 関数リテラルとFunctionコンストラクターのスコープの違い
var scope = 'Global Variable';

function checkScope(){
	var scope = 'Local Variable';
	var f_lit = function(){return scope};
	console.log(f_lit()); // Local Variable

	var f_con = new Function('return scope;');
	console.log(f_con()); // Global Variable
}

checkScope();

// いずれも関数内部で定義している。
// Functionコンストラクターはグローバル変数を参照している。（Functionコンストラクターは以下の変数は、グローバル変数とみなす挙動のため）