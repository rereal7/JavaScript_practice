var dat = new Date(2017, 4, 15, 11, 40);
console.log(dat.toLocaleString()); // 2017/5/15 11:40:00
dat.setMonth(dat.getMonth()+1); //
console.log(dat.toLocaleString()); // 2017/6/15 11:40:00
dat.setDate(0);
console.log(dat.toLocaleString()); // 2017/5/31 11:40:00
dat.setDate(dat.getDate()-40);
console.log(dat.toLocaleString()); // 2017/4/21 11:40:00

// 来月の0日目は、今月の末日になる！

// 日付/時刻の差分を求める
// getTimeで経過時刻ミリ秒を求めて、差分を出してから、再度変換する。
var dat1 = new Date(2017, 4, 15);
var dat2 = new Date(2017, 5, 20);
var diff = (dat2.getTime() - dat1.getTime()) / (1000*60*60*24); // 1000ミリ秒＊60秒＊60分＊24時間
console.log(diff+'日の差があります。'); // 36日の差があります。