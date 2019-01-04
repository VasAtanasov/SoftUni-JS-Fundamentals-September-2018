function drawTriangle(n) {
    for (let i = 1; i < n; i++) {
        console.log("*".repeat(i));
    }
    console.log("*".repeat(n));
    for (let i = n - 1; i > 0; i--) {
        console.log("*".repeat(i));
    }
}



drawTriangle(1);
drawTriangle(2);
drawTriangle(5);