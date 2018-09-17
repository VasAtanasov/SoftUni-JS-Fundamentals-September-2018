function solve(availableRooms, guests) {
    let [FREE_BEDS, GUESTS, DOUBLE, TRIPLE] = ["<<free beds>>", "<<guests>>", "double-bedded", "triple"];
    let rooms = new Map();
    processRooms();
    let guestToTeaHouse = 0;

    for (const pair of guests) {
        if (pair.first === undefined && pair.second === undefined) {
            continue;
        }
        if (pair.first.gender !== pair.second.gender) {
            rooms.forEach(room => {
                if (room.type === DOUBLE && room[FREE_BEDS] === 2) {
                    if (pair.first !== undefined) {
                        accommodateFirst(pair, room);
                    }
                    if (pair.second !== undefined) {
                        accommodateSecond(pair, room);
                    }
                }
            });
        } else {
            rooms.forEach(room => {
                if (room.type === TRIPLE && room[FREE_BEDS] === 3) {
                    if (pair.first !== undefined) {
                        accommodateFirst(pair, room);
                    }
                    if (pair.second !== undefined) {
                        accommodateSecond(pair, room);
                    }
                } else if (room.type === TRIPLE && room[FREE_BEDS] === 2) {
                    let gender = room[GUESTS][0].gender;
                    if (pair.first !== undefined && pair.first.gender === gender) {
                        accommodateFirst(pair, room);
                    }
                    if (pair.second !== undefined && pair.second.gender === gender) {
                        accommodateSecond(pair, room);
                    }
                } else if (room.type === TRIPLE && room[FREE_BEDS] === 1) {
                    let gender = room[GUESTS][0].gender;
                    if (pair.first !== undefined && pair.first.gender === gender) {
                        accommodateFirst(pair, room);
                    } else if (pair.second !== undefined && pair.second.gender === gender) {
                        accommodateSecond(pair, room);
                    }
                }
            });
        }

        guestToTeaHouse += pair.first === undefined ? 0 : 1;
        guestToTeaHouse += pair.second === undefined ? 0 : 1;
    }

    Array.from(rooms.keys())
        .sort((a, b) => a.localeCompare(b))
        .forEach(key => {
            let room = rooms.get(key);
            console.log(`Room number: ${key}`);
            room[GUESTS]
                .filter(g => g !== undefined)
                .sort((guest1, guest2) => guest1.name.localeCompare(guest2.name))
                .forEach(guest => {
                    console.log(`--Guest Name: ${guest.name}`);
                    console.log(`--Guest Age: ${guest.age}`);
                });
            console.log(`Empty beds in the room: ${room[FREE_BEDS]}`)
        });

    console.log(`Guests moved to the tea house: ${guestToTeaHouse}`);

    function accommodateFirst(pair, room) {
        room[GUESTS].push(pair.first);
        pair.first = undefined;
        room[FREE_BEDS] -= 1;
    }

    function accommodateSecond(pair, room) {
        room[GUESTS].push(pair.second);
        pair.second = undefined;
        room[FREE_BEDS] -= 1;
    }

    function processRooms() {
        for (const room of availableRooms) {
            let number = room.number;
            let freeBeds = room.type === "triple" ? 3 : 2;
            rooms.set(number, room);
            rooms.get(number)[FREE_BEDS] = freeBeds;
            rooms.get(number)[GUESTS] = [];
        }
    }
}


solve(
    [
        {number: '206', type: 'double-bedded'},
        {number: '311', type: 'triple'}
    ],
    [
        {
            first: {name: 'Tanya Popova', gender: 'female', age: 24},
            second: {name: 'Miglena Yovcheva', gender: 'female', age: 23}
        },
        {
            first: {name: 'Katerina Stefanova', gender: 'female', age: 23},
            second: {name: 'Angel Nachev', gender: 'male', age: 22}
        },
        {
            first: {name: 'Tatyana Germanova', gender: 'female', age: 23},
            second: {name: 'Boryana Baeva', gender: 'female', age: 22}
        }
    ]
);

console.log();
solve(
    [
        {number: '101A', type: 'double-bedded'},
        {number: '104', type: 'triple'},
        {number: '101B', type: 'double-bedded'},
        {number: '102', type: 'triple'}
    ],
    [
        {
            first: {name: 'Sushi & Chicken', gender: 'female', age: 15},
            second: {name: 'Salisa Debelisa', gender: 'female', age: 25}
        },
        {
            first: {name: 'Daenerys Targaryen', gender: 'female', age: 20},
            second: {name: 'Jeko Snejev', gender: 'male', age: 18}
        },
        {
            first: {name: 'Pesho Goshov', gender: 'male', age: 20},
            second: {name: 'Gosho Peshov', gender: 'male', age: 18}
        },
        {
            first: {name: 'Conor McGregor', gender: 'male', age: 29},
            second: {name: 'Floyd Mayweather', gender: 'male', age: 40}
        }
    ]
);

