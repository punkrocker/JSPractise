function pluck<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(name => obj[name]);
}

interface Person {
    name: string;
    age: number;
}

const people: Person = {
    name: "Tom",
    age: 25
};

console.log(pluck(people, ['name']));
console.log(pluck(people, ['age']));
console.log(pluck(people, ['name', 'age']));