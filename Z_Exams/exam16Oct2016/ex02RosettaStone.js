function solve(array) {
    let n = Number(array.shift());
    let decodingMatrix = [];
    let letters = getLetters();

    for (let i = 0; i < n; i++) {
        let row = array.shift().split(/\s+/).map(Number);
        decodingMatrix.push(row);
    }

    let output = '';
    for (let row = 0; row < array.length; row++) {
        let inputRow = array[row].split(/\s+/).map(Number);
        for (let col = 0; col < inputRow.length; col++) {
            let decodeRow = row % decodingMatrix.length;
            let decodeCol = col % decodingMatrix[decodeRow].length;
            let decodeCellValue = decodingMatrix[decodeRow][decodeCol];
            let inputCellValue = inputRow[col];
            let index = (decodeCellValue + inputCellValue) % 27;
            output += letters[index];
        }
    }

    console.log(output);

    function getLetters() {
        let letters = [];
        letters.push(' ');
        for (let i = 1; i < 27; i++) {
            letters.push(String.fromCharCode(64 + i));
        }
        return letters;
    }
}


solve(
    [
        '2',
        '59 36',
        '82 52',
        '4 18 25 19 8',
        '4 2 8 2 18',
        '23 14 22 0 22',
        '2 17 13 19 20',
        '0 9 0 22 22'
    ]
);
console.log();
solve(
    [
        '2',
        '31 32',
        '74 37',
        '19 0 23 25',
        '22 3 12 17',
        '5 9 23 11',
        '12 18 10 22'
    ]
);