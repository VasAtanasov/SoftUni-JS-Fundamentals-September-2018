function solve([message]) {
    let regex = /[0-9]+/g;

    let hexNumbers = [];
    let match;
    while ((match = regex.exec(message)) !== null) {
        let hex = "0x" +  Number(match[0]).toString(16).padStart(4, "0").toUpperCase();
        hexNumbers.push(hex);
    }
    console.log(hexNumbers.join("-"))
}

solve(
    [
        "5tffwj(//*7837xzc2---34rlxXP%$”.",
    ]
);
console.log();
solve(
    [
        "482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312",
    ]
);
console.log();
solve(
    [
        "20",
    ]
);