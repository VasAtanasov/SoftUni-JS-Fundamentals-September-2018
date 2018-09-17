function solve(array) {
    let stars = {};
    let normandy = {
        x: parseFloat(array[3].split(/\s+/)[0]),
        y: parseFloat(array[3].split(/\s+/)[1])
    };
    let turns = parseFloat(array[4]);

    for (let i = 0; i < 3; i++) {
        let tokens = array[i].split(/\s+/);
        let star = tokens[0];
        stars[star] = {
            name: star,
            x: parseFloat(tokens[1]),
            y: parseFloat(tokens[2])
        };
    }

    for (let i = 0; i <= turns; i++) {
        let foundStar = false;
        for (let key of Object.keys(stars)) {
            let star = stars[key];
            if (isInsideStar(normandy.x, normandy.y, star.x, star.y)) {
                console.log(star.name.toLowerCase());
                foundStar = true;
                break;
            }
        }

        if (!foundStar) {
            console.log("space");
        }
        normandy.y++;
    }


    function isInsideStar(nX, nY, sX, sY) {
        return (nX <= sX + 1 && nX >= sX - 1) &&
            (nY <= sY + 1 && nY >= sY - 1);
    }


}

solve(
    [
        "Sirius 3 7",
        "Alpha-Centauri 7 5",
        "Gamma-Cygni 10 10",
        "8 1",
        "6",
    ]
);
console.log();
solve(
    [
        "Terra-Nova 16 2",
        "Perseus 2.6 4.8",
        "Virgo 1.6 7",
        "2 5",
        "4",
    ]
);
