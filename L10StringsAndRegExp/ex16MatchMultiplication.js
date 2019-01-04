function match(text) {
    const REGEX = /(-?[0-9]+)\s*\*\s*(-?[0-9](?:.[0-9]+)?)/g;
    let match;
    while (match = REGEX.exec(text)) {
        text = text.replace(match[0], Number(match[1] * Number(match[2])));
    }
    console.log(text)
}

match("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).");

function performMultiplications(text) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1) * Number(num2));
    console.log(text);
}

performMultiplications("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).");