function solve(matrix) {
    let bombs = matrix.pop().split(/\s+/);
    matrix = matrix.map(row => row.split(/\s+/).map(Number));
    let damage = 0;
    let bunniesKilled = 0;

    for (const bomb of bombs) {
        let [bombRow, bombCol] = bomb.split(",").map(Number);
        if (matrix[bombRow][bombCol] > 0) {
            let value = matrix[bombRow][bombCol];
            matrix[bombRow][bombCol] = 0;
            damage += value;
            bunniesKilled++;

            let startRow = Math.max(0, bombRow - 1);
            let endRow = Math.min(matrix.length - 1, bombRow + 1);
            let startCol = Math.max(0, bombCol - 1);
            for (let row = startRow; row <= endRow; row++) {
                let endCol = Math.min(matrix[row].length - 1, bombCol +1);
                for (let col = startCol; col <= endCol; col++) {
                    matrix[row][col] = Math.max(0, matrix[row][col] - value);
                }
            }
        }
    }

    matrix.forEach(row => {
        bunniesKilled += row.filter(x => x !== 0).length;
        damage += row.reduce((a, b) => a + b);
    });

    console.log(damage);
    console.log(bunniesKilled);
}

solve(
    [
        "10 10 10",
        "10 10 10",
        "10 10 10",
        "0,0"
    ]
);

console.log();
solve(
    [
        "5 10 15 20",
        "10 10 10 10",
        "10 15 10 10",
        "10 10 10 10",
        "2,2 0,1"
    ]
);





