function solve(array) {
    let kompots = {
        peach: 0.0,
        plum: 0.0,
        cherry: 0.0,
        other: 0.0
    };

    for (const element of array) {
        let [fruit, weight] = element.split(/\s+/);
        if (kompots.hasOwnProperty(fruit)) {
            kompots[fruit] += Number(weight) * 1000;
        } else {
            kompots.other += Number(weight) * 1000;
        }
    }

    kompots.cherry = Math.trunc((kompots.cherry / 9) / 25);
    console.log(`Cherry kompots: ${kompots.cherry}`);
    kompots.peach = Math.trunc((kompots.peach / 140) / 2.5);
    console.log(`Peach kompots: ${kompots.peach}`);
    kompots.plum = Math.trunc((kompots.plum / 20) / 10);
    console.log(`Plum kompots: ${kompots.plum}`);
    kompots.other = kompots.other * 0.2 / 1000;
    console.log(`Rakiya liters: ${kompots.other.toFixed(2)}`);
}

solve(
    [
        'cherry 1.2',
        'peach 2.2',
        'plum 5.2',
        'peach 0.1',
        'cherry 0.2',
        'cherry 5.0',
        'plum 10',
        'cherry 20.0',
        'papaya 20'
    ]
);