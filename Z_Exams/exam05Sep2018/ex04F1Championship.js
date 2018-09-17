function solve(array) {
    let teams = new Map();

    for (const element of array) {
        let [team, pilot, points] = element.split(' -> ');

        if (!teams.has(team)) {
            teams.set(team, new Map())
        }

        if (!teams.get(team).has(pilot)) {
            teams.get(team).set(pilot, 0);
        }

        teams.get(team).set(pilot, teams.get(team).get(pilot) + Number(points))
    }

    Array.from(teams.keys())
        .sort((team1, team2) => {
            let teamOnePoints = Array.from(teams.get(team1).values()).reduce((a, b) => a + b);
            let teamTwoPoints = Array.from(teams.get(team2).values()).reduce((a, b) => a + b);
            return teamTwoPoints - teamOnePoints;
        })
        .slice(0, 3)
        .forEach(team => {
            console.log(`${team}: ${Array.from(teams.get(team).values()).reduce((a, b) => a + b)}`);
            Array.from(teams.get(team).keys())
                .sort((p1, p2) => teams.get(team).get(p2) - teams.get(team).get(p1))
                .forEach(pilot => console.log(`-- ${pilot} -> ${teams.get(team).get(pilot)}`));
        });
}

solve(
    [
        "Ferrari -> Kimi Raikonnen -> 25",
        "Ferrari -> Sebastian Vettel -> 18",
        "Mercedes -> Lewis Hamilton -> 10",
        "Mercedes -> Valteri Bottas -> 8",
        "Red Bull -> Valteri Bottas -> 8",
        "Red Bull -> Max Verstapen -> 6",
        "Red Bull -> Daniel Ricciardo -> 4"
    ]
);
console.log();
solve(
    [
        "Ferrari -> Kimi Raikonnen -> 25",
        "Ferrari -> Sebastian Vettel -> 18",
        "Mercedes -> Lewis Hamilton -> 10",
        "Mercedes -> Valteri Bottas -> 8",
        "Red Bull -> Max Verstapen -> 6",
        "Red Bull -> Daniel Ricciardo -> 4",
        "Mercedes -> Lewis Hamilton -> 25",
        "Mercedes -> Valteri Bottas -> 18",
        "Haas -> Romain Grosjean -> 25",
        "Haas -> Kevin Magnussen -> 25",
    ]
);