var data = [2,3,4,5];
var result = data.map(function(value, index, array){
	return value**2;
});

console.log(result); // [4, 9, 16, 25]