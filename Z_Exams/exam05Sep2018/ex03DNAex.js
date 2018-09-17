function solve(array) {
    let regex = /^([a-z]+)=([0-9]+)--([0-9]+)<<([a-z]+)$/;
    let organisms = new Map();

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Stop!') {
            break;
        }

        let line = array[i].replace(/[!@#$?]/g, "");

        let match = regex.exec(line);

        if (match) {
            let name = match[1];
            let nameLength = Number(match[2]);
            if (name.length !== nameLength) {
                continue;
            }
            let countOfGenes = Number(match[3]);
            let organism = match[4];

            if (!organisms.has(organism)) {
                organisms.set(organism, 0);
            }

            organisms.set(organism, organisms.get(organism) + countOfGenes);
        }
    }

    console.log([...organisms.keys()]
        .sort((a, b) => organisms.get(b) - organisms.get(a))
        .map(organism => `${organism} has genome size of ${organisms.get(organism)}`)
        .join("\n"));

}

solve(
    [
        '!@ab?si?di!a@=7--152<<human',
        'b!etu?la@=6--321<<dog',
        '!curtob@acter##ium$=14--230<<dog',
        '!some@thin@g##=9<<human',
        'Stop!',

    ]
);