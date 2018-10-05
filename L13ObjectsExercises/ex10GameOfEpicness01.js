function solve(firstArgs, secondArgs) {
    class General {
        constructor(name) {
            this.name = name;
            this.army = 0;
            this.wins = 0;
            this.loses = 0;
        }

        compareTo(other) {
            return other.army - this.army;
        }

        winner() {
            this.wins += 1;
            this.army = Math.floor(this.army * 1.1);
        }

        loser() {
            this.loses += 1;
            this.army = Math.floor(this.army * 0.9);
        }

        toString() {
            return `/\\general: ${this.name}\n---army: ${this.army}\n---wins: ${this.wins}\n---losses: ${this.loses}`;
        }
    }

    class Kingdom {
        constructor(name) {
            this.name = name;
            this.generals = {};
        }

        addGeneral(name, army) {
            if (!this.generals.hasOwnProperty(name)) {
                this.generals[name] = new General(name);
            }
            this.generals[name].army += army;
        }

        getGeneral(name) {
            return this.generals[name];
        }

        get generalsString() {
            return Object.values(this.generals)
                .sort((a, b) => a.compareTo(b))
                .map(g => g.toString())
                .join('\n');
        }

        get totalWins() {
            return Object.values(this.generals).map(g => g.wins).reduce((a, b) => a + b);
        }

        get totalLoses() {
            return Object.values(this.generals).map(g => g.loses).reduce((a, b) => a + b);
        }

        compareTo(other) {
            let index = other.totalWins - this.totalWins;
            index = index !== 0 ? index : this.totalLoses - other.totalLoses;
            return index !== 0 ? index : this.name.localeCompare(other.name);
        }

    }

    let engine = (function () {
        let kingdoms = {};

        function addKingdom(name) {
            if (!kingdoms.hasOwnProperty(name)) {
                kingdoms[name] = new Kingdom(name)
            }
        }

        function addGeneral(kingdom, name, army) {
            kingdoms[kingdom].addGeneral(name, army);
        }

        function getGeneral(kingdom, general) {
            return kingdoms[kingdom].getGeneral(general);
        }

        function print() {
            let winner = getWinnerKingdom();
            let header = `Winner: ${winner.name}`;
            console.log(header);
            console.log(winner.generalsString);
        }

        function getWinnerKingdom() {
            return Object.values(kingdoms)
                .sort((a, b) => a.compareTo(b))[0];
        }

        return {addKingdom, addGeneral, getGeneral, print}

    }());

    for (const obj of firstArgs) {
        engine.addKingdom(obj.kingdom);
        engine.addGeneral(obj.kingdom, obj.general, obj.army);
    }

    for (let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] of secondArgs) {
        if (attackingKingdom === defendingKingdom) {
            continue;
        }

        attackingGeneral = engine.getGeneral(attackingKingdom, attackingGeneral);
        defendingGeneral = engine.getGeneral(defendingKingdom, defendingGeneral);

        if (attackingGeneral.army > defendingGeneral.army) {
            attackingGeneral.winner();
            defendingGeneral.loser();
        } else if (attackingGeneral.army < defendingGeneral.army) {
            defendingGeneral.winner();
            attackingGeneral.loser();
        }
    }

    engine.print();
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