function solve(array) {
    let catalogue = {};

    for (const element of array) {
        let tokens = element.split(" : ");
        let name = tokens[0];
        let price = Number(tokens[1]);
        let letter = [...name][0];

        if (!catalogue.hasOwnProperty(letter)) {
            catalogue[letter] = {};
        }

        catalogue[letter][name] = price;
    }

    Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b))
        .forEach(letter => {
            console.log(letter);
            Object.keys(catalogue[letter])
                .sort((a, b) => a.localeCompare(b))
                .forEach(product => console.log(`  ${product}: ${catalogue[letter][product]}`))
        })
}

solve(
    [
        "Appricot : 20.4",
        "Fridge : 1500",
        "TV : 1499",
        "Deodorant : 10",
        "Boiler : 300",
        "Apple : 1.25",
        "Anti-Bug Spray : 15",
        "T-Shirt : 10",
    ]
);
