function solve([bill, mood]) {
    bill = Number(bill);
    let tip;

    switch (mood) {
        case "happy":
            tip = bill * 0.10;
            break;
        case "married":
            tip = bill * (0.05 / 100);
            break;
        case "drunk":
            let percent = bill * 0.15;
            let firstDigit = Number(percent.toString()[0]);
            tip = Math.pow(percent, firstDigit);
            break;
        default:
            tip = bill * 0.05;
            break;
    }

    console.log(tip.toFixed(2));
}

solve(
    [
        "120.44",
        "happy",
    ]
);
console.log();
solve(
    [
        "1230.83",
        "drunk",
    ]
);
console.log();
solve(
    [
        "716.00",
        "married",
    ]
);






