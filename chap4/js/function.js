// function
function getTriangle(base, height){
	return base*height/2;
}

// Functionコンストラクター
var getTriangle = new Function('base', 'height', 'return base * height / 2;');
console.log('三角形の面積：' + getTriangle(5,2)); // 三角形の面積：5

var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param, formula);
console.log('菱形の面積：' + diamond(5,2)); // 菱形の面積：5

// 関数リテラル
var getTriangle = function(base, height){
	return base * height / 2;
};
console.log(getTriangle(5,2)); // 5

// アロー関数
let getTriangle = (base, height) => {
	return base * height / 2;
};
console.log(getTriangle(5,2)); // 5

// 更に省略
let square = (x, y) => x * y;
console.log(square(2,3)); // 6

// 引数が1つのときは（）を省略できる
let circle = radius => radius**2*Math.PI;
console.log(circle(5)); // 78.53981633974483

// 引数が0このときは（）は省略できない
let show = () => console.log('Hello, world!');
console.log(show()); // Hello, world!