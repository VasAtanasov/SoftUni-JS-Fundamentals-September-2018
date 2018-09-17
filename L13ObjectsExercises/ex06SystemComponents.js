function solve(array) {
    let systems = {};

    for (const element of array) {
        let tokens = element.split(" | ");
        let system = tokens[0];
        let component = tokens[1];
        let subComponent = tokens[2];

        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
        }

        if (!systems[system].hasOwnProperty(component)) {
            systems[system][component] = [];
        }
        systems[system][component].push(subComponent);
    }

    Object.keys(systems)
        .sort((a, b) => {
            let index = Object.keys(systems[b]).length - Object.keys(systems[a]).length;
            return index !== 0 ? index : a.toLowerCase().localeCompare(b.toLowerCase());
        })
        .forEach(system => {
            console.log(system);
            Object.keys(systems[system])
                .sort((a, b) => systems[system][b].length - systems[system][a].length)
                .forEach(component => {
                    console.log(`|||${component}`);
                    systems[system][component]
                        .forEach(subComp => console.log(`||||||${subComp}`));
                });
        });
}

solve(
    [
        "SULS | Main Site | Home Page",
        "SULS | Main Site | Login Page",
        "SULS | Main Site | Register Page",
        "SULS | Judge Site | Login Page",
        "SULS | Judge Site | Submittion Page",
        "Lambda | CoreA | A23",
        "SULS | Digital Site | Login Page",
        "Lambda | CoreB | B24",
        "Lambda | CoreA | A24",
        "Lambda | CoreA | A25",
        "Lambda | CoreC | C4",
        "Indice | Session | Default Storage",
        "Indice | Session | Default Security",
    ]
);
