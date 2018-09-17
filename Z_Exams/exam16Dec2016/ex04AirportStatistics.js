function solve(array) {
    let planes = new Set();
    let towns = new Map();

    for (const argument of array) {
        let [planID, town, passengerCount, action] = argument.split(/\s+/);
        if (action !== "depart" && action !== "land") {
            continue;
        }
        if (action === 'depart') {
            if (!planes.has(planID)) continue;
            else {
                planes.delete(planID);
            }
        }
        if (action === 'land') {
            if (planes.has(planID)) continue;
            else {
                planes.add(planID);
            }
        }

        if (!towns.has(town)) {
            towns.set(town, {arrivals: 0, departures: 0, planes: []});
        }

        if (!towns.get(town).planes.includes(planID)) {
            towns.get(town).planes.push(planID);
        }

        switch (action) {
            case "land":
                towns.get(town).arrivals += Number(passengerCount);
                break;
            case "depart":
                towns.get(town).departures += Number(passengerCount);
                break
        }
    }

    console.log("Planes left:");
    [...planes]
        .sort((a, b) => a.localeCompare(b))
        .forEach(p => console.log(`- ${p}`));

    Array.from(towns.keys())
        .sort((town1, town2) => {
            let index = towns.get(town2).arrivals - towns.get(town1).arrivals;
            return index !== 0 ? index : town1.localeCompare(town2);
        })
        .forEach(town => {
            console.log(town);
            console.log(`Arrivals: ${towns.get(town).arrivals}`);
            console.log(`Departures: ${towns.get(town).departures}`);
            console.log("Planes:");
            towns.get(town).planes
                .sort((a, b) => a.localeCompare(b))
                .forEach(p => console.log(`-- ${p}`));
        })
}

solve(
    [
        "Boeing474 Madrid 300 land",
        "AirForceOne WashingtonDC 178 land",
        "Airbus London 265 depart",
        "ATR72 WashingtonDC 272 land",
        "ATR72 Madrid 135 depart"
    ]
);
console.log();
solve(
    [
        "Airbus Paris 356 land",
        "Airbus London 321 land",
        "Airbus Paris 213 depart",
        "Airbus Ljubljana 250 land"
    ]
);