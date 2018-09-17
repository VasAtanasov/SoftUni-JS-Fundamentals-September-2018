function solve([numOne, numTwo]) {
    [start, end] = [Math.min(numOne, numTwo), Math.max(numOne, numTwo)];
    let fib = getFibonacci(end);
    let html = "<table>\n";
    html += `<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n`;

    for (let num = start; num <= end; num++) {
        html += `<tr><td>${num}</td><td>${num * num}</td><td>${fib.includes(num) ? "yes" : "no"}</td></tr>\n`
    }

    html += "</table>";
    return html;

    function getFibonacci(end) {
        const result = [0, 1];
        for (let i = 2; i <= end; i++) {
            result.push(result[i - 2] + result[i - 1]);
            if (result[i] > end) {
                break;
            }
        }
        return result;
    }
}

console.log(solve([2, 6]));
console.log();
console.log(solve([55, 56]));
