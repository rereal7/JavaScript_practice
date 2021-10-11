var rank = 'B';
switch(rank){
	case 'A':
		console.log('Aランクです。');
		break;
	case 'B':
		console.log('Bランクです。');
		break;
	case 'C':
		console.log('Cランクです。');
		break;
	default:
		console.log('ランク外です。');
		break;
}
// 結果:Bランクです。

// if命令と異なり、switch命令は
// 条件に合致するcase句に処理を移動するだけで、その句を終えても、自動的にswitchブロックを終了するわけではない！
// したがって、breakを使用する必要がある。

// また、switch文は同値演算子による比較なので、型に気をつけるること
var x = '0';
switch(x){
	case 0:
		console.log('xは0です。');
		break
	default:
		console.log('xは0ではありません。');
}
// 結果:xは0ではありません。