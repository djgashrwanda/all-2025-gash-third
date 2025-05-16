var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('server listed:' + req.url);
    res.writeHead(200, {'content-type': 'text/html'})

var read = fs.createReadStream(__dirname + '/index.html', 'utf8');
read.pipe(res)

})
server.listen(3000, '127.0.0.1');
console.log("you app was success");