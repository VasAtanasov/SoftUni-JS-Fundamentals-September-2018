function getLowestPrice(array) {
    let products = new Map();

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(" | ").filter(String);
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);

        if (!products.has(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, price)
    }

    for (let [product, towns] of products) {
        let townsSorted = Array.from(towns.keys())
            .sort((a,b) => towns.get(a) - towns.get(b));
        console.log(`${product} -> ${towns.get(townsSorted[0])} (${townsSorted[0]})`);
    }

    // Array.from(products.keys())  // also working correct
    //     .forEach(product => {
    //         let sorted = Array.from(products.get(product).keys())
    //             .sort((a, b) => products.get(product).get(a) - products.get(product).get(b));
    //         console.log(`${product} -> ${products.get(product).get(sorted[0])} (${sorted[0]})`);
    //     });
}

getLowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

console.log();

getLowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999']
);