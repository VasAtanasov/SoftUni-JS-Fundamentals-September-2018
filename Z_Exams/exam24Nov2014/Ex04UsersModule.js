function solve(array) {
    let conditions = array.shift().split("^");
    let entries = {students: [], trainers: []};

    for (let i = 0; i < array.length; i++) {
        let personJSON = JSON.parse(array[i]);
        let role = personJSON.role;

        switch (role) {
            case "student":
                entries.students.push(personJSON);
                break;
            case "trainer":
                entries.trainers.push(personJSON);
                break
        }
    }

    let sorting = {
        "name": (a, b) => {
            let index = a["firstname"].localeCompare(b["lastname"]);
            return index !== 0 ? index : a["lastname"].localeCompare(b["lastname"]);
        },
        "level": (a, b) => {
            let index = a["level"] - b["level"];
            return index !== 0 ? index : a["id"] - b["lastname"];
        }
    };

    let studentsCondition = conditions[0];

    let sorted = {
        students: entries.students
            .sort(((a, b) => sorting[studentsCondition](a, b)))
            .map(mapToStudentOBJ),
        trainers: entries.trainers
            .sort((a, b) => {
                let index = a["courses"].length - b["courses"].length;
                return index !== 0 ? index : a["lecturesPerDay"] - b["lecturesPerDay"];
            })
            .map(mapToTrainerOBJ)
    };

    console.log(JSON.stringify(sorted));

    function mapToStudentOBJ(obj) {
        let id = obj.id;
        let firstname = obj.firstname;
        let lastname = obj.lastname;
        let averageGrade = obj.grades.map(Number).reduce((a, b) => a + b) / obj.grades.length;
        let certificate = obj.certificate;
        return {
            id: id,
            firstname: firstname,
            lastname: lastname,
            averageGrade: averageGrade.toFixed(2),
            certificate: certificate
        }
    }

    function mapToTrainerOBJ(obj) {
        let id = obj.id;
        let firstname = obj.firstname;
        let lastname = obj.lastname;
        let courses = obj.courses;
        let lecturesPerDay = obj.lecturesPerDay;

        return {id: id, firstname: firstname, lastname: lastname, courses: courses, lecturesPerDay: lecturesPerDay}

    }
}


solve(
    [
        'level^courses',
        '{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
        '{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
        '{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
        '{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
        '{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}',

    ]
);