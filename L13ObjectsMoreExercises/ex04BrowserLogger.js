function solve(obj, array) {
    let commands = (function (obj) {
        let openTabs = "Open Tabs";
        let recentlyClosed = "Recently Closed";
        let browserLogs = "Browser Logs";

        function close(website, action) {
            if (obj[openTabs].includes(website)) {
                let index = obj[openTabs].indexOf(website);
                obj[openTabs].splice(index, 1);
                obj[recentlyClosed].push(website);
                addToLog(action)
            }
        }

        function open(website, action) {
            obj[openTabs].push(website);
            addToLog(action);
        }

        function clear() {
            obj[openTabs] = [];
            obj[recentlyClosed] = [];
            obj[browserLogs] = [];
        }

        function addToLog(action) {
            obj[browserLogs].push(action)
        }

        function print() {
            console.log(`${obj["Browser Name"]}\nOpen Tabs: ${obj[openTabs].join(', ')}\nRecently Closed: ${obj[recentlyClosed].join(', ')}\nBrowser Logs: ${obj[browserLogs].join(', ')}`);
        }

        return {close, open, clear, print}
    })(obj);


    for (const action of array) {
        let tokens = action.split(/\s+/);
        let command = tokens[0].toLowerCase();
        commands[command](tokens[1], action);
    }

    commands.print();

}

solve(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ['Close Facebook', 'Open StackOverFlow', 'Open Google']
);
//Google Chrome
// Open Tabs: YouTube, Google Translate, StackOverFlow, Google
// Recently Closed: Yahoo, Gmail, Facebook
// Browser Logs: Open YouTube, Open Yahoo, Open Google Translate, Close Yahoo, Open Gmail, Close Gmail, Open Facebook, Close Facebook, Open StackOverFlow, Open Google
console.log();
solve(
    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ['Gmail', 'Dropbox'],
        "Browser Logs": ['Open Gmail', 'Close Gmail', 'Open Dropbox', 'Open YouTube', 'Close Dropbox']
    },
    ['Open Wikipedia', 'Clear History and Cache', 'Open Twitter']
);