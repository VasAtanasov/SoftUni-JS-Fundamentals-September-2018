function solve(array) {
    let grades = {};

    for (const element of array) {
        let tokens = element.split(/[\s,]+/).map(s => s.trim()).filter(s => s !== '');
        let student = tokens[2];
        let grade = Number(tokens[4]) + 1;
        let averageScore = Number(tokens[10]);

        if (averageScore >= 3 && grade <= 12) {
            if (!grades.hasOwnProperty(grade)) {
                grades[grade] = {};
            }

            if (!grades[grade].hasOwnProperty(student)) {
                grades[grade][student] = averageScore;
            }
        }
    }

    Object.keys(grades)
        .sort((a, b) => a - b)
        .forEach(grade => {
            let students = Object.keys(grades[grade]);
            console.log(`${grade} Grade`);
            if (students.length > 0) {
                console.log(`List of students: ${students.join(', ')}`);
                let average = Object.values(grades[grade]).reduce((a,b) => a + b) / students.length;
                console.log(`Average annual grade from last year: ${average.toFixed(2)}`);
            }
            console.log();
        })
}


solve(
    [
        'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
        'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
        'Student name: George, Grade: 8, Graduated with an average score: 2.83',
        'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
        'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
        'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
        'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
        'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
        'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
        'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
        'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
        'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
    ]
);