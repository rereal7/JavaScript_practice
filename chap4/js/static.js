// function(コードを解析・コンパイルする時点で関数を事前に登録)
console.log('三角形の面積：' + getTriangle(5,2)); // 三角形の面積：5

function getTriangle(base, height){
	return base*height/2;
}

// 関数リテラル・Functionコンストラクター(実行に評価される)
console.log('三角形の面積：' + getTriangle(5,2)); // getTriangle is not a function

var getTriangle = function(base, height){
	return base*height/2;
}