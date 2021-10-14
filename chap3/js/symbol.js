let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1);     // 結果:symbol
console.log(sym1.toString()); // 結果:Symbol(sym)
console.log(sym1 === sym2);   // 結果:false

// Symbolとは、ES2015以降で、新たに追加された型
// シンボル（物の名前）を作成するための型
// 文字列のようだが、文字列ではないので注意

// 文字列・数値への暗黙的な型変換（+,-演算子を利用）はできないが
// Boolean型への変換は可能
console.log(typeof !!sym1); // 結果:boolean