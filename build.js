#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

execSync("tsc", { stdio: "inherit" });

const mainFile = path.join(__dirname, "./build/index.js");
const mainFileContent = fs.readFileSync(mainFile, "utf8");
const shebang = "#!/usr/bin/env node";
const newMainFileContent = `${shebang}
${mainFileContent}`;
fs.writeFileSync(mainFile, newMainFileContent);

const assetsSrcDir = path.join(__dirname, "./src/assets");
const assetsBuildDir = path.join(__dirname, "./build/assets");
fs.mkdirSync(assetsBuildDir, { recursive: true });
fs.readdirSync(assetsSrcDir).forEach((file) => {
    fs.copyFileSync(path.join(assetsSrcDir, file), path.join(assetsBuildDir, file));
});