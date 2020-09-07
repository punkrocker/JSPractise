function join(str) {
    return function (name) {
        return str + " " + name
    }
}

let join_name = join("hello")
console.log(join_name("mike"))
join_name = join("bye")
console.log(join_name("mike"))
