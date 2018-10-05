function solve(array) {
    class Gladiator {
        constructor(name) {
            this._name = name;
            this._techniques = {};
        }

        get name() {
            return this._name;
        }

        get techniques() {
            return this._techniques;
        }

        addTechnique(technique, skill) {
            if (!this.techniques.hasOwnProperty(technique) || this.techniques[technique] < skill) {
                this.techniques[technique] = skill;
            }
        }

        get totalSkill() {
            return Object.values(this.techniques).map(Number).reduce((a, b) => a + b);
        }

        haveTechniqueInCommon(other) {
            for (const technique of Object.keys(this.techniques)) {
                for (const otherTechnique of Object.keys(other.techniques)) {
                    if (technique === otherTechnique) {
                        return true;
                    }
                }
            }
            return false;
        }

        compareTechnique(technique, otherTechnique) {
            let index = this.techniques[otherTechnique] - this.techniques[technique];
            return index !== 0 ? index : technique.localeCompare(otherTechnique);
        }

        compareTo(other) {
            let index = other.totalSkill - this.totalSkill;
            return index !== 0 ? index : this.name.localeCompare(other.name);
        }

        toString() {
            let header = `${this.name}: ${this.totalSkill} skill`;
            let list = Object.keys(this.techniques)
                .sort((a, b) => this.compareTechnique(a, b))
                .map(t => `- ${t} <!> ${this.techniques[t]}`)
                .join('\n');

            if (this.techniques.length === 0) {
                return header;
            }
            return header + '\n' + list;
        }
    }

    let manager = (function () {
        let gladiators = {};

        function addGladiator(name) {
            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = new Gladiator(name);
            }
        }

        function addTechnique(name, technique, skill) {
            gladiators[name].addTechnique(technique, skill);
        }

        function print() {
            console.log(Object.values(gladiators)
                .sort((a, b) => a.compareTo(b))
                .map(g => g.toString())
                .join('\n'));
        }

        function duel(name, otherName) {
            let gladiator = gladiators[name];
            let otherGladiator = gladiators[otherName];
            if (gladiator && otherGladiator && gladiator.haveTechniqueInCommon(otherGladiator)) {
                if (gladiator.totalSkill > otherGladiator.totalSkill) {
                    delete gladiators[otherName];
                } else if (gladiator.totalSkill < otherGladiator.totalSkill) {
                    delete gladiators[name];
                }
            }
        }

        return {addGladiator, addTechnique, print, duel};
    }());

    for (const element of array) {
        if (element === 'Ave Cesar') {
            break;
        }

        let tokens = element.split(/ -> | vs /).map(s => s.trim()).filter(s => s !== '');
        if (tokens.length === 3) {
            manager.addGladiator(tokens[0]);
            manager.addTechnique(tokens[0], tokens[1], tokens[2]);
        } else {
            manager.duel(tokens[0], tokens[1]);
        }
    }

    manager.print();
}

solve(
    [
        'Pesho -> BattleCry -> 400',
        'Gosho -> PowerPunch -> 300',
        'Stamat -> Duck -> 200',
        'Stamat -> Tiger -> 250',
        'Ave Cesar',
    ]
);
console.log();
solve(
    [
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Pesho vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Gosho',
        'Ave Cesar',
    ]
);