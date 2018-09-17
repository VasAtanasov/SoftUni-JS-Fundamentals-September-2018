function solve([firstString, secondString]) {
    let firstNum = Number(firstString);
    let secondNum = Number(secondString);
    let [start, end] = [Math.min(firstNum, secondNum), Math.max(firstNum, secondNum)];

    let html = "<ul>\n";
    for (let num = start; num <= end; num++) {
        if (isDoubleNumber(num.toString())) {
            html += `<li><span class='rakiya'>${num}</span><a href="view.php?id=${num}>View</a></li>\n`;
        } else {
            html += `<li><span class='num'>${num}</span></li>\n`;
        }
    }
    html += "</ul>";

    console.log(html);

    function isDoubleNumber(number) {
        for (let i = 0; i < number.length - 1; i++) {
            let sequenceOne = number[i] + number[i + 1];
            for (let j = i + 2; j < number.length - 1; j++) {
                let sequenceTwo = number[j] + number[j + 1];
                if (sequenceOne === sequenceTwo) {
                    return true;
                }
            }
        }
        return false;
    }
}

solve(["1211", "1213"]);
console.log();
// solve(["55555", "55560"]);



