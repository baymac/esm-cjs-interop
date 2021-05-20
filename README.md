# Node JS ESM and CJS Interop Demo

If you wish to add ESMJS support to your Common JS node project, you can do it in 2 ways. This repo contains 2 nodejs projects to demonstrates the ways:

1. cjs-default: Demonstrates how to use ES modules in a CJS project (all \*.js are default interpreted as CJS)
1. esm-default: Demonstrates how to use CJS modules in a ESMJS project (all \*.js are default interpreted as ESMJS)

Both projects have 2 test files:

1. `testCjs` - Written in CJS to show how to load ES modules. Run with `npm run cjs`
2. `testEsm` - Written is ESMJS to show how to load CJS modules. Run with `npm run esmjs`

# References

- https://nodejs.org/api/esm.html#esm_interoperability_with_commonjs
- https://nodejs.org/api/modules.html
