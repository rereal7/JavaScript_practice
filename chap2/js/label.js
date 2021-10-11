kuku :
for(var i=1; i<10; i++){
	for(var j=1; j<10; j++){
		var k = i*j;
		if(k>30){break kuku;}
		document.write(k + '&nbsp');
	}
	document.write('<br />');
}

/** 結果
 * 1 2 3 4 5 6 7 8 9 
 * 2 4 6 8 10 12 14 16 18 
 * 3 6 9 12 15 18 21 24 27 
 * 4 8 12 16 20 24 28
*/

// ループ中のswitch文を抜ける場合は、breakでswitchを抜けてもfor文自体は抜けることができないので
// ラベル構文を利用する必要があるので注意すること