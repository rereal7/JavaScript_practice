// 1.引数start > 引数endだった場合
var str = 'WINGSプロジェクト';
console.log(str.substring(8,5)); // 結果:プロジ
console.log(str.slice(8,5));     // 結果:（空文字列）

// それぞれのメソッドの挙動
// substring: startとendを入れ替えて表示（有能）
// slice: 入れ替えは行わず、そのまま表示、今回は結果的に空文字

// 2.引数start/引数endに負の数を指定した場合
var str = 'WINGSプロジェクト';
console.log(str.substring(5,-2)); // 結果:WINGS(1〜5文字目を抽出)
console.log(str.slice(5,-2));     // 結果:プロジェ(6〜9文字目を抽出)

// それぞれのメソッドの挙動
// substring: まず、負の数は０とみなす。その後startとendを入れ替えて表示substring(0,5)となる
// slice: 負の数は、末尾からと読み取られる。つまり、末尾から2文字目から6文字までslice(5,9)となる