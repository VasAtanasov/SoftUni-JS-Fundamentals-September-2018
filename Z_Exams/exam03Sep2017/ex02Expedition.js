function solve(primaryMatrix, secondaryMatrix, overlay, startCoordinates) {
    decipherPrimaryMatrix();
    let [row, col, moves] = [startCoordinates[0], startCoordinates[1], 1];
    let queue = [];
    queue.push({row: row, col: col});

    while (queue.length !== 0) {
        let cell = queue.shift();
        let possibleMoves = [];
        possibleMoves.push({row: cell.row + 1, col: cell.col});
        possibleMoves.push({row: cell.row - 1, col: cell.col});
        possibleMoves.push({row: cell.row, col: cell.col - 1});
        possibleMoves.push({row: cell.row, col: cell.col + 1});
        for (let next of possibleMoves) {
            let [nextRow, nextCol] = Object.values(next);
            if (inRange(nextRow, nextCol) && primaryMatrix[nextRow][nextCol] === 0) {
                queue.push(next);
                primaryMatrix[cell.row][cell.col] = 1;
                moves++;
                row = nextRow;
                col = nextCol;
            }
        }
    }

    console.log(moves);
    if (row === primaryMatrix.length - 1) {
        console.log("Bottom");
    } else if (row === 0) {
        console.log("Top");
    } else if (col === 0) {
        console.log("Left");
    } else if (col === primaryMatrix[row].length - 1) {
        console.log("Right");
    } else {
        console.log(`Dead end ${getQuadrant(row, col)}`);
    }

    function getQuadrant(row, col) {
        let halfRow = primaryMatrix.length / 2;
        let halfCol = primaryMatrix[row].length / 2;
        if (row < halfRow && col < halfCol) {
            return 2;
        } else if (row < halfRow && col >= halfCol) {
            return 1;
        } else if (row >= halfRow && col < halfCol) {
            return 3;
        } else {
            return 4;
        }
    }

    function inRange(row, col) {
        return row >= 0 && row < primaryMatrix.length &&
            col >= 0 && col < primaryMatrix[row].length;
    }

    function decipherPrimaryMatrix() {
        for (let i = 0; i < overlay.length; i++) {
            let [rowOffset, colOffset] = overlay[i];
            for (let row = 0; row < secondaryMatrix.length; row++) {
                for (let col = 0; col < secondaryMatrix[row].length; col++) {
                    let primaryRow = row + rowOffset;
                    let primaryCol = col + colOffset;
                    if (secondaryMatrix[row][col] === 1 && inRange(primaryRow, primaryCol)) {
                        primaryMatrix[primaryRow][primaryCol] ^= 1;
                    }
                }
            }
        }
    }
}

solve(
    [
        [1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]
    ],
    [
        [1, 1],
        [2, 3],
        [5, 3]
    ],
    [0, 2]
);
console.log();
solve(
    [
        [1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0]
    ],
    [
        [0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1]
    ],
    [
        [0, 0],
        [2, 1],
        [1, 0]
    ],
    [2, 0]
);