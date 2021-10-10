var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(delete ary[0]); // 結果: true
console.log(ary); // 結果: [なし, 'Ajax', 'ASP.NET']

var obj = {x:1, y:2};
console.log(delete obj.x); // 結果: true
console.log(obj.x); // undefined

var obj2 = {x:obj, y:2};
console.log(delete obj2.x); // 結果: true
console.log(obj); // 結果: {y: 2}
console.log(obj2); // 結果: {y: 2}

var data1 = 1;
console.log(delete data1); // 結果: false
console.log(data1); // 結果: 1

data2 = 10;
console.log(delete data2);// 結果: true
console.log(data2); // 結果: エラー(data2 is not defined)

/**
 * 以上のことからわかることは3点
 * 1.配列の要素を削除した場合、該当する要素が削除されているだけで、後ろの要素がクリア上がるわけではない(インデックス番号は変わらない、phpと一緒)
 * 2.プロパティを削除した場合も、プロパティそのものが削除されるだけで、プロパティが参照するオブジェクトが削除されるわけではない
 * 3.明示的に宣言された変数を削除することはできない(var宣言した場合は、消すことができない)
 */