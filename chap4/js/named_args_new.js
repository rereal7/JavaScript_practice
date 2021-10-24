// 名前付き引数でコードを読みやすくする。
function getTriangle({base=1, height=1}){
	return base*height/2;
}
console.log(getTriangle({base:5,height:2})); // 5

function show({name}){
	console.log(name);
}
let member = {
	mid: 'Y0001',
	name: '山田太郎',
	address: 't_yamada@example.com'
};
show(member); // 山田太郎