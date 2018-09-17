function gerExpenses(fightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCount = fightCount / 2;
    let swordCount = fightCount / 3;
    let shieldCount = fightCount / 6;
    let armorCount = fightCount / 12;

    let totalExpenses = (Math.trunc(helmetCount) * helmetPrice) +
        (Math.trunc(swordCount) * swordPrice) +
        (Math.trunc(shieldCount) * shieldPrice) +
        (Math.trunc(armorCount) * armorPrice);

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gerExpenses(7, 2, 3, 4, 5);
gerExpenses(23, 12.50, 21.50, 40, 200);