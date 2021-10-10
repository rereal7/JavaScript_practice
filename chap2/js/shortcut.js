var msg = '';
msg = msg || 'こんにちは、世界!';

console.log(msg); // 結果:こんにちは、世界!

// faslyな値に意味がある場合に注意
// そのような場合は条件演算子を使用する
msg = (msg === undefined ? 'こんにちは、世界!':msg);