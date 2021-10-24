if(true){
	let i = 5;
}
console.log(i); // i is not defined

// ブロックスコープ
{
	let j = 5;
	console.log(j); // 5
}
console.log(j); //j is not defined