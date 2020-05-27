Single thread, event loop and blocking code

Node js uses only one single javascript thread.

how node is able to handle multiple requests?

The event loop is automatically started by node.js and basically the event loop will only handle callbacks that contain fast finishing code. 

Worker pool is kind of totally detached to my js code and it runs on 