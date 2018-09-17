function solve(array) {
    let baseConsumption = 10;
    let consumption = {
        'gas': (baseConsumption, cargoWeight) => calConsumption(baseConsumption, 1.2, cargoWeight),
        'petrol': (baseConsumption, cargoWeight) => calConsumption(baseConsumption, 1, cargoWeight),
        'diesel': (baseConsumption, cargoWeight) => calConsumption(baseConsumption, 0.8, cargoWeight),
    };

    let routes = {
        "1": {totalKm: 110, normalRoadKm: 100, snowyRoadKm: 10},
        "2": {totalKm: 95, normalRoadKm: 65, snowyRoadKm: 30},
    };

    for (const element of array) {
        let [model, fuelType, route, cargoWeight] = element.split(" ");
        let routeObj = routes[route];
        let fuelConsumption = consumption[fuelType](baseConsumption, cargoWeight);
        let snowConsumption = fuelConsumption * 0.3;

        let fuelNeeded = routeObj.totalKm * (fuelConsumption / 100.0) + routeObj.snowyRoadKm * (snowConsumption / 100.0);
        console.log(`${model} ${fuelType} ${route} ${Math.round(fuelNeeded)}`)
    }

    function calConsumption(baseConsumption, coefficient, cargoWeight) {
        return (baseConsumption * coefficient) + (cargoWeight * 0.01);
    }
}

solve(
    [
        'BMW petrol 1 320.5',
        'Golf petrol 2 150.75',
        'Lada gas 1 202',
        'Mercedes diesel 2 312.54'
    ]
);

solve(
    [
        'BMW petrol 1 320.512',
        'Golf petrol 2 150.751',
        'Lada gas 1 202.123',
        'Mercedes diesel 2 312.541',
        'Audi petrol 1 320.5',
        'Ferari petrol 2 150.75',
        'Zonda gas 1 202',
        'Kraisler diesel 2 312.54',
        'BMWM3 petrol 1 320.512',
        'GolfGt petrol 2 150.751',
        'Lada21 gas 1 202.123',
        'MercedesAMG diesel 2 312.541',
        'AudiR4 petrol 1 320.5',
        'Ferari500 petrol 2 150.75',
        'ZondaX gas 1 202',
        'Kraisler1 diesel 2 312.54',

    ]
);