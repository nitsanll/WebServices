var http = require('http');
http.createServer(function(req,res){
    res.writeHeader(200);
    res.write("success\n");
    res.end("");
}).listen(8080,'127.0.0.1');

console.log('listening on port 8080');