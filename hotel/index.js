'use strict';

var events = require('events');
var utils = require('util');

module.exports = class Hotel extends events 
{
    constructor(name, type, rank)
    {
        super();
        this.hotelName = name;
        this.hotelType = type;
        this.hotelRank = rank;
        this.printObj= [``];     
    }
    displayHotel()      //prints hotel's details
    {
        var str1 = (`Hotel's name: ${this.hotelName}`);
        var str2 = (`Hotel's type: ${this.hotelType}`);
        var str3 = (`Hotel's rank: ${this.hotelRank} stars`);
        var str4 = (``);
        var strArr = [str1, str2, str3, str4];
        console.log(`${str1}`);
        console.log(`${str2}`);
        console.log(`${str3}`);
        console.log(``);
        for(var i=0; i<4; i++)  
        {
            this.printObj.push(strArr[i]);
            this.printObj.push(`\n`);
        }
    }
    addStar()       //add a star to hotel's rank
    {
        this.hotelRank+=1;
        this.emit('starAdded');
    }
    removeStar()        //remove a star from hotel's rank
    {
        this.hotelRank-=1;
        this.emit('starRemoved');  
    }
    checkZero()         //anounce a star has been removed, and checks if amount of stars is under zero 
    {
         if(this.hotelRank<0) 
        {
            this.hotelRank = 0;
            var str = `Hotel's rank is 0 stars. cannot remove a star!`;
            console.log(`${str}`);
            this.printObj.push(str);
            this.printObj.push(`\n`);

        }
        else 
        {
            var str2 = `star has been removed!`;
            console.log(`${str2}`);
            this.printObj.push(str2); 
            this.printObj.push(`\n`);
        }  
    }
    displayAdd()        //anounce a star has been added
    {
        var str = `star has been added!`;
        console.log(`${str}`);
        this.printObj.push(str);
        this.printObj.push(`\n`);
    }
    getPrintObjStr()        //returns messages object
    {
        var str = "";
        var index;
        var arr = this.printObj;
        for (index = 0; index < arr.length; index++) 
        {
            str += arr[index];
        }
        return str;
    }
}