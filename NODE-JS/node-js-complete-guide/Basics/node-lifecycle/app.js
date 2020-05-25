const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit();
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head> <title>My First Page</title></head>');
  res.write('<body><h1>hALLO FROM MY Node.js server</h1></body>');
  res.write('</html>');
  res.end(); // ending the response and node.js send it back to the client
});

server.listen(3000);