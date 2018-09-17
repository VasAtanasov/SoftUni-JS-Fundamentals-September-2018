function solve(array) {
    const MODULE_REGEX = /^\$app='([^'\n]+)'$/;
    const PROPERTY_REGEX = /^\$(controller|model|view)='([^'\n]+)'&app='([^'\n]+)'$/;

    let cash = {};
    let modules = {};

    for (const element of array) {
        let match;
        if (match = MODULE_REGEX.exec(element)) {
            let module = match[1];
            if (!modules.hasOwnProperty(module)) {
                modules[module] = {controllers: [], models: [], views: []};
            }
            if (cash.hasOwnProperty(module)) {
                for (const property in cash[module]) {
                    if (cash[module].hasOwnProperty(property)) {
                        modules[module][property].push.apply(modules[module][property], cash[module][property]);
                    }
                }
            }
        } else if (match = PROPERTY_REGEX.exec(element)) {
            let property = match[1] + "s";
            let name = match[2];
            let module = match[3];

            if (modules.hasOwnProperty(module)) {
                modules[module][property].push(name);
            } else {
                if (!cash.hasOwnProperty(module)) {
                    cash[module] = {controllers: [], models: [], views: []};
                }
                cash[module][property].push(name);
            }
        }
    }

    let sorted = {};
    [...Object.keys(modules)]
        .sort((module1, module2) => {
            let index = modules[module2]["controllers"].length - modules[module1]["controllers"].length;
            return index !== 0 ? index : modules[module1]["models"].length - modules[module2]["models"].length
        })
        .forEach(module => {
            let controllers = modules[module]["controllers"].sort((a, b) => a.localeCompare(b));
            let models = modules[module]["models"].sort((a, b) => a.localeCompare(b));
            let views = modules[module]["views"].sort((a, b) => a.localeCompare(b));
            sorted[module] = {controllers: controllers, models: models, views: views};
        });

    console.log(JSON.stringify(sorted))
}

solve(
    [
        "$app='MyApp'",
        "$controller='My Controller'&app='MyApp'",
        "$model='My Model'&app='MyApp'",
        "$view='My View'&app='MyApp'"
    ]
);
console.log();
solve(
    [
        "$controller='PHPController'&app='Language Parser'",
        "$controller='JavaController'&app='Language Parser'",
        "$controller='C#Controller'&app='Language Parser'",
        "$controller='C++Controller'&app='Language Parser'",
        "$app='Garbage Collector'",
        "$controller='GarbageController'&app='Garbage Collector'",
        "$controller='SpamController'&app='Garbage Collector'",
        "$app='Language Parser'",
    ]
);
