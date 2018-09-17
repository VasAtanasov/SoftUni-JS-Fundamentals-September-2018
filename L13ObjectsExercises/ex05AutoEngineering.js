function solve(array) {
    let brands = new Map();

    for (const element of array) {
        let tokens = element.split(" | ");
        let brand = tokens[0];
        let model = tokens[1];
        let count = Number(tokens[2]);

        if (!brands.has(brand)) {
            brands.set(brand, new Map());
        }

        if (!brands.get(brand).has(model)) {
            brands.get(brand).set(model, 0);
        }

        let updatedCount = brands.get(brand).get(model) + count;
        brands.get(brand).set(model, updatedCount);
    }

    [...brands.keys()]
        .forEach(brand => {
            console.log(brand);

            for (const [key,value] of brands.get(brand)) {
                console.log(`###${key} -> ${value}`);
            }
        })
}

solve(
    [
        "Audi | Q7 | 1000",
        "Audi | Q6 | 100",
        "BMW | X5 | 1000",
        "BMW | X6 | 100",
        "Citroen | C4 | 123",
        "Volga | GAZ-24 | 1000000",
        "Lada | Niva | 1000000",
        "Lada | Jigula | 1000000",
        "Citroen | C4 | 22",
        "Citroen | C5 | 10",
    ]
);
