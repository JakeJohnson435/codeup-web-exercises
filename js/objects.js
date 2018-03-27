(function() {
    "use strict";

    // /**
    //  * TODO:
    //  * Create an object with firstName and lastName properties that are strings
    //  * with your first and last name. Store this object in a variable named
    //  * `person`.
    //  *
    //  * Example:
    //  *  > console.log(person.firstName) // "Rick"
    //  *  > console.log(person.lastName) // "Sanchez"
    //  */

    // var person = {};
    //     person.firstName = "Jake";
    //     person.lastName = "Johnson";
    //     person.sayHello = function(){
    //         return "Hello " + person.firstName + " " + person.lastName;
    //     };
    //
    //
    // console.log(person.firstName);
    // console.log(person.sayHello());



    // /**
    //  * TODO:
    //  * Add a sayHello method to the person object that returns a greeting using
    //  * the firstName and lastName properties.
    //  * console.log the returned message to check your work
    //  *
    //  * Example
    //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //  */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */




    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    //
    //
    //
    // shoppers.forEach(function(shoppers){
    //     if (shoppers.amount > 200){
    //         return console.log(shoppers.name + " has spent more than $200 and is eligible for a 12% discount. Your new price is $" + parseFloat(shoppers.amount - (shoppers.amount*.12)).toFixed(2));
    //     } else {
    //         return console.log(shoppers.name + " only spent " + shoppers.amount + " and therefor is not eligible for a discount.")
    //     }
    // });

    // for (var i = 0; i < shoppers.length; i++) {
    //     if (shoppers[i].amount >= 200) {
    //         console.log(shoppers[i].name + " will pay $" + shoppers[i].amount * 0.88);
    //     } else {
    //         console.log(shoppers[i].name + " will pay $" + shoppers[i].amount);
    //     }
    // }


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */



    // var books = [
    //     {
    //         title: "'The Push'",
    //         author: {
    //             firstName: "Tommy",
    //             lastName: "Caldwell"
    //         }
    //     },
    //     {
    //         title: "'Scar Tissue'",
    //         author: {
    //             firstName: "Anthony",
    //             lastName: "Kiedis"
    //         }
    //     },
    //     {
    //         title: "'Oathbringer'",
    //         author: {
    //             firstName: "Brandon",
    //             lastName: "Sanderson"
    //         }
    //     },
    //     {
    //         title: "'The Name of the Wind'",
    //         author: {
    //             firstName: "Patrick",
    //             lastName: "Rothfuss"
    //         }
    //     },
    //     {
    //         title: "'Typhoon'",
    //         author: {
    //             firstName: "Clive",
    //             lastName: "Cussler"
    //         }
    //     }
    // ];
    //
    //
    //
    //
    // books.forEach(function(book, index){
    //     console.log("Book # "+(index+1));
    //     console.log("Title " + book.title);
    //     console.log("Author " + book.author.firstName + " " + book.author.lastName);
    //
    // });

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    //     if (alert===true){
    //         var title = prompt("Enter the title of the book");
    //         var firstName = prompt("Enter the author's first name");
    //         var lastName = prompt("Enter the author's last name");
    //         var anotherBook = alert("Would you like to add another book?");
    //         return ("Title: "+title+"Author: "+firstName+" "+lastName);
    //     }
    //
    // console.log()

    function addTitle(){
        var addedTitle = prompt("Enter a title here");
        return addedTitle
    }

    function addAuthor(){
        var addedAuthor = prompt("Enter Author's name");
        return addedAuthor
    }

    confirm("Would you like to add some books to our database?");

    // if (confirm=true){
    //     var bookList = [
    //         {author: addAuthor(), title: addTitle()},
    //         {author: addAuthor(), title: addTitle()},
    //         {author: addAuthor(), title: addTitle()}
    //     ]
    // } else {
    //     console.log("No book added")
    // }

    var bookList = [];

    do {
        var author = addAuthor();
        var title = addTitle();
        bookList.push({author: author, title: title})
    } while (
        confirm("Do you want to continue?"));

    console.log(bookList);

})();
