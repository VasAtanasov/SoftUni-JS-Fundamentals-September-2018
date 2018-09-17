function solve(array) {
    let goalsScored = "goalsScored";
    let goalsConceded = "goalsConceded";
    let matchesPlayedWith = "matchesPlayedWith";
    let teams = {};
    array
        .filter(str => str !== "")
        .forEach(string => {
            let tokens = string.split(/[\/:-]+/).filter(token => token !== "").map(token => token.trim());
            let homeTeam = tokens[0];
            let awayTeam = tokens[1];
            let homeTeamScore = Number(tokens[2]);
            let awayTeamScore = Number(tokens[3]);
            processTeam(homeTeam, awayTeam, homeTeamScore, awayTeamScore);
            processTeam(awayTeam, homeTeam, awayTeamScore, homeTeamScore);
        });

    let sorted = {};

    Object.keys(teams)
        .sort()
        .forEach(team => {
            sorted[team] = {goalsScored: 0, goalsConceded: 0, matchesPlayedWith: []};
            sorted[team].goalsScored = teams[team].goalsScored;
            sorted[team].goalsConceded = teams[team].goalsConceded;
            sorted[team].matchesPlayedWith = teams[team].matchesPlayedWith.sort();
        });

    console.log(JSON.stringify(sorted));

    function processTeam(team, opponent, scored, conceded) {
        if (!teams.hasOwnProperty(team)) {
            teams[team] = {goalsScored: 0, goalsConceded: 0, matchesPlayedWith: []};
        }
        teams[team].goalsScored += scored;
        teams[team].goalsConceded += conceded;
        if (!teams[team].matchesPlayedWith.includes(opponent)) {
            teams[team].matchesPlayedWith.push(opponent);
        }
    }
}
//
// solve(
//     [
//         "Germany / Argentina: 1-0",
//         "Brazil / Netherlands: 0-3",
//         "Netherlands / Argentina: 0-0",
//         "Brazil / Germany: 1-7",
//         "Argentina / Belgium: 1-0",
//         "Netherlands / Costa Rica: 0-0",
//         "France / Germany: 0-1",
//     ]
// );

solve(
    [
        "Germany/Argentina:18-0",
        "Brazil/Netherlands:36-32",
        "Netherlands/Argentina:12-11",
        "Brazil/Germany:61-97",
        "Argentina/Belgium:11-3",
        "Netherlands/CostaRica:22-18",
        "France/Germany:11-16",
        "Brazil/Colombia:21-31",
        "Argentina/Germany:8-4",
        "Brazil/Netherlands:27-11",
        "Argentina/Netherlands:76-74",
        "Brazil/Germany:1-2",
        "Argentina/Belgium:21-13",
        "CostaRica/Netherlands:42-42",
        "France/Germany:11-16",
        "Colombia/France:11-6",
        "germany/france:7-6",
    ]
);











































