function solve(array) {
    let users = {}

    for (const element of array) {
        let tokens = element.split(/\s+/);

        if (tokens.includes('followed')) {

        } else {

        }

    }

}


solve(
    [
        'Welcome, EmilConrad',
        'Welcome, VenomTheDoctor',
        'Welcome, Saffrona',
        'Saffrona followed EmilConrad',
        'Saffrona followed VenomTheDoctor',
        'EmilConrad followed VenomTheDoctor',
        'VenomTheDoctor followed VenomTheDoctor',
        'Saffrona followed EmilConrad',
    ]
);
