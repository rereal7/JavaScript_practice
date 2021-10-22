// オブジェクトを生成する3つの方法

// 1.オブジェクトリテラル
var obj = {x:1, y:2, z:3};

// 2.new演算子で明示的にObjectオブジェクトをインスタンス化て、プロパティを追加
var obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;

// 3.createメソッド(Object.create(proto(生成するオブジェクトの元となるオブジェクト)[,props(プロパティ情報)]))
var obj3 = Object.create(Object.prototype, {
	x: {value: 1, writable: true, configurable: true, enumerable: true},
	y: {value: 1, writable: true, configurable: true, enumerable: true},
	z: {value: 1, writable: true, configurable: true, enumerable: true}
	}
);

// createメソッドの引数propsのプロパティの定義の型
// {プロパティ名:{属性名:値, ...}, ...}

// 完全に空のオブジェクトの生成方法
var obj = Object.create(null);