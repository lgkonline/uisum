// Adds example code to doc

const fs = require("fs");

const packageName = require("./package.json").name;
const docPath = "./docs/src/data/doc.json";

let doc = require(docPath);

Object.keys(doc).forEach(prop => {
    const displayName = doc[prop].displayName;
    const exampleFilePath = "./docs/src/examples/" + displayName + ".js";

    if (fs.existsSync(exampleFilePath)) {
        // console.log(displayName + " has example");

        const exampleCode = fs.readFileSync(exampleFilePath, "utf8");

        doc[prop].exampleCode = exampleCode.replace('"../../../index.dev.js"', `"${packageName}"`);
    }
});

fs.writeFileSync(docPath, JSON.stringify(doc, null, 4));