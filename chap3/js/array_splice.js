var data = ['Kuro', 'Siro', 'Mike', 'Tama', 'Tono'];

console.log(data.splice(3,2, 'Chika', 'Kaguya')); // ['Tama', 'Tono'](上書き対象)
console.log(data); // ['Kuro', 'Siro', 'Mike', 'Chika', 'Kaguya']

console.log(data.splice(3,2)); // ['Chika', 'Kaguya'](上書き対象)
console.log(data); // ['Kuro', 'Siro', 'Mike']

console.log(data.splice(1,0,'Miko')); // [](上書き対象、endが0なので、上書きはしない。結果的に挿入になる)
console.log(data); // ['Kuro', 'Miko', 'Siro', 'Mike']