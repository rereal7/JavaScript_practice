// 等価演算子(==)
// 以下の3つはすべて、JavaScript側が解釈してくれるので
// 良くも悪くも、trueになる
console.log('3.14e2' == 314);
console.log('0x10' == 16);
console.log('1' == 1);

// 同値演算子(===)
// 等価演算子と違い、値だけではなく、方も一致しているかを判別しているので
// すべてfalseになる
console.log('3.14e2' === 314);
console.log('0x10' === 16);
console.log('1' === 1);

// phpと同じ感覚で問題なさそう！
// 基本的には同値演算子を推奨
// なお、この関係は、不等価演算子(!=)と非同値演算子(!==)でも同様