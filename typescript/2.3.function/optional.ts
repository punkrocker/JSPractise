function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

console.log(buildName("Zhang"));
console.log(buildName("Zhang", "san"));
