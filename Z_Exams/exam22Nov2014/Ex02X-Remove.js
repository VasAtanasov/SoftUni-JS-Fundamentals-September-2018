function solve(array) {
    let matrix = array.map(line => line.split("").filter(str => str !== ""));
    let rowOffset = [0, 0, 1, 2, 2];
    let colOffset = [0, 2, 1, 0, 2];
    let cells = [];

    for (let row = 0; row < matrix.length - 2; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let symbol = matrix[row][col];
            if (isX(row, col, symbol.toLowerCase())) {
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


    function isX(row, col, symbol) {
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

//
// solve(
//     [
//         "abnbjs",
//         "xoBab",
//         "Abmbh",
//         "aabab",
//         "ababvvvv",
//     ]
// );
// console.log();
// solve(
//     [
//         "8888888",
//         "08*8*80",
//         "808*888",
//         "0**8*8?",
//     ]
// );
// console.log();
// solve(
//     [
//         "^u^",
//         "j^l^a",
//         "^w^WoWl",
//         "adw1w6",
//         "(WdWoWgPoop)",
//     ]
// );
// console.log();
// solve(
//     [
//         "puoUdai",
//         "miU",
//         "ausupirina",
//         "8n8i8",
//         "m8o8a",
//         "8l8o860",
//         "M8i8",
//         "8e8!8?!",
//     ]
// );

solve(
    [
        "****************",
        "****************",
        "****************",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "0o0o0ooOOO0o0o)O0o0o0o0o0o",
        "o0o0o0o0o0o0o0o0oo0o00Ooo0",
        "o0o0oOOOOooo0o0o00o0o000ooo",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "****************",
        "****************",
        "****************",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "0o0o0ooOOO0o0o)O0o0o0o0o0o",
        "o0o0o0o0o0o0o0o0oo0o00Ooo0",
        "o0o0oOOOOooo0o0o00o0o000ooo",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "****************",
        "****************",
        "****************",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "0o0o0ooOOO0o0o)O0o0o0o0o0o",
        "o0o0o0o0o0o0o0o0oo0o00Ooo0",
        "o0o0oOOOOooo0o0o00o0o000ooo",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "****************",
        "****************",
        "****************",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "0o0o0ooOOO0o0o)O0o0o0o0o0o",
        "o0o0o0o0o0o0o0o0oo0o00Ooo0",
        "o0o0oOOOOooo0o0o00o0o000ooo",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "****************",
        "****************",
        "****************",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "dDDDddDdDDddDDDDDDDDDdDDD",
        "0o0o0ooOOO0o0o)O0o0o0o0o0o",
        "o0o0o0o0o0o0o0o0oo0o00Ooo0",
        "o0o0oOOOOooo0o0o00o0o000ooo",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "bBbbbBBbbbBBbbbbBbbBbBbbBBB",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "rRrrrRRRrrRrRRrrRRRRRRrrrRrrrRrr",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
        "eEeeEeeEeeEeeEeeeeEEeeEEeeEeeEee",
    ]
);