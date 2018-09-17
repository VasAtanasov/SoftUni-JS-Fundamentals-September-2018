function solve(array) {
    let figures = {I: 0, L: 0, J: 0, O: 0, Z: 0, S: 0, T: 0};
    let matrix = array.map(row => row.split(""));
    let offset = getOffset();

    let keys = Object.keys(figures);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let o = offset[key];
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] === "o") {
                    if (isFit(row + o.secondRowOffset, col + o.secondColOffset) &&
                        isFit(row + o.thirdRowOffset, col + o.thirdColOffset) &&
                        isFit(row + o.forthRowOffset, col + o.forthColOffset)) {
                        figures[key] += 1;
                    }
                }
            }
        }
    }

    console.log(JSON.stringify(figures));

    function isFit(row, col) {
       return inRange(row, col) && isO(row, col);
    }

    function isO(row, col) {
        return matrix[row][col] === "o";

    }

    function inRange(row, col) {
        return row >= 0 && row < matrix.length &&
            col >= 0 && col < matrix[row].length;

    }

    function getOffset() {
        return {
            I: {
                secondRowOffset: 1,
                secondColOffset: 0,
                thirdRowOffset: 2,
                thirdColOffset: 0,
                forthRowOffset: 3,
                forthColOffset: 0
            },
            L: {
                secondRowOffset: 1,
                secondColOffset: 0,
                thirdRowOffset: 2,
                thirdColOffset: 0,
                forthRowOffset: 2,
                forthColOffset: 1
            },
            J: {
                secondRowOffset: 1,
                secondColOffset: 0,
                thirdRowOffset: 2,
                thirdColOffset: 0,
                forthRowOffset: 2,
                forthColOffset: -1
            },
            O: {
                secondRowOffset: 1,
                secondColOffset: 0,
                thirdRowOffset: 0,
                thirdColOffset: 1,
                forthRowOffset: 1,
                forthColOffset: 1
            },
            Z: {
                secondRowOffset: 0,
                secondColOffset: 1,
                thirdRowOffset: 1,
                thirdColOffset: 1,
                forthRowOffset: 1,
                forthColOffset: 2
            },
            S: {
                secondRowOffset: 1,
                secondColOffset: 0,
                thirdRowOffset: 0,
                thirdColOffset: 1,
                forthRowOffset: 1,
                forthColOffset: -1
            },
            T: {
                secondRowOffset: 0,
                secondColOffset: 1,
                thirdRowOffset: 0,
                thirdColOffset: 2,
                forthRowOffset: 1,
                forthColOffset: 1
            },
        };
    }
}

// solve(
//     [
//         "--o--o-",
//         "--oo-oo",
//         "ooo-oo-",
//         "-ooooo-",
//         "---oo--",
//     ]
// );
// console.log();
// solve(
//     [
//         "-oo",
//         "ooo",
//         "ooo",
//     ]
// );
solve(
    [
        "-------",
        "----oo-",
        "--ooo--",
        "--oo---",
        "-------",
    ]
);





