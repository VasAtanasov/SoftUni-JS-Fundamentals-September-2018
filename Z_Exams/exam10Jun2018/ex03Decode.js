function solve([start, end, rightWord, text]) {
    let countryRegex = /([A-Z][a-z]*[A-Z])/;
    let numberRegex = /([0-9]{3}(?:\.[0-9]+)?)/g;

    let countryMatch = countryRegex.exec(text);

    let country = countryMatch[1]
        .replace(countryMatch[1].substring(+start, +end + 1), rightWord)
        .toLowerCase();

    let decodedNumbers = text.match(numberRegex)
        .map(x => Math.ceil(x))
        .map(x => String.fromCharCode(x))
        .join("");

    console.log(`${toTitleCase(country)} => ${toTitleCase(decodedNumbers)}`);

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    }
}

solve(
    [
        "3",
        "5",
        "gar",
        "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"
    ]
);
console.log();
solve(
    [
        "1",
        "4",
        "loveni",
        "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"
    ]
);