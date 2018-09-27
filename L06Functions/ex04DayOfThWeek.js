function getNumber(dayOfWeek) {
    let array = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7,
    };

    if (array[dayOfWeek] !== undefined) {
        return array[dayOfWeek];
    } else {
        return "error";
    }
}

console.log(getNumber("Monday"));
console.log(getNumber("Friday"));
console.log(getNumber("Frabjoyousday"));