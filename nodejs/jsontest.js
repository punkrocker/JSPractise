var acc = '{"name": "zhangsan", "age": 18}';
var accObj = JSON.parse(acc);
console.log(accObj.name)
console.log(accObj.age)

var anotherAcc = JSON.stringify(accObj);
console.log(anotherAcc);