interface A {
    a: number,
    b: string
}

let interfaceA: A = {
    a: 1,
    b: "hello"
}

console.log(interfaceA.a)
console.log(interfaceA.b)

interface B {
    c: number,
    d: string
}

type X = A & B
let x: X = {
    a: 1,
    b: "a",
    c: 3,
    d: "d"
}
console.log(x.c)

function twotypes(a: string | number) {
    console.log(a)
}
twotypes("hello")
twotypes(3)