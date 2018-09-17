function getMaterialsCount(base, increment) {
    let pyramidHeight = Math.ceil(base / 2);
    let stepCount = 1;
    let materials = {
        "stone": 0,
        "marble": 0,
        "lapis lazuli": 0,
        "gold": 0
    };

    while (true) {
        let allBlocksCount = base * base;
        let stoneBlocks = (base - 2) * (base - 2);

        if (stepCount === pyramidHeight) {
            materials["gold"] = base * base * increment;
            break;
        } else if (stepCount % 5 === 0) {
            materials["lapis lazuli"] += Math.abs(allBlocksCount - stoneBlocks) * increment;
        } else {
            materials["marble"] += Math.abs(allBlocksCount - stoneBlocks) * increment;
        }

        materials["stone"] += stoneBlocks * increment;
        stepCount++;
        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(materials["stone"])}`);
    console.log(`Marble required: ${Math.ceil(materials["marble"])}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(materials["lapis lazuli"])}`);
    console.log(`Gold required: ${Math.ceil(materials["gold"])}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);
}


getMaterialsCount(11, 2);
console.log();
getMaterialsCount(11, 0.75);
console.log();
getMaterialsCount(12, 1);
console.log();
getMaterialsCount(23, 0.5);