// This file demonstrates import esm and cjs modules in commonjs
// Mandatory file extensions required

// Using dynamic import to import ES modules in cjs. You cannot require ES modules in CJS as ES modules have async execution
import("./es-modules/ForImport.mjs").then((mod) => {
  mod.default();
  mod.ForImportNamed();
});

const cjs = require("./cjs-modules/ForRequire.js");
cjs.ForRequire();
