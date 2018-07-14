const fs = require("fs");
const pathToDoc = "./docs/src/data/doc.json";

let doc = require(pathToDoc);

// For each component
Object.keys(doc).forEach(propName => {
    let component = doc[propName];

    let lines = component.description.split("\n");

    lines.forEach((line, key) => {
        // console.log(line);

        if (line.startsWith("@example")) {
            component.example = line.replace("@example", "").trim();
            lines.splice(key, 1);
        }
    });

    component.description = lines.join("\n");
});

fs.writeFileSync(pathToDoc, JSON.stringify(doc));