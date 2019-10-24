function buildName(firstName: string, lastName = "Mark") {
    return firstName + " " + lastName;
}

console.log(buildName("Real"));

function buildName2(firstName="Jack", lastName = "Mark") {
    return firstName + " " + lastName;
}

console.log(buildName2(undefined, "Mark"));
