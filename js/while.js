'use strict';

var number = 2;

while (number <= 65536) {
    console.log(number);
    number = number*2;
}

var allCones = Math.floor(Math.random() * 50) + 50;


while (allCones > 0) {

    var conesSold = (Math.floor(Math.random() * 5) +1);

    if (conesSold > allCones){
        console.log("I cant sell you that many. I only have " + allCones);
    } else {
        console.log("I sold " + conesSold);
        allCones = allCones - conesSold;
    }
    console.log(allCones);
}

console.log(allCones);