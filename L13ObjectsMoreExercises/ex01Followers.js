function solve(array) {
    let website = (function () {
        let users = {};
        let classes = getClasses();
        let User = classes.User;

        function register(name) {
            if (!users.hasOwnProperty(name)) {
                users[name] = new User(name);
            }
        }

        function follow(follower, following) {
            if (users.hasOwnProperty(follower) && users.hasOwnProperty(following) && follower !== following) {
                users[follower].follow(following);
                users[following].addFollower(follower);
            }
        }

        function print() {
            console.log(`Total users registered: ${Object.keys(users).length}`);
            Object.values(users)
                .sort((a, b) => a.compareTo(b))
                .map((user, index) => {
                    let userString = `${index + 1}. ${user.toString()}`;
                    if (index === 0 && user._followers.length > 0) {
                        userString += ('\n' + user.followers);
                    }
                    return userString;
                })
                .forEach(u => console.log(u))
        }

        return {register, follow, print};
    }());

    for (let i = 0; i < array.length - 1; i++) {
        let tokens = array[i].split(/ /).map(s => s.trim()).filter(s => s !== '');
        if (tokens[0].includes('Welcome')) {
            website.register(tokens[1]);
        } else {
            website.follow(tokens[0], tokens[2]);
        }
    }

    website.print();

    function getClasses() {
        class User {
            constructor(name) {
                this._name = name;
                this._followers = [];
                this._following = [];
            }

            follow(name) {
                if (!this._following.includes(name)) {
                    this._following.push(name);
                }
            }

            addFollower(name) {
                if (!this._followers.includes(name)) {
                    this._followers.push(name);
                }
            }

            get followers() {
                return this._followers
                    .sort((a, b) => a.localeCompare(b))
                    .map(u => `*  ${u}`)
                    .join('\n');
            }

            compareTo(other) {
                let index = other._followers.length - this._followers.length;
                return index !== 0 ? index : this._following.length - other._following.length;
            }

            toString() {
                return `${this._name} : ${this._following.length} following, ${this._followers.length} followers`;
            }
        }

        return {User};
    }

}

solve(
    [
        'Welcome, EmilConrad',
        'Welcome, VenomTheDoctor',
        'Welcome, Saffrona',
        'Saffrona followed EmilConrad',
        'Saffrona followed VenomTheDoctor',
        'EmilConrad followed VenomTheDoctor',
        'VenomTheDoctor followed VenomTheDoctor',
        'Saffrona followed EmilConrad',
    ]
);








