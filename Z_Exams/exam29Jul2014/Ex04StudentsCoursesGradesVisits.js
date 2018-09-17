function solve(array) {
    let courses = {};

    for (let element of array.filter(str => str !== "")) {
        let tokens = element.split("|").map(str => str.trim());
        let course = tokens[1];
        let student = tokens[0];
        let grade = Number(tokens[2]);
        let visits = Number(tokens[3]);

        if (!courses.hasOwnProperty(course)) {
            courses[course] = {grades: [], visits: [], students: []};
        }
        courses[course].grades.push(grade);
        courses[course].visits.push(visits);
        if (!courses[course].students.includes(student)) {
            courses[course].students.push(student);
        }
    }

    let output = {};

    for (const course of Object.keys(courses).sort()) {
        let avgGrade = getAvg(courses[course].grades);
        let avgVisits = getAvg(courses[course].visits);
        output[course] = {
            avgGrade: avgGrade,
            avgVisits: avgVisits,
            students: courses[course].students.sort()
        };
    }

    function getAvg(arr) {
        let avg = arr.reduce((a, b) => a + b) / arr.length;
        return Number(avg.toFixed(2));
    }

    console.log(JSON.stringify(output));
}

solve(
    [
        "Peter Nikolov | PHP  | 5.50 | 8",
        "Maria Ivanova | Java | 5.83 | 7",
        "Ivan Petrov   | PHP  | 3.00 | 2",
        "Ivan Petrov   | C#   | 3.00 | 2",
        "Peter Nikolov | C#   | 5.50 | 8",
        "Maria Ivanova | C#   | 5.83 | 7",
        "Ivan Petrov   | C#   | 4.12 | 5",
        "Ivan Petrov   | PHP  | 3.10 | 2",
        "Peter Nikolov | Java | 6.00 | 9",
    ]
);