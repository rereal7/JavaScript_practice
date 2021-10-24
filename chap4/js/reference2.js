var value = [1,2,4,8,16];
function deleteValue(value){
	value.pop(); // 要素の末尾を削除
	return value;
}

console.log(deleteValue(value)); // [1, 2, 4, 8]
console.log(value); // [1, 2, 4, 8]

// 今回のvalue配列は参照型なので、アドレスが参照されるため、グローバル変数だとか
// ローカル変数だとかは関係がなくなってしまう。