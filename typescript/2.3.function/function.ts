function add(x: number, y: number): number {
    return x + y;
}

const add2 = function (x: number, y: number): number {
    return x + y;
};

console.log(add(2,3));
console.log(add2(2,3));