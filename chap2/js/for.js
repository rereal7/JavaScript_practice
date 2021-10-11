for(var i=1; i<=5; i++){
	console.log('iの値は' + i);
}
// 結果:iの値は1
// 結果:iの値は2
// 結果:iの値は3
// 結果:iの値は4
// 結果:iの値は5

// カンマ演算子を利用することで、初期化式、ループ継続条件式、増減式に複数の式を指定することができる。
// カンマで区切られた式は、先頭から順に実行されます。たとえば、以下の例では初期化式で
// 変数x,yをそれぞれ1,2に初期化し、増減式で双方ともインクリメントしています。
for(var x=1, y=2; x<5; x++, y++){
	console.log('x*yは' + x*y);
}
// 結果:x*yは2
// 結果:x*yは6
// 結果:x*yは12
// 結果:x*yは20