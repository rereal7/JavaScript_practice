// 1.キーは「===」演算子で比較される
var m = new Map();
m.set('1', 'hoge');
console.log(m.get('1')); // hoge
console.log(m.get(1)); // undefined

// 2.特別なNanNは特別ではない、つまり、キーとして指定できる(通常、NaN !== NaN)
var n = new Map();
n.set(NaN, 'hoge');
console.log(n.get(NaN)); //hoge

// 3.オブジェクトの比較には要注意(データ型が参照型故に起こる現象)
var o = new Map();
o.set({}, 'hoge');
console.log(o); // {{…} => 'hoge'}
console.log(o.get({})); // undefined

// 正しい挙動を期待するのであれば、以下のようにする
var key = {};
var p = new Map();
p.set(key, 'hoge');
console.log(p); // {{…} => 'hoge'}
console.log(p.get(key)); // hoge

// 基本型(変数)の場合、値が直接格納されるが
// 参照型(オブジェクト、マップ)の場合、参照するメモリのアドレスが格納される
// そのため、例えば、たとえ同じ設計の家でも番地が違うので、全くの別物と認識されることになる。

// 簡単な例として、以下を参照
var x = [1,2,3];
var y = [1,2,3];
console.log(x === y); // false