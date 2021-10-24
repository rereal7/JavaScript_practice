var getTriangle = function(base, height){
	return base*height/2;
};
console.log(getTriangle(5, 2)); // 5
getTriangle = 0;
console.log(getTriangle); // 0

// こgetTriangleが変なので、0で上書きされているため。

