var data = ['apple', 'orange', 'banana'];
Array.prototype.hoge = function(){}
for(var value of data){
	console.log(value);
}
// 結果:apple
// 結果:orange
// 結果:banana

// ここで注目したいのが、for...inでは仮変数にはインデックスが渡されていたのに対して
// for...ofでは値(value)が渡されている
// 以下参考 forin.js/

var data = ['apple', 'orange', 'banana'];
// 配列オブジェクトにhogeを追加
Array.prototype.hoge = function() {}
for(var key in data){
	console.log(data[key]);
}
// 結果:apple
// 結果:orange
// 結果:banana
// 結果:ƒ () {} ここが問題(なんでお前がおんねん？ってなる)

// break continueに関しては、php/pythonと挙動が同じなのでスキップ