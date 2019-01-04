function cook(parameters) {
    let operations = {
        "chop": x => x / 2,
        "dice": x => Math.sqrt(x),
        "spice": x => x + 1,
        "bake": x => x * 3,
        "fillet": x => x * 0.8,
    };
    let number = Number(parameters[0]);
    for (let i = 1; i < parameters.length; i++) {
        let operation = parameters[i];
        number = operations[operation](number);
        console.log(number);
    }
}

cook([32, "chop", 'chop', 'chop', 'chop', 'chop']);
cook([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);