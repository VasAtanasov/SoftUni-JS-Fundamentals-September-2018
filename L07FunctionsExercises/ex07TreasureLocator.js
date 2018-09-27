function treasureLocator(array) {
    let islands = [
        {name: "Tuvalu", x1: 1, x2: 3, y1: 1, y2: 3},
        {name: "Tonga", x1: 0, x2: 2, y1: 6, y2: 8},
        {name: "Samoa", x1: 5, x2: 7, y1: 3, y2: 6},
        {name: "Cook", x1: 4, x2: 9, y1: 7, y2: 8},
        {name: "Tokelau", x1: 8, x2: 9, y1: 0, y2: 1},
    ];

    for (let i = 0; i < array.length; i += 2) {
        let x = array[i];
        let y = array[i + 1];
        let searchResult = checkIslands(islands, x, y);
        console.log(searchResult);
    }

    function checkIslands(islands, x, y) {
        for (let i = 0; i < islands.length; i++) {
            let island = islands[i];
            if (inside(x, y, island.x1, island.y1, island.x2, island.y2)) {
                return island.name;
            }
        }
        return "On the bottom of the ocean";
    }

    function inside(x,y, x1, y1, x2, y2) {
        return x >= x1 && x <= x2 &&
            y >= y1 && y <= y2;
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6, 4]);