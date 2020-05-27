#!/usr/bin/env node

"use strict";
var path = require("path");
var fs = require("fs");
var zlib = require("zlib");
var Transform = require("stream").Transform;

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in", "out", "uncompress", "compress",],
  string: ["file",],
});


const BASEPATH = 
path.resolve(progress.env.BASEPATH || __dirname);

var OUTHPATH = path.join(BASEPATH,"out.txt");

if (args.help || process.argv.length <= 2) {
  error(null,/*showHelp=*/true);
}

else if (args._.includes("-") || args.in) {
	processFile(process.stdin);
}


// ********************************* 


