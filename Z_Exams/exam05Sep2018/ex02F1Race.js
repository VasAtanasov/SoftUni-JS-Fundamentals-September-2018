function solve(array) {
    let drivers = array.shift().split(/\s+/);

    for (const element of array) {
        let [action, driver] = element.split(/\s+/);
        switch (action) {
            case 'Join':
                if (!drivers.includes(driver)) {
                    drivers.push(driver)
                }
                break;
            case 'Crash':
                if (drivers.includes(driver)) {
                    let index = drivers.indexOf(driver);
                    drivers.splice(index, 1);
                }
                break;
            case 'Pit':
                if (drivers.includes(driver)) {
                    let index = drivers.indexOf(driver);
                    if (index !== drivers.length - 1) {
                        let temp = drivers[index + 1];
                        drivers[index + 1] = drivers[index];
                        drivers[index] = temp;
                    }
                }
                break;
            case 'Overtake':
                if (drivers.includes(driver)) {
                    let index = drivers.indexOf(driver);
                    if (index !== 0) {
                        let temp = drivers[index - 1];
                        drivers[index -1] = drivers[index];
                        drivers[index] = temp;
                    }
                }
                break;
        }

    }

    console.log(drivers.join(' ~ '))
}

solve(
    [
        "Vetel Hamilton Slavi",
        "Pit Hamilton",
        "Overtake Vetel",
        "Crash Slavi"
    ]
);

solve(
    [
        "Vetel Hamilton Raikonnen Botas Slavi",
        "Pit Hamilton",
        "Overtake LeClerc",
        "Join Ricardo",
        "Crash Botas",
        "Overtake Ricardo",
        "Overtake Ricardo",
        "Overtake Ricardo",
        "Crash Slavi"
    ]
);