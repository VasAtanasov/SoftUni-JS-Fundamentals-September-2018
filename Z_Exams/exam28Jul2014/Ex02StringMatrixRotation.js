function solve(array) {
    let degrees = array.shift().replace(/[^0-9]/g, '') % 360;
    let maxLength = array.map(line => line.length).reduce((a, b) => Math.max(a, b));
    let matrix = [];

    array.forEach(line => {
        let row = line.split("");
        while (row.length < maxLength) {
            row.push(" ");
        }
        matrix.push(row);
    });

    while (degrees > 0) {
        matrix = rotateMatrix90Degrees(matrix);
        degrees -= 90;
    }

    matrix.forEach(row => console.log(row.join("")));

    function rotateMatrix90Degrees(matrix) {
        let rowCount = matrix.length - 1;
        let colCount = matrix[0].length - 1;
        let rotated = [];
        for (let col = 0; col <= colCount; col++) {
            rotated[col] = [];
            for (let row = 0; row <= rowCount; row++) {
                rotated[col][rowCount - row] = matrix[row][col];
            }
        }
        return rotated;
    }

}

solve(
    [
        "Rotate(90)",
        "hello",
        "softuni",
        "exam",
    ]
);
console.log();
solve(
    [
        "Rotate(720)",
        "js",
        "exam",
    ]
);



