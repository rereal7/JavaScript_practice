var classes = ['部長', '課長', '主任', '担当'];
var members = [
	{name:'鈴木達央', clazz:'主任'},
	{name:'山口達也', clazz:'部長'},
	{name:'井上陽水', clazz:'担当'},
	{name:'和田アキ子', clazz:'課長'},
	{name:'小森純', clazz:'担当'},
];

console.log(members.sort(function(x,y){
	return classes.indexOf(x.clazz) - classes.indexOf(y.clazz); // members配列のclszzプロパティのキーに、予め用意しておいた配列classesを検索し、その登場位置で大小比較します。これは天才！
}))
// [
// 0: {name: '山口達也', clazz: '部長'}
// 1: {name: '和田アキ子', clazz: '課長'}
// 2: {name: '鈴木達央', clazz: '主任'}
// 3: {name: '井上陽水', clazz: '担当'}
// 4: {name: '小森純', clazz: '担当'}
// ]