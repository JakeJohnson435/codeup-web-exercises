'use strict';

var number = 2;

while (number <= 65536) {
    console.log(number);
    number = number*2;
}

var allCones = Math.floor(Math.random() * 50) + 50;


while (allCones >= 0) {
    console.log(allCones);
    allCones = allCones - (Math.floor(Math.random() * 5) +1);
}

console.log(allCones);