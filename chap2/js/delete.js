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
 * 以上のことから、
 */