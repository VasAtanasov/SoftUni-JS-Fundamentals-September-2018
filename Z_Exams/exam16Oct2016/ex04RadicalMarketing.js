function solve(array) {
    let register = new Map();
    for (const element of array) {
        if (/[A-Z]-[A-Z]/.test(element)) {
            let [subscriber, subscription] = element.split("-");
            if (subscriber === subscription) {
                continue;
            }
            if (register.has(subscriber) && register.has(subscription)) {
                if (!register.get(subscriber).subscriptions.has(subscription)) {
                    register.get(subscriber).subscriptions.add(subscription);
                    register.get(subscription).subscribers.add(subscriber);
                }
            }
        } else if (/[A-Z]/.test(element)) {
            if (!register.has(element)) {
                register.set(element, {subscribers: new Set(), subscriptions: new Set()})
            }
        }
    }

    let first = [...register.keys()]
        .sort((person1, person2) => {
            let index = register.get(person2).subscribers.size - register.get(person1).subscribers.size;
            return index !== 0 ? index : register.get(person2).subscriptions.size - register.get(person1).subscriptions.size;
        })[0];

    console.log(first);
    let subscribers = [...register.get(first).subscribers];
    for (let i = 0; i < subscribers.length; i++) {
        console.log(`${i + 1}. ${subscribers[i]}`);
    }
}


solve(
    [
        "A",
        "B",
        "A-B",
        "C",
        "C-B",
        "D",
        "D-B",
        "E",
        "E-B",
        "A-C",
        "D-C",
        "E-C",
    ]
);

// solve(
//     [
//         "A",
//         "B",
//         "C",
//         "D",
//         "A-B",
//         "B-A",
//         "C-A",
//         "D-A"
//     ]
// );
// console.log();
// solve(
//     [
//         "J",
//         "G",
//         "P",
//         "R",
//         "C",
//         "J-G",
//         "G-J",
//         "P-R",
//         "R-P",
//         "C-J"
//     ]
// );
















