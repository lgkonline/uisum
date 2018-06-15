const fs = require("fs");

/**
 * Convert Sass variables to JSON
 */

const outputFile = "./docs/src/data/scss-variables.json";

const scss = fs.readFileSync("./dist/style/_variables.scss").toString();
const lines = scss.split("\n");

const outputObjects = [];

let i = 0;
let j = "";
lines.forEach(line => {
    if (line.substring(0, 2) == "//" && lines[i + 1][0] == "$") {
        const nextLine = lines[i + 1];

        // new var
        const match = nextLine.match(/\$(.*?):(.*?);/);

        if (match && match[1] && match[2]) {
            outputObjects.push({
                variable: "$" + match[1],
                value: match[2].trim(),
                description: line.replace("//", "").trim()
            });
        }
    }

    i++;
});

console.log("Write file to " + outputFile);
fs.writeFileSync(outputFile, JSON.stringify(outputObjects));