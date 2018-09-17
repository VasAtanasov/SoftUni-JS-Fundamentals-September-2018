function solve(array) {
    let countries = {};
    getTravelCosts();

    Object.keys(countries)
        .sort((country1, country2) => country1.localeCompare(country2))
        .forEach(country => {
            let output = `${country} ->`;
            Object.keys(countries[country])
                .sort((town1, town2) => countries[country][town1] - countries[country][town2])
                .forEach(town => output += ` ${town} -> ${countries[country][town]}`);
            console.log(output);
        });

    function getTravelCosts() {
        for (const token of array) {
            let [country, town, travelConst] = token.split(" > ");
            town = toTitleCase(town);
            travelConst = Number(travelConst);

            if (!countries.hasOwnProperty(country)) {
                countries[country] = [];
            }
            if (!countries[country].hasOwnProperty(town)) {
                countries[country][town] = travelConst;
            }
            if (countries[country][town] > travelConst) {
                countries[country][town] = travelConst;
            }
        }
    }

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1));
    }
}

solve(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
);