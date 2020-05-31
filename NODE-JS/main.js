const http = require('http')

const port = 3000

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.statusCode = 200;
  //res.end('Hello World');
  if (req.method == "GET") {
    const urlStrings = req.url.split("/")
    if (urlStrings[1] == 'hello') {
      const message = {
        "message": `Hello ${urlStrings[2]}!`
      }
      res.end(JSON.stringify(message))
    }
    res.end('Invalid url invoke with /hello/');
  }
})

server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
})