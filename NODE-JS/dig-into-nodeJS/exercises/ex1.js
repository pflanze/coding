// Node.js
// My  Node.js program
// How am I going to get information into my program?
// How can I get information out?

// How this can be printed to the screen with node?

// console.log("Hello World");
// console.error("Oooops");

// file descriptors 
// node ex1.js 1>/dev/null - redirecting outputs in different log files
// node ex1.js 2>/dev/null

// How node connects to the environment around it?
//! #!/usr/bin / env node , this says go and find node wherever it is in my system and use node to interpret the rest of my program. 

// #!/user/bin/env node

// I am in Node and exposed to POSIX interface

// to access the stream for standard output use : process.stdout

// accsessing the output streams
process.stdout.write("Hello World\n");

// process.stdin.read()
// #!
// - \n - a character s

//!  streams are an actual kind of Data structure

//! If I want to write a content to a stream i call .write method

// console.log is a wrapper around process.stdout.write that throws on a trailing new line, bit console.log is doing many other things beside simply calling process.stdout.write. It is kind of equivalent of if putting a trailing newline in the output, before sending out. the whole point of Node using the asynchronous I/O model is that I/O can happen as efficiently as possible. 

//console.log(“Hello World”); and console.error(“Oops”);  they direct themselves to two different standard I/O streams, one standard out and one standard error , ?//by default the shell environment is interpreting standard out and standard error outputs both the same and just print them. But they are different by doing some file redirection (file descriptor redirection, some output redirection). 

// always run "use strict" mode
"use strict";

var path = require("path");
var fs = require("fs");

var getStdin = require("get-stdin");

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in",],
  string: ["file",],
}); 