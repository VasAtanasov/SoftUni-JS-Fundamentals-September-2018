function nowPlaying(parameters) {
    return `Now Playing: ${parameters[1]} - ${parameters[0]} [${parameters[2]}]`;
}

console.log(nowPlaying(['Number One', 'Nelly', '4:09']));