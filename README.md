This repo demonstrates how we can load a wasm npm module in a node environment, yet we're unable to load the same module
with Jest.

This repo provides 2 reproducible examples:

1. **in node**: run `npm run test-node` to successfully load the es6 wasm module 
2. **in node with Jest**: run `npm run test-jest` to see how the same example fails when loading the module with Jest.

Any help with troubleshooting the second example would be great!

## The tests:

The tests are pretty simple - just loading an es6 wasm module that I've been working on (https://www.npmjs.com/package/bin_packer_3d).

I have it working in the browser via webpack, and in node. Why can't it work with Jest?

## Node Version:

As indicated in the `.tools-versions` file, the tests have been run with node `14.15.4`.