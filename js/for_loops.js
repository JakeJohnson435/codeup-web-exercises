'use strict';

// function showMultiplicationTable(value){
//     console.log(value + " x 1 = " + value);
//     console.log(value + " x 2 = " + (value*2));
//     console.log(value + " x 3 = " + (value*3));
//     console.log(value + " x 4 = " + (value*4));
//     console.log(value + " x 5 = " + (value*5));
//     console.log(value + " x 6 = " + (value*6));
//     console.log(value + " x 7 = " + (value*7));
//     console.log(value + " x 8 = " + (value*8));
//     console.log(value + " x 9 = " + (value*9));
//     console.log(value + " x 10 = " + (value*10));
// }
//
// showMultiplicationTable(parseFloat(prompt("Enter a number")));

function randomNumber(){
    return Math.floor(Math.random() * 180) + 20;
}

for (var value = 1; value <=10; value++) {

    number = randomNumber();

    if (number % 2 === 0) {
        console.log(number +" Is Even");
    } else {
        console.log(number +" Is Odd");
    }
}

// function concatenate(givenNumber) {
//     return givenNumber.toString();
// }

// for (var value = 1; value <=9; value++) {
//
//     if (value == 1) {
//         console.log(1);
//     } else if (value == 2) {
//         console.log(22)
//     } else if (value == 3) {
//         console.log(333)
//     } else if (value == 4) {
//         console.log(4444)
//     } else if (value == 5) {
//         console.log(55555)
//     } else if (value == 6) {
//         console.log(666666)
//     } else if (value == 7) {
//         console.log(7777777)
//     } else if (value == 8) {
//         console.log(88888888)
//     } else if (value == 9) {
//         console.log(999999999)}
// }
//
// for (var value = 100; value >=5; (value-=5)) {
//     console.log(value);
// }

for (var value=1; value<10; value++) {
    var aString=value.toString();
    console.log(aString.repeat(value));
}