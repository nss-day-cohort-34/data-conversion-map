const jenna = {
    toString () {
        return `${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercise} exercise`
    },
    name: "Jenna Solis",
    cohort: 34,
    currentExercise: "Array methods"
}

const bryan = {
    toString () {
        return `${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercise} exercise`
    },
    name: "Bryan Nilsen",
    cohort: 34,
    currentExercise: "Bry Fives"
}
const jisieTheInstructor = {
    toString () {
        return `${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercise} exercise`
    },
    name: "Jisie David",
    cohort: 32,
    currentExercise: "Student Exercises API"
}


const studentStringRepresentation = studentObject => studentObject.toString()

const students = [jisieTheInstructor, bryan, jenna]
const studentStringArray = students.map(studentStringRepresentation)

studentStringArray.forEach(
    (studentString) => {
        document.querySelector("#studentReport")
            .innerHTML += `<p>${studentString}</p>`
    }
)
