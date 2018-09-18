function getTriangleArea(a, b, c) {
    let semiPerimeter = (a + b + c) / 2;
    return Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
}

console.log(getTriangleArea(2, 3.5, 4));
