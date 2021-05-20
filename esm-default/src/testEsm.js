// This file demonstrates import esm and cjs modules in esmjs
// Mandatory file extensions required

import ForImportDefault, { ForImportNamed } from "./es-modules/ForImport.js";
ForImportDefault();
ForImportNamed();

// Option 1: Import cjs module using create require
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cjs = require("./cjs-modules/ForCreateRequire.cjs");
const { ForCreateRequire } = cjs;

ForCreateRequire();

// Option 2: Import cjs module using default import. When importing CommonJS modules, the module.exports object is provided as the default export.
import cjs2 from "./cjs-modules/ForRequire.cjs";
const { ForRequire } = cjs2;

ForRequire();
