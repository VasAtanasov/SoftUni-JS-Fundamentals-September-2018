function chessBoard(n) {
    let result = '<div class="chessboard">\n';

    for (let row = 0; row < n; row++) {
        let firstColor = 'black';
        let secondColor = 'white';
        result += '  <div>\n';
        if (row % 2 !== 0) {
            firstColor = 'white';
            secondColor = 'black';
        }
        for (let col = 0; col < n; col++) {
            let color = col % 2 === 0 ? firstColor : secondColor;
            result += `    <span class="${color}"></span>\n`;
        }
        result += '  </div>\n';
    }
    result += '</div>\n';

    console.log(result);
}

chessBoard(10);