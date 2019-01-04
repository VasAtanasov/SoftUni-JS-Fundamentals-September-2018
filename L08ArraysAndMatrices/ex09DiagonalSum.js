function sumDiagonals(matrix) {
    let main = 0;
    let secondary = 0;
    for (let row = 0, col = matrix.length - 1; row < matrix.length; row++, col--) {
        main += matrix[row][row];
        secondary += matrix[row][col];
    }
    console.log(main + " " + secondary);
}

sumDiagonals([[20, 40],
    [10, 60]]);
sumDiagonals([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);