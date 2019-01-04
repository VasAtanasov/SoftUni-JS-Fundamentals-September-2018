function solve(array) {
    let engine = (function () {
        let classes = clazz();
        let Traveller = classes.Traveller;
        let travellers = new Map();

        function addTraveller(name) {
            if (!travellers.has(name)) {
                travellers.set(name, new Traveller(name));
            }
        }

        function addMoney(name, value) {
            travellers.get(name).money = value;
        }

        function addLandmark(name, country, landmark, money) {
            if (travellers.has(name) && travellers.get(name).visitedLandmark(country, landmark)) {
                return;
            }
            addTraveller(name);
            let traveller = travellers.get(name);
            if (traveller.isMoney(money)) {
                travellers.get(name).addLandmark(country, landmark, money);
            } else {
                console.log(`Not enough money to visit ${landmark}`);
            }

        }

        function print() {
            Array.from(travellers.values())
                .sort((a, b) => a.compareTo(b))
                .forEach(t => console.log(t.toString()));
        }

        return {addTraveller, addLandmark, addMoney, print};
    })();


    for (const element of array) {
        let tokens = element.split(/\s+/);
        if (tokens.length === 3) {
            engine.addTraveller(tokens[0]);
            engine.addMoney(tokens[0], Number(tokens[2]))
        } else {
            engine.addLandmark(tokens[0], tokens[5], tokens[3], Number(tokens[7]));
        }
    }

    engine.print();

    function clazz() {
        class Traveller {
            constructor(name) {
                this._name = name;
                this._money = 0;
                this._countries = new Map();
            }

            set money(value) {
                this._money += value;
            }

            isMoney(money) {
                return this._money - money >= 0;
            }

            visitedLandmark(country, landmark) {
                return this._countries.has(country) && this._countries.get(country).hasLandmark(landmark);
            }

            addLandmark(country, landmark, money) {
                if (!this._countries.has(country)) {
                    this._countries.set(country, new Country(country))
                }
                if (!this._countries.get(country).visitedLandmark(landmark)) {
                    this._countries.get(country).addLandmark(landmark);
                    this.money = -money;
                }
            }

            compareTo(other) {
                return other._countries.size - this._countries.size;
            }

            toString() {
                let header = `${this._name} visited ${this._countries.size} countries and has ${this._money} money left`;
                if (this._countries.size > 0) {
                    header += '\n';
                    header += Array.from(this._countries.values())
                        .sort((a, b) => a.compareTo(b))
                        .map(c => c.toString())
                        .join('\n');
                }
                return header;
            }
        }

        class Country {
            constructor(name) {
                this._name = name;
                this._landmarks = [];
            }

            addLandmark(landmark) {
                this._landmarks.push(landmark);
            }

            hasLandmark(landmark) {
                return this._landmarks.includes(landmark);
            }

            compareTo(other) {
                return other._landmarks.length - this._landmarks.length;
            }

            toString() {
                let header = `- ${this._name} -> ${this._landmarks.length} landmarks`;
                if (this._landmarks.length > 0) {
                    header += '\n';
                    header += this._landmarks
                        .sort((a, b) => a.localeCompare(b))
                        .map(l => `-- ${l}`)
                        .join('\n');
                }
                return header;
            }
        }

        return {Traveller};
    }
}

solve(
    [
        'Peter gets 100',
        'Peter visited the StatueOfLiberty in USA - 50',
        'Bill gets 250',
        'Tim visited the ChristTheRedeemer in Brazil - 150',
        'Bill gets 400',
        'Bill visited the MountFuji in Japan - 600',
        'Bill visited the TeatroAmazonas in Brazil - 50',
        'Bill gets 150',
        'Bill visited the ChristTheRedeemer in Brazil - 150',
        'Tim gets 500',
        'Bill visited the StatueOfLiberty in USA - 440',
        'Tim visited the StatueOfLiberty in USA - 440',
        'Maria gets 650',
        'Maria visited the StatueOfLiberty in USA - 440',
        'Maria visited the CapeCod in USA - 100'
    ]
);
console.log();
solve(
    [
        'Peter gets 100',
        'Peter visited the StatueOfLiberty in USA - 50',
        'Bill gets 250',
        'Bill gets 400',
        'Peter gets 150',
        'Peter visited the ChristTheRedeemer in Brazil - 150'
    ]
);