function solve(objArray, battleArray) {
    const LOSSES = "<<losses>>";
    const WINS = "<<wins>>";
    const ARMY = "<<army>>";
    let kingdoms = {};
    processKingdoms();
    processBattles();

    let winner = Object.keys(kingdoms)
        .sort((kingdom1, kingdom2) => {
            let index = getGeneralsSats(kingdom2, WINS) - getGeneralsSats(kingdom1, WINS);
            index = index !== 0 ? index : getGeneralsSats(kingdom1, LOSSES) - getGeneralsSats(kingdom2, LOSSES);
            return index !== 0 ? index : kingdom1.localeCompare(kingdom2);
        })[0];

    if (kingdoms.hasOwnProperty(winner)) {
        console.log(`Winner: ${winner}`);
        Object.keys(kingdoms[winner])
            .sort((general1, general2) => kingdoms[winner][general2][ARMY] - kingdoms[winner][general1][ARMY])
            .forEach(general => {
                console.log(`/\\general: ${general}`);
                console.log(`---army: ${kingdoms[winner][general][ARMY]}`);
                console.log(`---wins: ${kingdoms[winner][general][WINS]}`);
                console.log(`---losses: ${kingdoms[winner][general][LOSSES]}`);
            });
    }

    function getGeneralsSats(kingdom, stat) {
        return Object.values(kingdoms[kingdom]).map(general => general[stat]).reduce((a, b) => a + b);
    }

    function processBattles() {
        for (const array of battleArray) {
            let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = array;
            let attackingArmy = kingdoms[attackingKingdom][attackingGeneral][ARMY];
            let defendingArmy = kingdoms[defendingKingdom][defendingGeneral][ARMY];
            if (attackingKingdom === defendingKingdom || attackingArmy === defendingArmy) {
                continue;
            }

            if (attackingArmy > defendingArmy) {
                kingdoms[attackingKingdom][attackingGeneral][ARMY] = Math.floor(attackingArmy * 1.1);
                kingdoms[defendingKingdom][defendingGeneral][ARMY] = Math.floor(defendingArmy * 0.9);
                kingdoms[attackingKingdom][attackingGeneral][WINS]++;
                kingdoms[defendingKingdom][defendingGeneral][LOSSES]++;
            } else if (attackingArmy < defendingArmy) {
                kingdoms[attackingKingdom][attackingGeneral][ARMY] = Math.floor(attackingArmy * 0.9);
                kingdoms[defendingKingdom][defendingGeneral][ARMY] = Math.floor(defendingArmy * 1.1);
                kingdoms[attackingKingdom][attackingGeneral][LOSSES]++;
                kingdoms[defendingKingdom][defendingGeneral][WINS]++;
            }
        }
    }

    function processKingdoms() {
        for (const obj of objArray) {
            if (!kingdoms.hasOwnProperty(obj.kingdom)) {
                kingdoms[obj.kingdom] = {};
            }
            if (!kingdoms[obj.kingdom].hasOwnProperty(obj.general)) {
                kingdoms[obj.kingdom][obj.general] = {};
                kingdoms[obj.kingdom][obj.general][ARMY] = 0;
                kingdoms[obj.kingdom][obj.general][WINS] = 0;
                kingdoms[obj.kingdom][obj.general][LOSSES] = 0;
            }
            kingdoms[obj.kingdom][obj.general][ARMY] += obj.army;
        }
    }
}


solve(
    [
        {kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}
    ],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
    ]
);
console.log();
solve(
    [
        {kingdom: "Stonegate", general: "Ulric", army: 5000},
        {kingdom: "YorkenShire", general: "Quinn", army: 5000},
        {kingdom: "Maiden Way", general: "Berinon", army: 1000}],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]
    ]
);
console.log();
solve(
    [
        {kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000}],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Doran"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"]
    ]
);