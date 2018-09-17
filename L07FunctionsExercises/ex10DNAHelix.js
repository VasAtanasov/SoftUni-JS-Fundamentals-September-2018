function draw(number) {
    let sequence = "ATCGTTAGGG";
    for (let i = 0, line = 0, charIndex = 0; i < number; i++, line = (line + 1) % 4, charIndex %= 10) {
        switch (line) {
            case 0:
                console.log(`**${sequence[charIndex++]}${sequence[charIndex++]}**`);
                break;
            case 1:
                console.log(`*${sequence[charIndex++]}--${sequence[charIndex++]}*`);
                break;
            case 2:
                console.log(`${sequence[charIndex++]}----${sequence[charIndex++]}`);
                break;
            case 3:
                console.log(`*${sequence[charIndex++]}--${sequence[charIndex++]}*`);
                break;
        }
    }
}

draw(10);