// Object
var obj = new Object();
console.log(obj.toString()); // [object Object]
console.log(obj.valueOf()); // {}

// Date
var dat = new Date();
console.log(dat); // Fri Oct 22 2021 21:48:48 GMT+0900 (日本標準時)
console.log(dat.toString()); // Fri Oct 22 2021 21:41:46 GMT+0900 (日本標準時)
console.log(dat.valueOf());// 1634906506303

// Array
var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
console.log(ary.toString()); //prototype.js,jQuery,Yahoo! UI
console.log(ary.valueOf()); // ['prototype.js', 'jQuery', 'Yahoo! UI']

// Num
var num = 10;
console.log(num.toString()); // 10
console.log(num.valueOf()); // 10

// RegEx
var reg = /[0-9]{3}-[0-9]{4}/g;
console.log(reg.toString()); // /[0-9]{3}-[0-9]{4}/g
console.log(reg.valueOf()); // /[0-9]{3}-[0-9]{4}/g

// Date以外は全て自身を返す結果となった。