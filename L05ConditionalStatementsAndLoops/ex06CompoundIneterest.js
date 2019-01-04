function calculate(parametersArray) {
    let p = parametersArray[0];
    let r = parametersArray[1];
    let n = 12 / parametersArray[2];
    let t = parametersArray[3];

    let F = (p * Math.pow((1 + (r / (n * 100))), (n * t)));

    console.log(F.toFixed(2));
}

calculate([1500, 4.3, 3, 6]);
calculate([100000, 5, 12, 25]);