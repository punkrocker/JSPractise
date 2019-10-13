const arr = [233, 'hello', true]
// in 迭代key
for (let val in arr) {
    console.log(val)
}
// of 迭代value
for (let val of arr) {
    console.log(val)
}