function solve(array) {
    array = array.filter(str => str !== "");
    let regex = /<td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td>/gm;
    let tableOpen = array.shift();
    let header = array.shift();
    let tableClose = array.pop();

    let tableRows = [];

    for (const arrayElement of array) {
        let match;
        while ((match = regex.exec(arrayElement)) !== null) {
            let product = match[1];
            let price = Number(match[2]);
            let obj = {name: product, price: price, data: arrayElement};
            tableRows.push(obj)
        }
    }

    tableRows
        .sort((first, second) => {
            let index = first.price - second.price;
            return index !== 0 ? index : first.name.localeCompare(second.name);
        });

    console.log(tableOpen);
    console.log(header);
    tableRows.forEach(row => console.log(row.data));
    console.log(tableClose);
}

solve(
    [
        "<table>",
        "<tr><th>Product</th><th>Price</th><th>Votes</th></tr>",
        "<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>",
        "<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>",
        "<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>",
        "<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>",
        "<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>",
        "<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>",
        "</table>",
    ]
);










