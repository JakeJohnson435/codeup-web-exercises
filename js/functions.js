"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// var name = prompt("What is your name?");
//
// function sayHello(name){
//     return("Hello, " + name);
// }
//
// var helloMessage = sayHello(name);
// console.log(helloMessage);



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */



/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo(number){
//     return number === 2;
// }
//
// isTwo(random);
// console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// function calculateTip(tipPercentage, billTotal){
//     var tipAmount = (tipPercentage * billTotal);
//     return tipAmount;
// }
//
// console.log(calculateTip(.25, 25.50));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// var userBill = prompt("What was the total of the bill?");
// var userPercent = prompt("What percent would you like to tip?");
//
// alert(calculateTip(userBill, userPercent));


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// var originalPrice = prompt("What was the price of your bill?");
// var discountPrice = .25;
//
// function applyDiscount(originalPrice, discountPrice){
//     var discountAmount = (originalPrice * discountPrice);
//     return originalPrice - discountAmount;
// }
//
// alert("Your price after discount is $" + (applyDiscount(originalPrice, discountPrice)));



// function isOdd(someNumber){
//     var answer = someNumber%=2
//     return answer===1;
//
// }
//
// console.log(isOdd(8));

//
// function isEven(someNumber){
//     var answer = someNumber%=2
//     return answer===0;
//
// }
//
// console.log(isEven(7));
//
//
// function isPositive(someNumber){
//     return someNumber>0;
//
// }
//
// console.log(isPositive(-6));

// function decrement(someNumber){
//     return someNumber-1;
//
// }
//
// console.log(decrement(182));

// function hasSpaces(someString){
//     var typedString = prompt("Enter some text");
//     var answer = typedString.indexOf(" ");
//     return answer !=-1;
//
// }
//
// console.log(hasSpaces());
//
// function isFive(someNumber){
//     return someNumber===5;
//
// }
//
// console.log(isFive(.5));

// function isSquare(someNumber){
//     return someNumber*someNumber;
//
// }
//
// console.log(isSquare(5));
//
// function isCube(someNumber){
//     return someNumber*someNumber*someNumber;
//
// }
//
// console.log(isCube(5));

// function isHalf(someNumber){
//     return someNumber/2;
//
// }
//
// console.log(isHalf(5));
//
// function isDouble(someNumber){
//     return someNumber*2;
//
// }
//
// console.log(isDouble(5));

function isRightTriangle(a, b, c){

    return (a*a)+(b*b)==c;

}

console.log(isRightTriangle(5, 5, 60));