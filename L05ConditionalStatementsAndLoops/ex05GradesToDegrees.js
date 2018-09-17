function convertGradsToDegrees(grads) {
    let degrees = (grads / 400) * 360;

    if (degrees < 0) {
        return (degrees % 360) + 360;
    } else {
        return degrees % 360;
    }
}

console.log(convertGradsToDegrees(100));
console.log(convertGradsToDegrees(400));
console.log(convertGradsToDegrees(850));
console.log(convertGradsToDegrees(-50));