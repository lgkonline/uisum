const fs = require("fs");
const package = require("./package.json");

delete package.files;

fs.writeFileSync("./package.json", JSON.stringify(package, null, 4));