function solve(array) {
    let professions = {
        Specialized: ["Programming", "Hardware maintenance", "Cooking", "Translating", "Designing", 0],
        Average: ["Driving", "Managing", "Fishing", "Gardening", 0],
        Clumsy: ["Singing", "Accounting", "Teaching", "Exam-Making", "Acting", "Writing", "Lecturing", "Modeling", "Nursing", 0]
    };

    let goldCollected = 0;

    for (const element of array) {
        let [profession, gold] = element.split(' : ');
        gold = Number(gold);

        if (professions.Specialized.includes(profession) && gold >= 200) {
            increment(professions.Specialized);
            goldCollected += (gold * 0.8);

            if (getCustomerCount(professions.Specialized) % 2 === 0) {
                goldCollected += 200;
            }

        } else if (professions.Average.includes(profession)) {
            increment(professions.Average);
            goldCollected += gold;

        } else if (professions.Clumsy.includes(profession)) {
            increment(professions.Clumsy);

            if (getCustomerCount(professions.Clumsy) % 2 === 0) {
                gold *= 0.95
            } else if (getCustomerCount(professions.Clumsy) % 3 === 0) {
                gold *= 0.9
            }
            goldCollected += gold;
        }
    }

    console.log(`Final sum: ${goldCollected.toFixed(2)}`);

    if (goldCollected < 1000) {
        console.log(`Mariyka need to earn ${(1000 - goldCollected).toFixed(2)} gold more to continue in the next task.`);
    } else {
        console.log(`Mariyka earned ${(goldCollected - 1000).toFixed(2)} gold more.`);
    }

    function increment(array) {
        array[array.length - 1]++;
    }

    function getCustomerCount(array) {
        return array[array.length - 1];
    }
}

solve(
    [
        "Programming : 500",
        "Driving : 243",
        "Singing : 100",
        "Cooking : 199"
    ]
);
console.log();
solve(
    [
        "Programming : 500",
        "Driving : 243.55",
        "Acting : 200",
        "Singing : 100",
        "Cooking : 199",
        "Hardware maintenance : 800",
        "Gardening : 700",
        "Programming : 500"]
);