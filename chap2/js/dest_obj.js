let book = {title:'Javaポケットリファレンス', publish:'技術評論社', price:2680};
let {price, title, memo = 'なし'} = book;

console.log(title); // 結果:Javaポケットリファレンス
console.log(price); // 結果:2680
console.log(memo); 	// 結果:なし