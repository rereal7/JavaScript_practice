'use strict'; // Strictモードを使用しないと、以下のメソッドは確認ができなくて面倒になる。

var pet = {type: 'スノーホワイトハムスター', name: 'キラ・ヤマト'};
var pet2 = {type: 'スノーホワイトハムスター', name: 'キラ・ヤマト'};
var pet3 = {type: 'スノーホワイトハムスター', name: 'キラ・ヤマト'};

// 同時に実行しても、preventExtensionsのエラーメッセージしか返ってこない
Object.preventExtensions(pet); // Cannot add property weight, object is not extensible
Object.seal(pet); // Cannot delete property 'type' of #<Object>
Object.freeze(pet); // Cannot assign to read only property 'name' of object '#<Object>'

// 既存のプロパティ値を変更
pet.name = 'アスラン・ザラ';
// 既存のプロパティを削除
delete pet.type;
// 新規のプロパティを追加
pet.weight = 60;