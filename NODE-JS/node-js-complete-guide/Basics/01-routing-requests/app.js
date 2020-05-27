const http = require('http');
const fs = require('fs'); // fs allowes me to work with the file system

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    // GET and PST requests methods
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  //redirecting file
  if (url === '/message' && method === 'POST') {
    const body = [];
    //
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk); // with push changing the object behind that body element, that body object, editing the data in that object not the value itself, not the object itself.
    });
    // the function below is event listener 
    return req.on('end', () => {
      // parseBody is a buffer ,the buffer is waiting as a bus on a stop
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      fs.writeFileSync('message.txt', message, err => {

        //console.log(parseBody);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });

    });

  }
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);


// the stream is an ongoing process
// a buffer is simply a construct which allows me to hold multiple chuncs and work with them before they are released, buffer is like a bus I can track it 

// 