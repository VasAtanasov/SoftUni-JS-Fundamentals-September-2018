function solve(primary, secondary, overlay, startCoordinates) {
    let invert = (pE, sE) => sE === 1 ? (pE === 0 ? 1 : 0) : pE;
    let inRange = (matrix, row, col) => row >= 0 && row < matrix.length
        && col >= 0 && col < matrix[row].length;
    processOverlay(primary, secondary, overlay);

    let moves = 1;
    let [row, col] = startCoordinates;
    let offset = {
        row: [1, -1, 0, 0],
        col: [0, 0, 1, -1]
    };

    while (true) {
        primary[row][col] = 1;
        let isDead = true;

        for (let i = 0; i < 4; i++) {
            let nextRow = row + offset.row[i];
            let nextCol = col + offset.col[i];
            if (inRange(primary, nextRow, nextCol) && primary[nextRow][nextCol] === 0) {
                row = nextRow;
                col = nextCol;
                moves++;
                isDead = false;
                break
            }
        }

        let obj = isExit(primary, row, col);

        if (obj.isExit) {
            console.log(moves);
            console.log(obj.place);
            return;
        }

        if (isDead) {
            console.log(moves);
            console.log(`Dead end ${getQuadrant(primary, row, col)}`);
            return;
        }
    }

    function isExit(primary, row, col) {
        let isExit = {isExit: false, place: ""};
        if (row === primary.length - 1) {
            isExit.isExit = true;
            isExit.place = "Bottom";
        } else if (row === 0) {
            isExit.isExit = true;
            isExit.place = "Top";
        } else if (col === primary[row].length) {
            isExit.isExit = true;
            isExit.place = "Right";
        } else if (col === 0) {
            isExit.isExit = true;
            isExit.place = "Left";
        }

        return isExit;
    }

    function getQuadrant(primary, row, col) {
        let rowsMiddle = primary.length / 2;
        let colsMiddle = primary[row].length / 2;
        if (row < rowsMiddle && col < colsMiddle) {
            return 2;
        } else if (row < rowsMiddle && col >= colsMiddle) {
            return 1;
        } else if (row >= rowsMiddle && col < colsMiddle) {
            return 3;
        }
        return 4;
    }


    function processOverlay(primary, secondary, overlay) {
        for (let element of overlay) {
            let [oRow, oCol] = element;
            for (let row = 0; row < secondary.length; row++) {
                for (let col = 0; col < secondary[row].length; col++) {
                    let pRow = row + oRow;
                    let pCol = col + oCol;
                    if (inRange(primary, pRow, pCol)) {
                        let pE = primary[pRow][pCol];
                        let sE = secondary[row][col];
                        primary[pRow][pCol] = invert(pE, sE);
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