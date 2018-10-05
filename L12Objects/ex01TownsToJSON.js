function townsToJSON(array) {
    console.log(JSON.stringify(array.slice(1).map(mapToObject)));

    function mapToObject(str) {
        let town = str.split(/\s*\|\s*/).filter(String);
        return {Town: town[0], Latitude: +town[1], Longitude: +town[2]};
    }
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);