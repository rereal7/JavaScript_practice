var data = {apple:150, orange:100, banana:120};
for(var key in data){
	console.log(key + '=' + data[key]);
}
// 結果:apple=150
// 結果:orange=100
// 結果:banana=120

// phpのforeach,pythonのfor文に似ている
// 注意点として、オブジェクト(連想配列,Map)で使用すること
// 配列で使用すると、以下のような現象が起こる

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

// for...in命令では処理の順序も保証されない
// 仮変数にはインデックス番号が格納されるだけなので、コードがあまりシンプルにならない