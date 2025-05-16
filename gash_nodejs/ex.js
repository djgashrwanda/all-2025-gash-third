/* var time = 0;
setInterval(function(){
    time +=2;
    console.log(time + "second passed")
} , 2000)
 */


//display directory path
//console.log(__dirname);

// display file path
//console.log(__filename);

// make function statement
/*function hay(){
    console.log("hello gash");
}
hay();
*/
/*const hay = () =>{
    console.log('hello gashema');
}
hay();
*/

/* var hey = function(){
    console.log('hello gash');
}
hey();
*/
/* var counter = require('./mudule');
console.log(counter(['abana', 'amata' , 'ibyayi']));

*/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('server was requested:' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html' , 'utf8').pipe(res);
    }
    else if (req.url === '/contact') {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
        
    }
    else if (req.url === '/gash') {
        var gash = [{name: 'gashema francis' , age: 19 , location: 'kiziguro/kigali'}];
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(gash));
        
    }
    else {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }


})
server.listen(3001, '127.0.0.1');
console.log("you app was success");