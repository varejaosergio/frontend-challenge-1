var http = require('http');
var data = require('./src/js/index');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
}).listen(8080);