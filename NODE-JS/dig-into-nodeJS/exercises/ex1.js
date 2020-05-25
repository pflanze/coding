// Node.js
// My  Node.js program

// #!/usr/bin / env node

"use strict";

var path = require("path");
var fs = require("fs");

var getStdin = require("get-stdin");

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in",],
  string: ["file",],
});