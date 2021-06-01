#!/usr/bin/env node
const requiredVersion = require("../package.json").version;
function run(argv) {
  if (argv[0] === "-v" || argv[0] === "--version") {
    console.log(`version is ${requiredVersion}`);
  } else if (argv[0] === "-h" || argv[0] === "--help") {
    console.log("  usage:\n");
    console.log("  -v --version [show version]");
  }
}
run(process.argv.slice(2));
