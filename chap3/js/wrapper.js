// 本来は「var flag = false;」と書くべき
var flag = new Boolean(false);
if(flag){
	console.log('flagはtrueです。');
}

// 結果:flagはtrueです。
// 変数flagの値がfalseであるにもかかわらず、Booleanコンストラクターで生成されたオブジェクトは
// 無条件にtrueとみなされている。これは、JavaScriptが
// null以外のオブジェクトをtrueとみなすから

// よって、原則として、基本データ型をnew演算子を使ってインスタンス化することは、避けるべき