"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var enterANumber = confirm("Would you like to enter a number?");

if (enterANumber === false){
    alert("You cancelled the prompt")
} else {
    var number = parseFloat(prompt("Enter your number here"))
}

if (isNaN(number)){
    alert("What you entered is not a number.")
} else {
    if (number % 2 === 0) {
        alert("Your number is even!")
    } else {
        alert("Your number is odd!")
    }
    alert("Your number plus 100 is " + (number + 100));

    if (number > 0) {
        alert("Your number is a positive number!")
    } else {
        alert("Your number is a negative number!")
    }
}



console.log(number);
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// var  color=prompt("Enter a color here.");
//
// function analyzeColor(color) {
//
//     switch (color) {
//         case "red":
//             alert("Red is a color of the Angels");
//             break;
//         case "orange":
//             alert("Basketballs are orange");
//             break;
//         case "yellow":
//             alert("Red is a color of the Angels");
//             break;
//         case "green":
//             alert("Grass is green");
//             break;
//         case "blue":
//             alert("The ocean is blue");
//             break;
//         case "indigo":
//             alert("Indigo is in the rainbow");
//             break;
//         case "violet":
//             alert("Violets are violet");
//             break;
//         default:
//             alert("I dont know anything by that color")
//     }
// }
// console.log(analyzeColor(color));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// var totalAmount = prompt("Enter your total here");
//
// function calculateTotal(luckyNumber, totalAmount) {
//
//     switch (luckyNumber) {
//         case 0:
//             alert("Your total is $" + parseFloat(totalAmount));
//             break;
//         case 1:
//             alert("Your total is $" + parseFloat(totalAmount) * .90);
//             break;
//         case 2:
//             alert("Your total is $" + parseFloat(totalAmount) * .75);
//             break;
//         case 3:
//             alert("Your total is $" + parseFloat(totalAmount) * .65);
//             break;
//         case 4:
//             alert("Your total is $" + parseFloat(totalAmount) * .5);
//             break;
//         case 5:
//             alert("CONGRATULATIONS! You're a lucky winner and get this purchase free!");
//             break;
//     }
// }
// var luckyNumber = Math.floor(Math.random() * 6);
// calculateTotal(luckyNumber, totalAmount);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

