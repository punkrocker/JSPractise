const sym = Symbol();
let obj = { [sym]: 1 }
console.log(obj[sym])
console.log(sym)

const sym1 = Symbol("hello")
console.log(sym1)