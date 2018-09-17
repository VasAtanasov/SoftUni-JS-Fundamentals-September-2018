function solve(array) {
    let juiceRepository = [];
    let bottlesRepository = {};

    for (const element of array) {
        let tokens = element.split(" => ");
        let juiceName = tokens[0];
        let juiceQuantity = Number(tokens[1]);

        if (!juiceRepository.hasOwnProperty(juiceName)) {
            juiceRepository[juiceName] = 0;
        }

        juiceRepository[juiceName] += juiceQuantity;

        if (juiceRepository[juiceName] >= 1000) {
            if (!bottlesRepository.hasOwnProperty(juiceName)) {
                bottlesRepository[juiceName] = 0;
            }

            let bottles = Math.trunc(juiceRepository[juiceName] / 1000);

            bottlesRepository[juiceName] += bottles;
            juiceRepository[juiceName] -= (bottles * 1000);
        }
    }

    let keys = Object.keys(bottlesRepository);
    for (let key of keys) {
        console.log(`${key} => ${bottlesRepository[key]}`)
    }

}

solve(
    [
        "Orange => 2000",
        "Peach => 1432",
        "Banana => 450",
        "Peach => 600",
        "Strawberry => 549",
    ]
);
console.log();
solve(
    [
        "Kiwi => 234",
        "Pear => 2345",
        "Watermelon => 3456",
        "Kiwi => 4567",
        "Pear => 5678",
        "Watermelon => 6789",
    ]
);