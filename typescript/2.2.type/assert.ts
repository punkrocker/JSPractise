let oneString: any = 'this is a string'
let stringLength: number = (<string>oneString).length

console.log(stringLength)

let len: number = (oneString as string).length
console.log(len)