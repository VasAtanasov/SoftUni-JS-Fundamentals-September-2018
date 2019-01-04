function solve(array) {
    let travellers = {};

    for (const element of array) {
        let tokens = element.split(/\s+/);
        let traveller = tokens[0];
        if (!travellers.hasOwnProperty(traveller)) {
            travellers[traveller] = {money: 0, countries: {}};
        }

        traveller = travellers[traveller];
        if (tokens.length === 3) {
            traveller.money += Number(tokens[2]);
        } else {
            let landmark = tokens[3];
            let country = tokens[5];
            let moneyNeeded = Number(tokens[7]);

            if (traveller.countries.hasOwnProperty(country) && traveller.countries[country].includes(landmark)) {
                continue;
            }

            if (moneyNeeded <= traveller.money) {
                traveller.money -= moneyNeeded;
                if (!traveller.countries.hasOwnProperty(country)) {
                    traveller.countries[country] = [];
                }
                traveller.countries[country].push(landmark);
            } else {
                console.log(`Not enough money to visit ${landmark}`);
            }
        }
    }

    Object.keys(travellers)
        .sort((a, b) => Object.keys(travellers[b].countries).length - Object.keys(travellers[a].countries).length)
        .forEach(traveller => {
            let countries = travellers[traveller].countries;
            let count = Object.keys(countries).length;
            console.log(`${traveller} visited ${count} countries and has ${travellers[traveller].money} money left`);
            if (count > 0) {
                Object.keys(countries)
                    .sort((a, b) => countries[b].length - countries[a].length)
                    .forEach(country => {
                        let landmarkCount = countries[country].length;
                        let landmarks = countries[country];
                        console.log(`- ${country} -> ${landmarkCount} landmarks`);
                        if (landmarkCount > 0) {
                            landmarks
                                .sort((a, b) => a.localeCompare(b))
                                .forEach(landmark => {
                                    console.log(`-- ${landmark}`)
                                });
                        }

                    })
            }
        })
}


solve(
    [
        'Peter gets 100',
        'Peter visited the StatueOfLiberty in USA - 50',
        'Bill gets 250',
        'Tim visited the ChristTheRedeemer in Brazil - 150',
        'Bill gets 400',
        'Bill visited the MountFuji in Japan - 600',
        'Bill visited the TeatroAmazonas in Brazil - 50',
        'Bill gets 150',
        'Bill visited the ChristTheRedeemer in Brazil - 150',
        'Tim gets 500',
        'Bill visited the StatueOfLiberty in USA - 440',
        'Tim visited the StatueOfLiberty in USA - 440',
        'Maria gets 650',
        'Maria visited the StatueOfLiberty in USA - 440',
        'Maria visited the CapeCod in USA - 100'
    ]
);
// console.log();
// solve(
//     [
//         'Peter gets 100',
//         'Peter visited the StatueOfLiberty in USA - 50',
//         'Bill gets 250',
//         'Bill gets 400',
//         'Peter gets 150',
//         'Peter visited the ChristTheRedeemer in Brazil - 150'
//     ]
// );