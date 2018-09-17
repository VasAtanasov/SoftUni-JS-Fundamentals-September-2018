function solve(array) {
    let concerts = {};

    for (const arrayElement of array.filter(str => str !== "")) {
        [band, town, date, venue] = arrayElement.split(" | ").filter(str => str !== "").map(str => str.trim());
        if (!concerts.hasOwnProperty(town)) {
            concerts[town] = {};
        }
        if (!concerts[town].hasOwnProperty(venue)) {
            concerts[town][venue] = [];
        }
        if (!concerts[town][venue].includes(band))  {
            concerts[town][venue].push(band);
        }
    }

    let output = {};

    Object.keys(concerts)
        .sort((townOne, townTwo) => townOne.localeCompare(townTwo))
        .forEach(town => {
            output[town] = {};
            Object.keys(concerts[town])
                .sort((venueOne, venueTwo) => venueOne.localeCompare(venueTwo))
                .forEach(venue => output[town][venue] = concerts[town][venue].sort((a, b) => a.localeCompare(b)))
        });
    return JSON.stringify(output);
}

console.log(solve(
    [
        "ZZ Top | London | 2-Aug-2014 | Wembley Stadium",
        "Iron Maiden | London | 28-Jul-2014 | Wembley Stadium",
        "Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium",
        "Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium",
        "Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium",
        "Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium",
        "Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium",
        "Helloween | London | 28-Jul-2014 | Wembley Stadium",
        "Twisted Sister | London | 30-Sep-2014 | Wembley Stadium",
        "Metallica | London | 03-Oct-2014 | Olympic Stadium",
        "Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium",
        "Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium",
    ]
));













