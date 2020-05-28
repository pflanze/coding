#!/usr/bin/env node

"use strict";

var util = require("util");
var path = require("path");
var fs = require("fs");
var zlib = require("zlib");
// a transform stream , the way the transform stream works is kind of like an array,  
// stream is a built in module
var Transform = require("stream").Transform;
// the reason for a transform stream is so I can step in the middle of a stream pipe and item by item I can process what is going through it, 
var CAF = require("caf");

// async initialization


// ********************************** 

async function main() {
  try {
    await fsStatAsync{ BASEOUTPATH };
  }
  catch (err) {
    await fsMkdirAsync{ BASEOUTPATH };
  }
}