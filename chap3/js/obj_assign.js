// assignメソッドの注意点3点
// 1.同名のプロパティは、上書き処理される（この例では、name）
// 2.再帰的なマージには非対応（この例では、descriptionプロパティはまるごと上書き）

let pet = {
	type: 'スノーホワイトハムスター',
	name: 'キラ',
	description: {
		birth: 'C.E.55-05-18'
	}
};

let pet2 = {
	name: 'キラ・ヤマト',
	color: 'brown',
	description: {
		food: '甘い物（おはぎなど）'
	}
};

let pet3 = {
	weight: '58',
	photo: 'http://www.wings.msn.to/img/ham.jpg'
};

// petが上書きされてしまうことの回避策（空のオブジェクトにマージさせる）
let merged = Object.assign({}, pet, pet2, pet3);
console.log(merged);
console.log(pet);

Object.assign(pet, pet2, pet3);
console.log(pet);
// color: "brown"
// description: {food: '甘い物（おはぎなど）'}
// name: "キラ・ヤマト"
// photo: "http://www.wings.msn.to/img/ham.jpg"
// type: "スノーホワイトハムスター"
// weight: "58"
