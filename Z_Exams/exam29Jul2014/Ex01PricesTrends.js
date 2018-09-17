function solve(array) {
    array = array
        .filter(str => str !== "")
        .map(Number)
        .map(number => number.toFixed(2));

    let html = `<table>\n<tr><th>Price</th><th>Trend</th></tr>\n`;
    if (array.length > 0) {
        html += `<tr><td>${array[0]}</td><td><img src="fixed.png"/></td></td>\n`;
        for (let i = 1; i < array.length; i++) {
            let trend = "fixed";
            let current = Number(array[i]);
            let previous = Number(array[i - 1]);
            if (current > previous) {
                trend = "up";
            } else if (current < previous) {
                trend = "down";
            }
            html += `<tr><td>${array[i]}</td><td><img src="${trend}.png"/></td></td>\n`
        }
    }
    html += "</table>";
    console.log(html);
}

solve(
    [
        "50",
        "60",
    ]
);
console.log();
solve(
    [
        "36.333",
        "36.5",
        "37.019",
        "35.4",
        "35",
        "35.001",
        "36.225",
    ]
);
console.log();
solve(
    [
        "1.33",
        "1.35",
        "2.25",
        "13.00",
        "0.5",
        "0.51",
        "0.5",
        "0.5",
        "0.33",
        "1.05",
        "1.346",
        "20",
        "900",
        "1500.1",
        "1500.10",
        "2000",
    ]
);