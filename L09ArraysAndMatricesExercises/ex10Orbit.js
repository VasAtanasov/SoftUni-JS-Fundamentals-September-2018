function orbit([rows, cols, starRow, starCol]) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    matrix.forEach(rows => console.log(rows.join(" ")));
}

orbit([4, 4, 0, 0]);
console.log();
orbit([5, 5, 2, 2]);
console.log();
orbit([3, 3, 2, 2]);