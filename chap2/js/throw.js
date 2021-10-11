var x = 1;
var y = 0;
try{
	if(y === 0){throw new Error('0で除算しようとしました。');}
	var x = x/y;
}catch(e){
	console.log(e.message);
}

// 結果:0で除算しようとしました。

// throw文の構文
// throw new Error(エラーメッセージ)