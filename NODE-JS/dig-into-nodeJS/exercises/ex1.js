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

// accessing the output streams
// process.stdout.write("Hello World\n");

// process.stdin.read()
// #!
// - \n - a character s

//!  streams are an actual kind of Data structure

//! If I want to write a content to a stream i call .write method

// console.log is a wrapper around process.stdout.write that throws on a trailing new line, bit console.log is doing many other things beside simply calling process.stdout.write. It is kind of equivalent of if putting a trailing newline in the output, before sending out. the whole point of Node using the asynchronous I/O model is that I/O can happen as efficiently as possible. 

//console.log(“Hello World”); and console.error(“Oops”);  they direct themselves to two different standard I/O streams, one standard out and one standard error , ?//by default the shell environment is interpreting standard out and standard error outputs both the same and just print them. But they are different by doing some file redirection (file descriptor redirection, some output redirection). 

// always run my code in "use strict" mode and before "use strict" i can have the line #!/usr/bin / env node

// How to make it executable? // node script / shell script 
// when writing node scripts to put for myself some kind of help output for my scripts, because I will come back to the script days later and I will forget how I am suppose to puss stuff in or run it. 

//! remember: good idea - always to have some help output. 

// when in exercise folder to run the code in terminal use command : ./ex1.js or if permission is denied use node ex1.js
//#!/usr/bin / env node
"use strict";
// define the function and call it 
// process.argv is an array of all the arguments that were passed in from the executing shell. So if I were to do console.log(process.argv) see the array and what has been passed to the program. 
// process.argv (argv - is name from traditional C - programming), it is called argv - for the list of arguments , and arc for the count. 
// using a package : minimist instead of regular expression and adding an extra parentheses set to execute the function, and I am going to tell it what array I want it to parse which is : process.argv.slice(2), i put it inside the parentheses as an INPUT
require("minimist")(process.argv.slice(2))

console.log(process.argv.slice(2));
// with .slice method i slice off the first two arguments
// write in terminal to call again and pass an extra parameter (node ex1.js --hello=world -c9 -88 -irena -ron (extra parameters ))
// how command line arguments get specified on the command line?
// --long parameter name (dash dash long parameter name) or single dash with a short parameter name, single dash with space in between, 
// there are different  conventions the way parameters get specified and none of that parsing is happening for us by node. I have to type it in terminal.
// printHelp();
// regular expression parsing but use a package instead : minimist


// *************************
// function to print basic output
function printHelp() {
  console.log("ex1 usage:")
  console.log(" ex.js --help");
  console.log("")
  console.log("--help              print this help");
  console.log("");
}

// First thing : how to get some input into my program,

// Ways of getting input from the outer system into my program. one of the most common is to use the command line parameters. ( ./ex1.js --hello=world) in my case in my terminal (node ex1.js --hello=wold) this is the input, the command line parameter that is going to come into my program. I have to be able to access that command line parameter. How can I do that? First I have to access the arguments that were passed to my program by way of another exposure of the POSEX,  which is process.args, args is plural.

/* var path = require("path");
var fs = require("fs");

var getStdin = require("get-stdin");

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in",],
  string: ["file",],
});  */