function solve(array) {
    const MEDENKA_DAMAGE = 60;
    let vitkor = {name: "Vitkor", damageDealt: 0, attackCount: 0, lastDamage: -1};
    let naskor = {name: "Naskor", damageDealt: 0, attackCount: 0, lastDamage: -1};


    for (let i = 0; i < array.length; i++) {
        let [damage, type] = array[i].split(/\s+/);
        damage = Number(damage);
        switch (type) {
            case "dark":
                if (naskor.lastDamage === damage) {
                    naskor.attackCount++;
                } else {
                    naskor.attackCount = 1;
                    naskor.lastDamage = damage;
                }
                damage = naskor.attackCount % 5 === 0 ? damage * 4.5 : damage;
                naskor.damageDealt += (damage * MEDENKA_DAMAGE);
                break;
            case "white":
                if (vitkor.lastDamage === damage) {
                    vitkor.attackCount++;
                } else {
                    vitkor.attackCount = 1;
                    vitkor.lastDamage = damage;
                }
                damage = vitkor.attackCount % 2 === 0 ? damage * 2.75 : damage;
                vitkor.damageDealt += (damage * MEDENKA_DAMAGE);
                break
        }
    }

    if (vitkor.damageDealt > naskor.damageDealt) {
        console.log(`Winner - ${vitkor.name}`);
        console.log(`Damage - ${vitkor.damageDealt}`);
    } else {
        console.log(`Winner - ${naskor.name}`);
        console.log(`Damage - ${naskor.damageDealt}`);
    }
}

// solve(
//     [
//         "5 white medenkas",
//         "5 dark medenkas",
//         "4 white medenkas",
//     ]
// );
console.log();
solve(
    [
        "2 dark medenkas",
        "1 white medenkas",
        "2 dark medenkas",
        "2 dark medenkas",
        "15 white medenkas",
        "2 dark medenkas",
        "2 dark medenkas",
    ]
);