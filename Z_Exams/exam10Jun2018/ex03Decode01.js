function solve([start, end, rightWord, text]) {
    start = Number(start);
    end = Number(end);
    let countryRegex = /([A-Z][a-z]*[A-Z])/;
    let country = countryRegex.exec(text)[1];
    country = country.substring(0, start) +
        rightWord +
        country.substring(end + 1);
    country = country.substring(0,country.length-1) +
        country.substring(country.length-1).toLowerCase();

    let numberRegex = /([0-9]{3}(?:\.[0-9]+)?)/g;
    let string = text.match(numberRegex)
        .map(Number)
        .map(n => Math.ceil(n))
        .map(n => String.fromCharCode(n))
        .join('');

    string = string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();

    console.log(`${country} => ${string}`);
}

solve(
    [
        "5",
        "7",
        "riA",
        "BulgaziP 67 � sDf1d17ia aTe 1, 098 confin$4%#ed 117 likewise 114 103 it human 097 ity  Bulg35aria - VarnA railLery1a0s1 115 an unpacked as he",
    ]
);
console.log();
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
console.log();
