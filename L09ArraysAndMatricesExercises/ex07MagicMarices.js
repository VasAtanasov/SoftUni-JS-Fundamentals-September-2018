function isMagicMatrix(matrix) {
    let rows = [];
    let cols = [];
    for (let row = 0; row < matrix.length; row++) {
        rows.push(matrix[row].reduce((a, b) => a + b));
        for (let col = 0; col < matrix[row].length; col++) {
            if (cols.length < col + 1) {
                cols.push(0);
            }
            cols[col] += matrix[row][col];
        }
    }

    let allSums = rows.concat(cols);
    let uniqueSumsCount = allSums.filter((element, index) => allSums.indexOf(element) === index).length;
    if (uniqueSumsCount === 1) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isMagicMatrix(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
);


isMagicMatrix(
    [
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]
    ]
);

isMagicMatrix(
    [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]
)