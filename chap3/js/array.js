var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

// 型変換等
console.log(ary1.length); // 結果:6
console.log(Array.isArray(ary1)); // 結果:true
console.log(ary1.toString()); // 結果:Sato,Takae,Osada,Hio,Saitoh,Sato
console.log(ary1.indexOf('Sato')); // 結果:0
console.log(ary1.lastIndexOf('Sato')); // 結果:5
console.log(ary1.concat(ary2)); // 結果:['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato', 'Yabuki', 'Aoki', 'Moriyama', 'Yamada']

// 配列の加工
console.log(ary1.join('/')); // 結果:Sato/Takae/Osada/Hio/Saitoh/Sato
console.log(ary1.slice(1)); // 結果:['Takae', 'Osada', 'Hio', 'Saitoh', 'Sato']
console.log(ary1.slice(1,2)); // 結果:['Takae']
console.log(ary1.splice(1,2, 'Kakeya', 'Yamaguchi')); // 結果:['Takae', 'Osada']
console.log(ary1); // 結果:['Sato', 'Kakeya', 'Yamaguchi', 'Hio', 'Saitoh', 'Sato']
console.log(Array.of(20,40,60)); // 結果:[20, 40, 60]
console.log(ary1.copyWithin(0,3,6)); // 結果:['Hio', 'Saitoh', 'Sato', 'Hio', 'Saitoh', 'Sato'](3〜5番目を、0~2番目に上書きコピー)
console.log(ary2.fill('Suzuki', 1,3)); // 結果:['Yabuki', 'Suzuki', 'Suzuki', 'Yamada'](1〜2番目を'Suzuki'で上書き)

// 要素の削除・追加
console.log(ary1.pop()); // 結果:Sato(削除した要素、末尾を削除)
console.log(ary1); // 結果:['Hio', 'Saitoh', 'Sato', 'Hio', 'Saitoh'](popで末尾の要素が削除されたため)
console.log(ary1.push('Kondo')); // 結果:6(追加後の要素数)
console.log(ary1); // 結果:['Hio', 'Saitoh', 'Sato', 'Hio', 'Saitoh', 'Kondo'](pushで末尾に要素が追加されたため)
console.log(ary1.shift()); // 結果:Hio(削除した要素、先頭を削除)
console.log(ary1); // 結果:['Saitoh', 'Sato', 'Hio', 'Saitoh', 'Kondo']
console.log(ary1.unshift('Ozawa', 'Kuga')); // 結果:7(追加後の要素数)
console.log(ary1); // 結果:['Ozawa', 'Kuga', 'Saitoh', 'Sato', 'Hio', 'Saitoh', 'Kondo'](unshiftで先頭に要素が追加されたため)

// 配列のソート等(破壊的なメソッド:もとの配列を破壊する)
console.log(ary1.reverse()); // 結果:['Kondo', 'Saitoh', 'Hio', 'Sato', 'Saitoh', 'Kuga', 'Ozawa']
console.log(ary1.sort());// 結果:['Hio', 'Kondo', 'Kuga', 'Ozawa', 'Saitoh', 'Saitoh', 'Sato']