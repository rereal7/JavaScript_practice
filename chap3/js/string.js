var str1 = 'にわにはにわにわとりがいる';

console.log(str1.indexOf('にわ')) // 結果:0(先頭から検索)
console.log(str1.lastIndexOf('にわ')) // 結果:6(末尾から検索)
console.log(str1.indexOf('にわ', 3)) // 結果:4(4文字目から右方向検索)
console.log(str1.lastIndexOf('わ', 5)) // 結果:5(6文字目から左方向検索)
console.log(str1.indexOf('ガーデン')) // 結果:-1(不一致)
console.log(str1.startsWith('にわ')) // 結果:true
console.log(str1.endsWith('にわ')) // 結果:false
console.log(str1.includes('にわ')) // 結果:true

var str2 = 'Wingsプロジェクト';
var str3 = '叱られて';
var str4 = ' wings ';

console.log(str2.charAt(4)); // 結果:s(5番目の文字を抽出)
console.log(str2.slice(5,8)); // 結果:プロジ(6番目から8番目の文字を抽出)
console.log(str2.substring(5,8)); // 結果:プロジ(6番目から8番目の文字を抽出)
console.log(str2.substr(5,3)); // 結果:プロジ(6番目から3文字を抽出)
console.log(str2.split('s')); // 結果:['Wing', 'プロジェクト']
console.log(str1.split('わ',3)); // 結果:['に', 'にはに', 'に']
console.log(str1.split('わ',4)); // 結果:['に', 'にはに', 'に', 'とりがいる']
console.log(str2.charCodeAt(0)); // 結果:87
console.log(String.fromCharCode(87, 105, 110, 103)); // 結果:Wing
console.log(str3.codePointAt(0)); // 結果:21489
console.log(String.fromCodePoint(21489)); // 結果:叱
console.log(str2.concat('有限会社')); // 結果:Wingsプロジェクト有限会社
console.log(str2.repeat(2)); // 結果:WingsプロジェクトWingsプロジェクト
console.log(str4.trim()); // 結果:wings
console.log(str2.length); // 結果:11(日本語も1文字とカウント)
