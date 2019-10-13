const arr = [233, 'hello', true]
// in 迭代key
for (let val in arr) {
    console.log(val)
}
// of 迭代value
for (let val of arr) {
    console.log(val)
}

function* gene() {
    let i = 0
    while (i < 5) {
        yield i++
    }
}

var iterator = gene()
var i = 0
while (i < 7) {
    console.log(iterator.next())
    i++
}