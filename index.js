'use strict';

var events = require('events');
var hotel = require('./hotel');
var http = require('http');
var eventsConfig = require('./config').events;

http.createServer(function(req,res){
    res.writeHeader(200);
    res.write(`success\n\n`);
    
    //creating Hotel instances
    var myHotel_1 = new hotel('Sheraton', 'spa', 2);
    var myHotel_2 = new hotel('Moria', 'spa', 3);

    //callback functions
    myHotel_1.on(eventsConfig.ADDSTAR, myHotel_1.displayAdd);
    myHotel_1.on(eventsConfig.ADDSTAR, myHotel_1.displayHotel);
    myHotel_1.on(eventsConfig.REMSTAR, myHotel_1.checkZero);
    myHotel_1.on(eventsConfig.REMSTAR, myHotel_1.displayHotel);

    myHotel_2.on(eventsConfig.ADDSTAR, myHotel_2.displayAdd);
    myHotel_2.on(eventsConfig.ADDSTAR, myHotel_2.displayHotel);
    myHotel_2.on(eventsConfig.REMSTAR, myHotel_2.checkZero);
    myHotel_2.on(eventsConfig.REMSTAR, myHotel_2.displayHotel);

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
    
    //get messages object and put it in a string
    var printStr = myHotel_1.getPrintObjStr();
    printStr+= myHotel_2.getPrintObjStr();

    //send messages object to browser
    res.end(`${printStr}`);
}).listen(8080,`127.0.0.1`);

console.log(`listening on port 8080\n`);
