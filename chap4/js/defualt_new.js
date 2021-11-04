// 引数にデフォルト値を設定する方法
function getTriangle(base=1, height=1){
	return base*height/2;
}
console.log(getTriangle(5)); // 2.5
console.log(getTriangle(5,null)); // 0
console.log(getTriangle(5,undefined)); // 2.5

function multi(a, b=a) {
	return a*b;
}
console.log(multi(10,5)); // 50
console.log(multi(3)); // 9(引数bはaと同じ)