'use strict';

var events = require('events');
var hotel = require('./hotel');
var http = require('http');

http.createServer(function(req,res){
    res.writeHeader(200);
    res.write(`success\n\n`);
    
    //creating Hotel instances
    var myHotel_1 = new hotel('Sheraton', 'spa', 2);
    var myHotel_2 = new hotel('Moria', 'spa', 3);

    //callback functions
    myHotel_1.on("starAdded", myHotel_1.displayAdd);
    myHotel_1.on("starAdded", myHotel_1.displayHotel);
    myHotel_1.on("starRemoved", myHotel_1.checkZero);
    myHotel_1.on("starRemoved", myHotel_1.displayHotel);

    myHotel_2.on("starAdded", myHotel_2.displayAdd);
    myHotel_2.on("starAdded", myHotel_2.displayHotel);
    myHotel_2.on("starRemoved", myHotel_2.checkZero);
    myHotel_2.on("starRemoved", myHotel_2.displayHotel);

    //functions demo
    myHotel_1.removeStar();
    myHotel_1.removeStar();
    myHotel_1.removeStar();
    myHotel_1.addStar();
    myHotel_1.addStar();

    myHotel_2.removeStar();
    myHotel_2.removeStar();
    myHotel_2.addStar();
    myHotel_2.addStar();
    
    res.end(`${myHotel_1.printObj} ${myHotel_2.printObj}`); //sends the messages to browser
}).listen(8080,`127.0.0.1`);

console.log(`listening on port 8080\n`);
