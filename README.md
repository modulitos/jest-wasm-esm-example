This repo is an example for how we can run wasm node modules in a node environment.

This repo provides 2 reproducible examples:

1. successfully running an es6 wasm module in node (via `npm run test-node`)
2. failing to run an es6 wasm module in node with Jest (via `npm run test-jest`)

Any help with troubleshooting the second example would be great!

## The tests:

The tests are pretty simple - just loading an es6 wasm module (https://www.npmjs.com/package/bin_packer_3d).
I have it working in the browser via webpack, and in node. Why can't it work with Jest?

## Node Version:

As indicated in the `.tools-versions` file, the tests have been run with node `14.15.4`.