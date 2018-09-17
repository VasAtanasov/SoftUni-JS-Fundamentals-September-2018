function solve(array) {
    let professions = {
        specialized: ["Programming", "Hardware maintenance", "Cooking", "Translating", "Designing"],
        average: ["Driving", "Managing", "Fishing", "Gardening"],
        clumsy: ["Singing", "Accounting", "Teaching", "Exam-Making", "Acting", "Writing", "Lecturing", "Modeling", "Nursing"]
    };
    let goldEarned = 0;
    let specialJobs = 0;
    let clumsyJobs = 0;

    for (let i = 0; i < array.length; i++) {
        let [profession, gold] = array[i].split(" : ").filter(String);
        gold = Number(gold);
        let bonusGold = 0;
        if (professions.specialized.includes(profession) && gold >= 200) {
            specialJobs++;
            bonusGold = specialJobs % 2 === 0 ?  200 : 0;
            gold *= 0.8;
            goldEarned += (gold + bonusGold);
        } else if (professions.average.includes(profession)) {
            goldEarned += gold;
        } else if (professions.clumsy.includes(profession)) {
            clumsyJobs++;
            if (clumsyJobs % 2 === 0) {
                gold *= 0.95
            }  else if (clumsyJobs % 3 === 0) {
                gold *= 0.9
            }
            goldEarned += gold;
        }
    }

    console.log(`Final sum: ${goldEarned.toFixed(2)}`);
    if (goldEarned < 1000) {
        let diff = 1000 - goldEarned;
        console.log(`Mariyka need to earn ${diff.toFixed(2)} gold more to continue in the next task.`);
    } else {
        let diff = goldEarned - 1000;
        console.log(`Mariyka earned ${diff.toFixed(2)} gold more.`)
    }
}

solve(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
console.log();
solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);