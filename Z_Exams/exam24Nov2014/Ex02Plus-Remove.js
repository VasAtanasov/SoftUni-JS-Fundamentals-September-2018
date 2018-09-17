function solve(array) {
    let matrix = array.map(line => line.split("").filter(str => str !== ""));
    let rowOffset = [0, 1, 2, 1, 1];
    let colOffset = [0, 0, 0, -1, 1];
    let cells = [];

    for (let row = 0; row < matrix.length - 2; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let symbol = matrix[row][col];
            if (isPlus(row, col, symbol.toLowerCase())) {
                for (let i = 0; i < rowOffset.length; i++) {
                    cells.push(`${row + rowOffset[i]}${col + colOffset[i]}`);
                }
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        let line = "";
        for (let col = 0; col < matrix[row].length; col++) {
            if (!cells.includes(`${row}${col}`)) {
                line += matrix[row][col];
            }
        }
        console.log(line)
    }


    function isPlus(row, col, symbol) {
        for (let i = 0; i < rowOffset.length; i++) {
            if (!isInside(row + rowOffset[i], col + colOffset[i]) ||
                matrix[row + rowOffset[i]][col + colOffset[i]].toLowerCase() !== symbol) {
                return false;
            }
        }
        return true;
    }

    function isInside(row, col) {
        return row >= 0 && row < matrix.length &&
            col >= 0 && col < matrix[row].length;
    }

}

solve(
    [
        "ab**l5",
        "bBb*555",
        "absh*5",
        "ttHHH",
        "ttth",
    ]
);
console.log();
solve(
    [
        "888**t*",
        "8888ttt",
        "888ttt<<",
        "*8*0t>>hi",

    ]
);
console.log();
solve(
    [
        "@s@a@p@una",
        "p@@@@@@@@dna",
        "@6@t@*@*ego",
        "vdig*****ne6",
        "li??^*^*",
    ]
);