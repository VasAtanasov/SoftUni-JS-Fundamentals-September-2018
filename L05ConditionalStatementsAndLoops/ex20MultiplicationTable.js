function multiplicationTable(n) {
    let arr = [];
    for (let row = 0; row <= n; row++) {
        arr.push([0]);
        for (let col = 0; col <= n; col++) {
            arr[row][col] = col === 0 ? row : (row === 0 ? col : (row * col));
        }
    }
    arr[0][0] = "x";

    let html = "<table border='1'>\n";
    html += "  <tr>";
    for (let col = 0; col <= n; col++) {
        html += `<th>${arr[0][col]}</th>`;
    }
    html += '</tr>\n';


    for (let row = 1; row <= n; row++) {
        html += `  <tr><th>${arr[row][0]}</th>`;
        for (let col = 1; col <= n; col++) {
            html += `<td>${arr[row][col]}</td>`;
        }
        html += '</tr>\n';
    }
    html += "</table>";

    console.log(html);
}

multiplicationTable(5);