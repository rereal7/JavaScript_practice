var data = ['apple', 'orange', 'banana'];
for(var i=0, len = data.length; i<len; i++){
	console.log(data[i]);
}
// 結果:apple
// 結果:orange
// 結果:banana

// 本題とはずれるが、初期化式で配列のサイズ(data.length)を取得している点にも注意すると
// ループごとにプロパティにアクセスしなくて済むので、実行時間が短くなる！

// pythonのfor文のようなものはないのか...