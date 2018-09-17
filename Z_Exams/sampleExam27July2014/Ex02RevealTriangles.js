function solve(array) {
    let matrix = [];
    array.forEach(row => matrix.push(row.split("")));
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let tip = array[row][col];
            if (array[row + 1] && array[row + 1][col - 1] && array[row + 1][col + 1]) {
                if (tip === array[row + 1][col] && tip === array[row + 1][col - 1] && tip === array[row + 1][col + 1]) {
                    matrix[row][col] = "*";
                    matrix[row + 1][col] = "*";
                    matrix[row + 1][col - 1] = "*";
                    matrix[row + 1][col + 1] = "*";
                }
            }
        }
    }
    matrix.forEach(row => console.log(row.join("")));
}

solve(
    [
        "abcdexgh",
        "bbbdxxxh",
        "abcxxxxx",
    ]
);
console.log();
solve(
    [
        "aa",
        "aaa",
        "aaaa",
        "aaaaa",
    ]
);
console.log();
solve(
    [
        "",
        "ax",
        "xxx",
        "b",
        "bbb",
        "bbbb",
    ]
);
console.log();
solve(
    [
        "dffdsgyefg",
        "ffffeyeee",
        "jbfffays",
        "dagfffdsss",
        "dfdfa",
        "dadaaadddf",
        "sdaaaaa",
        "daaaaaaasf",
    ]
);