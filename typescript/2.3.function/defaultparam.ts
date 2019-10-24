function buildName(firstName: string, lastName = "Mark") {
    return firstName + " " + lastName;
}

console.log(buildName("Real"));