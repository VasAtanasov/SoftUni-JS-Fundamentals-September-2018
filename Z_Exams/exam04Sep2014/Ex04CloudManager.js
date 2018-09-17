function solve(array) {
    let extensions = {};

    for (let i = 0; i < array.filter(str => str !== "").length; i++) {
        let [fileName, extension, size] = array[i].split(/\s+/);
        if (!extensions.hasOwnProperty(extension)) {
            extensions[extension] = {files: [], memory: 0};
        }

        if (!extensions[extension].files.includes(fileName)) {
            extensions[extension].files.push(fileName);
            extensions[extension].memory = extensions[extension].memory + parseFloat(size);
        }
    }

    let sorted = {};
    Object.keys(extensions)
        .sort()
        .forEach(extension => {
            sorted[extension] = {
                files: extensions[extension].files.sort(),
                memory: extensions[extension].memory.toFixed(2)
            };
        });

    console.log(JSON.stringify(sorted));
}

solve(
    [
        "sentinel .exe 15MB",
        "zoomIt .msi 3MB",
        "skype .exe 45MB",
        "trojanStopper .bat 23MB",
        "kindleInstaller .exe 120MB",
        "setup .msi 33.4MB",
        "winBlock .bat 1MB",
    ]
);
console.log();
solve(
    [
        "eclipse .tar.gz 198.00MB",
        "uTorrent .gyp 33.02MB",
        "nodeJS .gyp 14MB",
        "nakov-naked .jpeg 3MB",
        "gnuGPL .pdf 5.6MB",
        "skype .tar.gz 66MB",
        "selfie .jpeg 7.24MB",
        "myFiles .tar.gz 783MB",
    ]
);
console.log();
solve(
    [
        "asd .png 8.00MB",
        "hg .jpg 3.02MB",
        "myf .png 4MB",
        "filet .gif 3MB",
        "DOSC .gif 5.6MB",
        "rfsadf .jpg 6MB",
        "p .png 7.24MB",
        "pgg .gif 3MB",
        "pict .png 8.00MB",
        "pico .jpg 3.02MB",
        "picv .png 14MB",
        "picx .gif 3MB",
        "picj .gif 5.6MB",
        "pick .jpg 9MB",
        "picme .png 7.24MB",
        "picshadow .gif 8.3MB",
        "picFunny .png 8.00MB",
        "pichah .jpg 33.02MB",
        "picLOLs .png 14MB",
    ]
);
