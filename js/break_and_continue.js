

// for (var value =1; value <=50; value++) {
//     if (value % 2 !== 0) {
//         console.log("Here is an odd number: " + value)
//     }
// }

do {
    var number = parseFloat(prompt("Enter an odd number between 1 and 49"));
} while (number > 49 || number % 2 == 0);

console.log("Number to skip is "+ number);

for (var value = 1; value <=50; value++) {
    if (value == number){
        console.log("Yikes! Skipping number: "+value);
    } else if (value % 2 !==0) {
        console.log("Here is an odd number " + value);
    } else {
        continue;
    }

}