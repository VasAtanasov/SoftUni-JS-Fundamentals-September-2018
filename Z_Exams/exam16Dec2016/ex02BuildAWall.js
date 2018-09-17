function solve(heights) {
    heights = heights.map(Number);
    const MAX_HEIGHT = 30;
    const CUBIC_YARDS_CONCRETE_PER_FEET = 195;
    const PESOS_PER_CUBIC_YARD = 1900;

    let concretePerDay = [];

    while (true) {
        heights = heights.filter(x => x !== MAX_HEIGHT);
        let sectionsLeft = heights.length;
        if (sectionsLeft === 0) {
            break
        }
        concretePerDay.push(sectionsLeft * CUBIC_YARDS_CONCRETE_PER_FEET);
        heights = heights.map(x => x + 1);
    }

    console.log(concretePerDay.join(", "));
    let totalMoney = concretePerDay.reduce((a, b) => a + b) * PESOS_PER_CUBIC_YARD;
    console.log(totalMoney + " pesos");
}


solve([21, 25, 28]);
console.log();
solve([17]);
console.log();
solve([17, 22, 17, 19, 17]);