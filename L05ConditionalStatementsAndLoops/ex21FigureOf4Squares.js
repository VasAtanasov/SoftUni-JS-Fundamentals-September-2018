function draw(n) {
    if (n === 2) {
        console.log("+".repeat(3));
    } else {
        let m = n % 2 === 0 ? n - 4 : n - 3;
        console.log("+" + ("-".repeat(n - 2)) + "+" + ("-".repeat(n - 2)) + "+");
        for (let j = 0; j < m / 2; j++) {
            console.log("|" + (" ".repeat(n - 2)) + "|" + (" ".repeat(n - 2)) + "|");
        }
        console.log("+" + ("-".repeat(n - 2)) + "+" + ("-".repeat(n - 2)) + "+");
        for (let j = 0; j < m / 2; j++) {
            console.log("|" + (" ".repeat(n - 2)) + "|" + (" ".repeat(n - 2)) + "|");
        }
        console.log("+" + ("-".repeat(n - 2)) + "+" + ("-".repeat(n - 2)) + "+");
    }
}

draw(6);