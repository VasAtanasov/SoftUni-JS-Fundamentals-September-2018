function stringOfNumbers(number) {
    let string = "1";
    for (let i = 2; i <= number; i++) {
        string += i;
    }
    console.log(string);
}

stringOfNumbers('11');