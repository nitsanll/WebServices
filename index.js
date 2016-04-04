var events = require('events');
var utils = require('util');
var hotel = require('./hotel');
var http = require('http');

http.createServer(function(req,res){
    res.writeHeader(200);
    res.write("success\n\n");
    var myHotel_1 = new hotel("sheraton", "spa", 2);
    var myHotel_2 = new hotel("moria", "spa", 3);

    myHotel_1.on("starAdded", myHotel_1.displayAdd);
    myHotel_1.on("starAdded", myHotel_1.displayHotel);
    myHotel_1.on("starRemoved", myHotel_1.checkZero);
    myHotel_1.on("starRemoved", myHotel_1.displayHotel);

    myHotel_2.on("starAdded", myHotel_2.displayAdd);
    myHotel_2.on("starAdded", myHotel_2.displayHotel);
    myHotel_2.on("starRemoved", myHotel_2.checkZero);
    myHotel_2.on("starRemoved", myHotel_2.displayHotel);

    myHotel_1.removeStar();
    myHotel_1.removeStar();
    myHotel_1.removeStar();
    myHotel_1.addStar();
    myHotel_1.addStar();

    myHotel_2.removeStar();
    myHotel_2.removeStar();
    myHotel_2.removeStar();
    myHotel_2.addStar();
    myHotel_2.addStar();

    res.end(myHotel_1.printObj + myHotel_2.printObj);
}).listen(8080,'127.0.0.1');

console.log('listening on port 8080');
