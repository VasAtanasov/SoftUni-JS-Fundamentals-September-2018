function solve(array) {
    let heroes = [];

    for (const element of array) {
        let args = element.split(" / ");
        let heroName = args[0];
        let level = Number(args[1]);
        let items = [];
        if (args.length > 2) {
            items = args[2].split(", ")
        }
        let hero = {
            name: heroName,
            level: level,
            items: items
        };

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

solve(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
);




