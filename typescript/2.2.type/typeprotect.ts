interface Teacher {
    teach(): void
}

interface Student {
    learn(): void
}

function getPerson(): Teacher | Student {
    var p: Teacher = {
        teach() {
            console.log("hello")
        }
    }
    return p as Teacher
}

const person = getPerson()

function isTeacher(person: Teacher | Student): person is Teacher {
    return (<Teacher>person).teach !== undefined
}

if (isTeacher(person)) {
    console.log("I'm a teacher")
    person.teach()
}
else {
    console.log("I'm a student")
    person.learn()
}