function getMoviePrice(parametersArray) {
    let data = {
        "the godfather": {
            "monday": 12,
            "tuesday": 10,
            "wednesday": 15,
            "thursday": 12.5,
            "friday": 15,
            "saturday": 25,
            "sunday": 30
        },
        "schindler's list": {
            "monday": 8.5,
            "tuesday": 8.5,
            "wednesday": 8.5,
            "thursday": 8.5,
            "friday": 8.5,
            "saturday": 15,
            "sunday": 15
        },
        "casablanca": {
            "monday": 8,
            "tuesday": 8,
            "wednesday": 8,
            "thursday": 8,
            "friday": 8,
            "saturday": 10,
            "sunday": 10
        },
        "the wizard of oz": {
            "monday": 10,
            "tuesday": 10,
            "wednesday": 10,
            "thursday": 10,
            "friday": 10,
            "saturday": 15,
            "sunday": 15
        }
    };

    let movieTitle = parametersArray[0].toLowerCase();
    let dayOfWeek = parametersArray[1].toLowerCase();

    if (data[movieTitle] !== undefined && data[movieTitle][dayOfWeek] !== undefined) {
        return data[movieTitle][dayOfWeek];
    } else {
        return "error";
    }
}

console.log(getMoviePrice(["casablanca", "sunday"]));
console.log(getMoviePrice(["The Godfather", "Friday"]));
console.log(getMoviePrice(["SoftUni", "Nineday"]));
console.log(getMoviePrice(["The Godfather", "Sofia"]));
