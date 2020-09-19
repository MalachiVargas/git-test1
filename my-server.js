var http = require('http');

http
  .createServer(function (req, res) {
    res.write('Hello World from Malachi Vargas!');
    res.end();
  })
  .listen(3000, function () {
    console.log('Server running port 3000');
  });
