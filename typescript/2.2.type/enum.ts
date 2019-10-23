enum OrderStatus {
    Start = 1,
    Unpaid,
    Shipping,
    Shipped = aNumber(),
    Complete = 25
}

function aNumber(): number{
    return 21
}

console.log(OrderStatus.Start)
console.log(OrderStatus.Complete)

function one(): string{
    return "this"
}


enum Functions {
    a = "bbbb",
    b = 'aaaa'
}

const nameOfA = OrderStatus[1]
console.log(nameOfA)