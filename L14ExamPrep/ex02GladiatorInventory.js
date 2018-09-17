function manageInventory(array) {
    let inventory = array.shift().split(/\s+/).filter(String);
    let commands = {
        "Buy": function (equipment) {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        },
        "Trash": function (equipment) {
            let index = inventory.indexOf(equipment);
            if (index > -1) {
                inventory.splice(index, 1);
            }
        },
        "Repair": function (equipment) {
            let index = inventory.indexOf(equipment);
            if (index > -1) {
                let repaired = inventory[index];
                inventory.splice(index, 1);
                inventory.push(repaired);
            }
        },
        "Upgrade": function (equipment) {
            let [toUpgrade, upgrade] = equipment.split("-");
            let index = inventory.indexOf(toUpgrade);
            if (index > -1) {
                inventory.splice(index + 1, 0, toUpgrade + ":" + upgrade);
            }
        },
    };

    for (const string of array) {
        if ("Fight!" === string) {
            break;
        }
        let [command, equipment] = string.split(/\s+/);
        commands[command](equipment);
    }

    console.log(inventory.join(" "));
}

manageInventory(["SWORD Shield Spear",
    "Buy Bag",
    "Trash Shield",
    "Repair Spear",
    "Upgrade SWORD-Steel",
    "Fight!"]);





