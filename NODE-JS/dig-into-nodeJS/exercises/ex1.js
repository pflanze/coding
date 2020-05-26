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

// pulling in  another built-in node package called: path , path has different methods
var path = require("path");

// to access the file system I need a built in module from Node called : fs (file system)
var fs = require("fs");
// minimist is a user provided package and it would show up in the Node modules folder but path is just built into node.
// using a package : minimist instead of regular expression and adding an extra parentheses set to execute the function, and I am going to tell it what array I want it to parse which is : process.argv.slice(2), i put it inside the parentheses as an INPUT, and what comes back from that function call is my actual object that has all of the args in it. 
var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"] //anything in this list is always a string
});
// Arguments handling 
// if args.help (then I know I want to print the help), that means that if there is a --help anywhere in there ,even if there is other stuff, it sort of overrides everything.
if (args.help) {
  printHelp();
}
else if (args.file) {
  //let filepath = path.resolve(args.file);
  // calling processfILE
  processFile(path.resolve(args.file));
  // console.log(__dirname); //magic variable available in my Node programs and it tells me the current direct not the the current directory, it tells me the current directory of the current file that I am accessing it in. It uses __dirname if only I give it a relative path, 
  // console.log(filepath);
  //console.log(args.file);
}
else {
  error("Incorrect usage.", true); // passing true
}

console.log(args);
console.log(process.argv.slice(2));
// with .slice method i slice off the first two arguments
// write in terminal to call again and pass an extra parameter (node ex1.js --hello=world -c9 -88 -irena -ron (extra parameters ))
// how command line arguments get specified on the command line?
// --long parameter name (dash dash long parameter name) or single dash with a short parameter name, single dash with space in between, 
// there are different  conventions the way parameters get specified and none of that parsing is happening for us by node. I have to type it in terminal.
// printHelp();
// regular expression parsing but use a package instead : minimist

//node ex1.js --hello-=world -9 - foobar   
// output in terminal: { '9': '-', _: [ 'foobar' ], 'hello-': 'world' }
// [ '--hello-=world', '-9', '-', 'foobar' ]
// where in the output is foobar is sort of an overflow

//{ '9': '-', _: [ 'foobar' ], help: false, 'hello-': 'world' }
//[ '--hello-=world', '-9', '-', 'foobar' ] , no matter how it is specified it always want it to be a boolean , if it is present is true if not present is false, but if I do something like --file , and give it no value, that would typically be assumed to be a boolean. but because I told it to be a string it will come as an empty string.
// output: { _: [], help: 'foobar', file: '' }
// [ '--help=foobar', '--file' ] 
// overriding some of of those defaults , allowing me to very specifically control that this one should always be treated as a string. 

// *************************

// rather than dumping my logic all into the if statement i will write a function processFile()
function processFile(filepath) {
  // get the content of file 
  var contents = fs.readFileSync(filepath); // how buffers work? I see stringification of a binary buffer
  //node ex1.js --file=files/hello.txt 
  //output : <Buffer 48 65 6c 6c 6f 0a>
  //{ _: [], help: false, file: 'files/hello.txt' }
  //[ '--file=files/hello.txt' ]     // i see stringification of binary buffer because by default , the file system commands, most I/O commands assuming those low level binary buffers                
  //console.log(contents); 
  process.stdout.write(contents); // passing not a stream but a buffer directly to process.stdout.write
}

function error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

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