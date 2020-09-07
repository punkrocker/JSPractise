let arr = [1, 2, 3, 4, 5]
let result = arr.filter((num) => {
    return num > 2
}).map(function (item) {
    console.log(item)
    return item
}).reduce(function (total, currentValue, currentIndex, arr) {
    console.log(currentValue, currentIndex)
    return currentValue * total
}, 1)
console.log(result)

