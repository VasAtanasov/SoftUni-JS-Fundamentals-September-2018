function election(array) {
    let totalVotes = 0;
    let systems = [];
    processBallots();

    let candidates = {};
    processCandidates();

    if (objectLength(candidates) === 1) {
        console.log(`${Object.keys(candidates)[0]} wins with ${totalVotes} votes`);
        console.log(`${Object.keys(candidates)[0]} wins unopposed!`);
        return;
    }

    candidates = sortCandidatesByVotes();
    let names = Object.keys(candidates);

    let [winner, runnerUp] = names;
    let winnerVotes = getVotesSum(winner);
    if (winnerVotes > totalVotes / 2) {
        console.log(`${winner} wins with ${winnerVotes} votes`);
        console.log(`Runner up: ${runnerUp}`);
        Object.keys(candidates[runnerUp])
            .sort((systemOne, systemTwo) => candidates[runnerUp][systemTwo] - candidates[runnerUp][systemOne])
            .forEach(system => console.log(`${system}: ${candidates[runnerUp][system]}`))
    } else {
        let [firstRunOff, secondRunOff] = names;
        let firstRunOffPercent = Math.floor((getVotesSum(firstRunOff) / totalVotes) * 100);
        let secondRunOffPercent = Math.floor((getVotesSum(secondRunOff) / totalVotes) * 100);
        console.log(`Runoff between ${firstRunOff} with ${firstRunOffPercent}% and ${secondRunOff} with ${secondRunOffPercent}%`);
    }

    function sortCandidatesByVotes() {
        let sorted = {};
        Object.keys(candidates)
            .sort((candidateOne, candidateTwo) => getVotesSum(candidateTwo) - getVotesSum(candidateOne))
            .forEach(candidate => sorted[candidate] = candidates[candidate]);
        return sorted;
    }

    function getVotesSum(candidate) {
        return Object.values(candidates[candidate]).reduce((a, b) => a + b);
    }

    function processCandidates() {
        for (const system of Object.keys(systems)) {
            let bestCandidate = Object.keys(systems[system])
                .sort((candidateOne, candidateTwo) => systems[system][candidateTwo] - systems[system][candidateOne])[0];
            let allVotes = Object.values(systems[system]).reduce((a, b) => a + b);
            totalVotes += allVotes;
            if (!candidates[bestCandidate]) {
                candidates[bestCandidate] = {};
            }
            if (!candidates[bestCandidate][system]) {
                candidates[bestCandidate][system] = 0;
            }
            candidates[bestCandidate][system] += allVotes;
        }
    }

    function processBallots() {
        for (const element of array) {
            let [system, candidate, votes] = Object.values(element);
            if (!systems[system]) {
                systems[system] = {};
            }
            if (!systems[system][candidate]) {
                systems[system][candidate] = 0;
            }
            systems[system][candidate] += votes;
        }
    }

    function objectLength(obj) {
        let result = 0;
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                result++;
            }
        }
        return result;
    }
}

election(
    [
        {system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
        {system: 'Sigma', candidate: 'Space Cow', votes: 200},
        {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
        {system: 'Tau', candidate: 'Space Cow', votes: 15},
        {system: 'Sigma', candidate: 'Space Cow', votes: 60},
        {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}
    ]
);
console.log();
election(
    [
        {system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10},
        {system: 'Tau', candidate: 'Kim Jong Andromeda', votes: 200},
        {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}
    ]
);
console.log();
election(
    [
        {system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
        {system: 'Tau', candidate: 'Space Cow', votes: 100},
        {system: 'Theta', candidate: 'Space Cow', votes: 10},
        {system: 'Sigma', candidate: 'Space Cow', votes: 200},
        {system: 'Sigma', candidate: 'Flying Shrimp', votes: 75},
        {system: 'Omicron', candidate: 'Flying Shrimp', votes: 50},
        {system: 'Omicron', candidate: 'Octocat', votes: 75}
    ]
);