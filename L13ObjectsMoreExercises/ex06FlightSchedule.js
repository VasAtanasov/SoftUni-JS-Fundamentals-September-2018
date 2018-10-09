function solve([flights, flightStatus, checkStatus]) {
    let flightDetails = {};

    for (const element of flights) {
        let tokens = element.split(/\s+/);
        flightDetails[tokens[0]] = {Destination: tokens[1], Status: "Ready to fly"};
    }

    for (const element of flightStatus) {
        let tokens = element.split(/\s+/);
        if (flightDetails.hasOwnProperty(tokens[0])) {
            flightDetails[tokens[0]].Status = tokens[1];
        }
    }

    Object.values(flightDetails)
        .filter(f => f.Status === checkStatus[0])
        .forEach(f => console.log(f))
}

solve(
    [
        [
            'WN269 Delaware',
            'FL2269 Oregon',
            'WN498 Las Vegas',
            'WN3145 Ohio',
            'WN612 Alabama',
            'WN4010 New York',
            'WN1173 California',
            'DL2120 Texas',
            'KL5744 Illinois',
            'WN678 Pennsylvania'
        ],
        [
            'DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK430 Cancelled'
        ],
        ['Cancelled']
    ]
);