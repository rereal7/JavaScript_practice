var rank = 'B';
if (rank === 'A'){
	console.log('Aランクです.。');
}else if (rank === 'B'){
	console.log('Bランクです。');
}else if (rank === 'C'){
	console.log('Cランクです。');
}else{
	console.log('ランク外です。');
}

// まー読みづらいので、同値演算子による多岐分岐に特化しているswitchを利用したほうがいいケースもある