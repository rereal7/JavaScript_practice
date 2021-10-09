let book = {title:'Javaポケットリファレンス', publish:'技術評論社', price:2680, other: {keywd:'Java SE 8', logo:'logo.jpg'}};
let {price, other, other:{keywd}} = book;

console.log(title); // 結果:Javaポケットリファレンス
console.log(other); // 結果:{keywd: 'Java SE 8', logo: 'logo.jpg'}
console.log(keywd); // 結果:Java SE 8