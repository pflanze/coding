#### Node.js Module Types

### Node.js includes three types of modules:

Core Modules
Local Modules
Third Party Modules

Node is all about I/O. Node is all about modeling I/O in an efficient way.

(node - the core usage  which is actually all about modelling I/O in an efficient way)

### Important 
without understanding I/O bound tasks communications on deeper level no chance of getting to  node ,  and asynchronous event loop is  the compelling model for I/O bound tasks, and that is the sweet spot of node js

##### How node connects to the environment around it?
Have to understand a standard for I/O and system integration, and system-level-task calling, called - P-O-S-I-X.

#### POSIX is essentially  a way  that C-style programs integrate with Linux-style operating systems. POSIX is standard I/O subsystem.

#### What is a Standard I/O ?

In computer programming, standard streams are preconnected input and output communication channels between a computer program and its environment when it begins execution. The three input/output (I/O) connections are called standard input (stdin), standard output (stdout) and standard error (stderr).

By convention, UNIX assigns the file numbers 0, 1, and 2 to the standard input, output, and error streams. Some programs use UNIX style I/O with these file numbers in place of standard I/O to stdin , stdout , and stderr , but this practice is nonportable.

Standard I/O is a set of three streams that model input and output to a program.

those are file descriptors that reference input, output and second channel of output called error.

How can can I access, at a fundamental level those I/O streams that are exposed in my Node program? Node make the choice to expose most of the system connection through a POSIX-like interface. 

The main touch-point to access them is called : process 
( this is an object that is available in all my Node programs,ans they hang a bunch of stuff off of process that are these these connections to my overall hosting system)

JavaScript does not have anything in the spec for I/O. 

console.log is not in the JavaScript spec. There is a second spec for console, but not everybody adheres to it.

JavaScript is agnostic to I/O. And this one of the reasons JS to be so successfull because it is much easier to adapt to other environments. The language does not make many assumptions about how communication is going to happen.  It is up to the environment to decide. 

In the browser is not a POSEX environment, because I am not dealing with processes, and process IDs, simply need to console.log and it is running in the browser, the browser choose to expose it in a different way, It's just a direct connection over the dev tools.
And that is a difference based on the hosting environment exposing the I/O. 

