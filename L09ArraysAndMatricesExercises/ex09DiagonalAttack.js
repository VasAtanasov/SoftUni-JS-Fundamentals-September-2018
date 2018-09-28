function diagonalAttack(input) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    let matrix = input.map(row => row.split(/\s+/).map(Number));

    for (let i = 0; i < input.length; i++) {
        mainDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][input.length - 1 - i];
    }

    if (mainDiagonal === secondaryDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && col !== matrix[row].length - 1 - row) {
                    matrix[row][col] = mainDiagonal;
                }
            }
        }
    }

    matrix.forEach(row => console.log(row.join(" ")));
}

diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
);
console.log();
diagonalAttack(
    ['1 1 1',
        '1 1 1',
        '1 1 0']
);