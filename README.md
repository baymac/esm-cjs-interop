# Node JS ESM and CJS Interop Demo

Pre-requisites:

Node >= 13.2.0 (ships with ECMASscript Modules)

If you wish to add ESMJS support to your Common JS node project, you can do it in 2 ways. This repo contains 2 nodejs projects to demonstrates both ways:

1. cjs-default: Demonstrates how to use ES modules in a CJS project (all \*.js files are default treated as CJS). package.json contains `"type": "commonjs"`.
1. esm-default: Demonstrates how to use CJS modules in a ESMJS project (all \*.js files are default treated as ESMJS). package.json contains `"type": "module"`.

Both projects have 2 test files:

1. `testCjs` - Written in CJS to show how to load ES modules. Run with `npm run cjs`.
2. `testEsm` - Written is ESMJS to show how to load CJS modules. Run with `npm run esmjs`

# References

- https://nodejs.medium.com/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663
- https://nodejs.org/api/modules.html
- https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
