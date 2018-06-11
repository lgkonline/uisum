// This will be executed before a package will be created and published

const fs = require("fs");
const package = require("./package.json");

// Only these files should be in the package
// The reason why I do this: By default all files will be in the package.
package.files = [
    "dist",
    "index.js"
];

fs.writeFileSync("./package.json", JSON.stringify(package, null, 4));