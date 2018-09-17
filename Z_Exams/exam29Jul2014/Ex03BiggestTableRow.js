function solve(array) {
    let regex = /<td>(\w+)<\/td><td>([+-]?[0-9]+(?:.[0-9]+)?|-)<\/td><td>([+-]?[0-9]+(?:.[0-9]+)?|-)<\/td><td>([+-]?[0-9]+(?:.[0-9]+)?|-)<\/td>/g;
    let isData = false;
    let bestValue = Number.NEGATIVE_INFINITY;
    let output = "";
    for (let i = 2; i < array.length - 1; i++) {
        let match;
        while ((match = regex.exec(array[i])) !== null) {
            let stores = [match[2], match[3], match[4]].filter(s => s !== "-");
            if (stores.length !== 0) {
                isData = true;
                let sum = stores.map(Number).reduce((a, b) => a + b);
                if (sum > bestValue) {
                    bestValue = sum;
                    output = `${sum} = ${stores.join(" + ")}`;
                }
            }
        }
    }

    if (isData) {
        console.log(output)
    } else {
        console.log("no data");
    }
}

solve(
    [
        "<table>",
        "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
        "<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>",
        "<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>",
        "<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>",
        "<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>",
        "</table>",
    ]
);
console.log();
solve(
    [
        "<table>",
        "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
        "<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>",
        "</table>",
    ]
);
console.log();
solve(
    [
        "<table>",
        "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
        "<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>",
        "<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>",
        "<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>",
        "</table>",
    ]
);