var data1 = ['JavaScript', 'Ajax', 'ASP.NET'];
var data2 = ['JavaScript', 'Ajax', 'ASP.NET'];

console.log(data1 == data2); // 結果:false

/**
 * なぜ、falseなのか
 * 基本型である変数同士の場合は、値同士の比較になるので、値が同じなら当然、trueが返ってくる
 * しかし、参照型の配列では、アドレスを参照しているのであって、値が同じでも今回の場合は
 * 全くの別物として認識されていることになる
 * つまり、以下の場合は、trueが返ってくる
*/

var data1 = ['JavaScript', 'Ajax', 'ASP.NET'];
var data2 = data1;

console.log(data1 == data2); // 結果:true