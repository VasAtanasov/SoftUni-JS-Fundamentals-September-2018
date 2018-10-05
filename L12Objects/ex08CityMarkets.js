function cityMarkets(array) {
    let towns = new Map();

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(" -> ").filter(String);
        let town = tokens[0];
        let product = tokens[1];
        let totalIncome = tokens[2].split(/\s+:\s+/).map(Number).reduce((a, b) => a * b);

        if (!towns.has(town)) {
            towns.set(town, new Map());
        }
        if (!towns.get(town).has(product)) {
            towns.get(town).set(product, 0);
        }

        let updatedIncome = towns.get(town).get(product) + totalIncome;
        towns.get(town).set(product, updatedIncome);
    }

    for (let [town, products] of towns) {
        console.log("Town - " + town);
        for (let [product, income] of products) {
            console.log(`$$$${product} : ${income}`)
        }
    }

}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);