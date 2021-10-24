// ...可変長引数のイメージをつけよう
console.log(Math.max(15,-22,102,33)); // 102
console.log(Math.min([15,-22,102,33])); // NaN

console.log(Math.max.apply(null, [15,-2,33,0])); // 33
console.log(Math.max(...[15,-22,102,33])); // 102