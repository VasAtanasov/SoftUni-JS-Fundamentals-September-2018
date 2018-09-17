function solve(keyWord, text) {
    let north = {wholePart: 0, decimalPart: 0};
    let east = {wholePart: 0, decimalPart: 0};
    getCoordinates();
    let messageRegex = keyWord + "(.*|\n*)" + keyWord;
    let message = new RegExp(messageRegex).exec(text);

    console.log(`${north.wholePart}.${north.decimalPart} N`);
    console.log(`${east.wholePart}.${east.decimalPart} E`);
    console.log(`Message: ${message[1]}`);

    function getCoordinates() {
        let coordinatesRebe = /(north|east)(?:.|\n)*?([0-9]{2})(?:.|\n)*?,(?:.|\n)*?([0-9]{6})/g;
        let match;
        while (match = coordinatesRebe.exec(text.toLowerCase())) {
            let [fullMatch, location, wholePart, decimalPart] = match;
            switch (location) {
                case "north":
                    north.wholePart = wholePart;
                    north.decimalPart = decimalPart;
                    break;
                case "east":
                    east.wholePart = wholePart;
                    east.decimalPart = decimalPart;
                    break;
            }
        }
    }
}

solve(
    "<>",
    "o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b"
);
console.log();
solve(
    "4ds",
    "eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532"
);