// https://github.com/ewasm/rust-ewasm/blob/wrc20/ewasm-token/bin2hex.js
var fs = require('fs');

var bin = fs.readFileSync('./src/wrc20.gr.wasm');

console.log('binary as hex:')
console.log(bin.toString('hex'))
