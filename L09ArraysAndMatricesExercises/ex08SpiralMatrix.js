function printSpiralOrder(rows, cols) {
    let top = 0, bottom = rows - 1;
    let left = 0, right = cols - 1;
    let matrix = getEmptyMatrix(rows);
    let filler = 1;

    while (true) {
        if (left > right) {
            break;
        }

        // print top row
        for (let i = left; i <= right; i++) {
            matrix[top][i] = filler++;
        }
        top++;

        if (top > bottom) {
            break;
        }

        // print right column
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = filler++;
        }
        right--;

        if (left > right) {
            break;
        }

        // print bottom row
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = filler++;
        }
        bottom--;

        if (top > bottom) {
            break;
        }

        // print left column
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = filler++;
        }
        left++;
    }

    matrix.forEach(row => console.log(row.join(" ")));

    function getEmptyMatrix(rows) {
        let matrix = [];
        for (let row = 0; row < rows; row++) {
            matrix.push([]);
        }
        return matrix;
    }
}

printSpiralOrder(5, 5);
console.log();
printSpiralOrder(3, 3);