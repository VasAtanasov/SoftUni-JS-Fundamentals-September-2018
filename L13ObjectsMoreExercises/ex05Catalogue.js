function solve(array) {

    let commands = (function () {
        let catalogue = {};

        function add(letter, product, price) {
            if (!catalogue.hasOwnProperty(letter)) {
                catalogue[letter] = {};
            }

            catalogue[letter][product] = price;
        }

        function print() {
            Object.keys(catalogue)
                .sort((a,b) => a.localeCompare(b))
                .forEach(letter => {
                    console.log(letter);
                    Object.keys(catalogue[letter])
                        .sort((a,b) => a.toUpperCase().localeCompare(b.toUpperCase()))
                        .forEach(product => {
                            console.log(`  ${product}: ${catalogue[letter][product]}`);
                        })
                })
        }

        return {add, print}
    })();


    for (const element of array) {
        let tokens = element.split(' : ');
        let product = tokens[0];
        let price = Number(tokens[1]);
        let firstLetter = product.charAt(0).toUpperCase();
        commands.add(firstLetter, product, price);
    }

    commands.print()
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
        "T-Shirt : 10"
    ]
);