function solve(inputMatrix, arrayOfCommands) {
    let matrix = parseMatrix();
    let commands = {
        "breeze": function (row) {
            for (let col = 0; col < matrix[row].length; col++) {
                matrix[row][col] = Math.max(0, matrix[row][col] - 15);
            }
        },
        "gale": function (col) {
            for (let row = 0; row < matrix.length; row++) {
                matrix[row][col] = Math.max(0, matrix[row][col] - 20);
            }
        },
        "smog": function (value) {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    matrix[row][col] += value;
                }
            }
        }
    };

    for (const stringCommand of arrayOfCommands) {
        let [command, value] = stringCommand.split(/\s+/);
        commands[command](Number(value));
    }

    let pollutedCells = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] >= 50) {
                pollutedCells.push(`[${row}-${col}]`);
            }
        }
    }

    if (pollutedCells.length === 0) {
        console.log("No polluted areas")
    } else {
        console.log(`Polluted areas: ${pollutedCells.join(", ")}`);
    }

    function parseMatrix() {
        let matrix = [];
        for (let row = 0; row < inputMatrix.length; row++) {
            matrix.push(inputMatrix[row].split(/\s+/).map(Number));
        }
        return matrix;
    }
}

solve(
    [
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);
console.log();
solve(
    [
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]
);
console.log();
solve(
    [
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
);