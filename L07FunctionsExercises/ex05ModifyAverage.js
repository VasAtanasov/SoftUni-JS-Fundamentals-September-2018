function modifyAverage(number) {
    while (getAverage(number) <= 5) {
        number += "9";
    }

    console.log(number);

    function getAverage(number) {
        let sum = number.toString()
            .split("")
            .map(n => Number(n))
            .reduce((a, b) => a + b);
        return sum / number.toString().length;
    }
}

modifyAverage(101);
modifyAverage(5835);