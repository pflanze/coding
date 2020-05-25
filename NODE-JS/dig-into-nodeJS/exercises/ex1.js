// Node.js
// My  Node.js program
// How am I going to get information into my program?
// How can I get information out?

// How this can be printed to the screen with node?
// console.log("Hello World");
// How node connects to the environment around it?
// #!/usr/bin / env node

"use strict";

var path = require("path");
var fs = require("fs");

var getStdin = require("get-stdin");

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in",],
  string: ["file",],
});