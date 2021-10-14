console.log(Math.clz32(1));         // 結果:31
console.log(Math.sign(-100));         // 結果:-1
console.log(Math.hypot(3,4));         // 結果:5
console.log(Math.atan2(1,3));         // 結果:0.3217505543966422
console.log(Math.log(10));         // 結果:2.302585092994046
console.log(Math.exp(3));         // 結果:20.085536923187668
console.log(Math.expm1(1));         // 結果:1.718281828459045

// with命令（便利な半面、処理速度、可読性の低下が認められるので非推奨）
with(console){
	log(Math.clz32(1));         // 結果:31
	log(Math.sign(-100));         // 結果:-1
	log(Math.hypot(3,4));         // 結果:5
	log(Math.atan2(1,3));         // 結果:0.3217505543966422
	log(Math.log(10));         // 結果:2.302585092994046
	log(Math.exp(3));         // 結果:20.085536923187668
	log(Math.expm1(1));         // 結果:1.718281828459045
}