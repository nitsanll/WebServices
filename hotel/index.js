var events = require('events');
var utils = require('util');
utils.inherits(Hotel, events.EventEmitter);

function Hotel(name, type, rank)
{
    events.EventEmitter.call(this);
    this.hotelName = name;
    this.hotelType = type;
    this.hotelRank = rank;
    this.printObj= [""];     
    this.displayHotel = function() 
    {
        var str1 = ("Hotel's name: " + this.hotelName);
        var str2 = ("Hotel's type: " + this.hotelType);
        var str3 = ("Hotel's rank: " + this.hotelRank);
        var str4 = ("");
        var strArr = [str1, str2, str3, str4];
        console.log(str1);
        console.log(str2);
        console.log(str3);
        console.log(str4);
        for(var i=0; i<4; i++)
       
        {
            this.printObj.push(strArr[i]);
            this.printObj.push("\n");
        }
    };
}

Hotel.prototype.addStar = function()
{
    this.hotelRank+=1;
    this.emit('starAdded');
};

Hotel.prototype.removeStar = function()
{
    this.hotelRank-=1;
    this.emit('starRemoved');  
};

Hotel.prototype.checkZero = function()
{
     if(this.hotelRank<0) 
    {
        this.hotelRank = 0;
        var str = "Hotel's rank is 0 stars. cannot remove a star!";
        console.log(str);
        this.printObj.push(str);
        this.printObj.push("\n");

    }
    else 
    {
        var str2 = "star has been removed!";
        console.log(str2);
        this.printObj.push(str2); 
        this.printObj.push("\n");
    }  
};

Hotel.prototype.displayAdd = function()
{
    var str = "star has been added!";
    console.log(str);
    this.printObj.push(str);
    this.printObj.push("\n");
};

module.exports = Hotel;
