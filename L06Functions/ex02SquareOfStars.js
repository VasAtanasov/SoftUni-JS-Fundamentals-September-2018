function drawSquare(size = 5) {
    for (let i = 0; i < size; i++) {
        console.log("* ".repeat(size));
    }
}

drawSquare(1);
drawSquare(2);
drawSquare(5);
drawSquare();