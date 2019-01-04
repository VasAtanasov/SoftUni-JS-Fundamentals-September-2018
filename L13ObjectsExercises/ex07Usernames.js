function solve(array) {
    let userNames = new Set();

    for (const name of array) {
        userNames.add(name);
    }

    [...userNames.keys()]
        .sort((a, b) => {
            let index = a.length - b.length;
            return index !== 0 ? index : a.localeCompare(b);
        })
        .forEach(name => console.log(name));
}

solve(
    [
        "Ashton",
        "Kutcher",
        "Ariel",
        "Lilly",
        "Keyden",
        "Aizen",
        "Billy",
        "Braston"
    ]
);
console.log();
solve(
    [
        "Denise",
        "Ignatius",
        "Iris",
        "Isacc",
        "Indie",
        "Dean",
        "Donatello",
        "Enfuego",
        "Benjamin",
        "Biser",
        "Bounty",
        "Renard",
        "Rot",
    ]
);
