/*
=======================================================

** Week 6 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create an object called "me" that describes you with your name, city, and job title.
//    Display the content of the object in the HTML page.

var me = {
  name: "Del",
  city: "Boulder",
  jobTitle: "Manager"
};

document.getElementById("q1").innerHTML="<p>"+me.name+"</p>"+"<p>"+me.city+"</p>"+"<p>"+me.jobTitle+"</p>";

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members and display in the HTML page.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

me.family=['Megan', 'Katie', 'Ashley', 'Bailey'];
document.getElementById('q2').innerHTML = me.family;


// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city and display the results in the HTML page.

document.getElementById('q3').innerHTML = '<br>dot notation ' + me.city + '</br>';
document.getElementById('q3').innerHTML = '<br>bracket notation ' + me['city'] + '</br>';



// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };


// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)
document.getElementById('q4').innerHTML = invitees.adults[0].dinnerChoice;

// 5. Access Pablo's table number.
document.getElementById('q5').innerHTML = invitees.children[1].table;

// 6. Access Lauren's seating specialConsideration.
document.getElementById('q6').innerHTML = invitees.adults[2].specialConsiderations.seating;

// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
document.getElementById('q7').innerHTML = invitees.adults[1].dinnerChoice[2];

// 8. Access Ada's allergies.
document.getElementById('q8').innerHTML = invitees.children[2].allergies;


// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

document.getElementById('q9').innerHTML = "Lauren's appetizer is " + invitees.adults[2].dinnerChoice[0] + "." + "She will be eating " + invitees.adults[2].dinnerChoice[1] + " for dinner, and has selected " + invitees.adults[2].dinnerChoice[2] + " for dessert.";


// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
var jsWorkshop = new Object();

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
jsWorkshop.classmates= ['Nicole', 'Tom', 'Nick', 'Gracie', 'Erika'];
document.getElementById("q11").innerHTML =jsWorkshop.classmates

// 12. Get the length of the fourth classmate's name.
document.getElementById("q12").innerHTML = "The fourth classmate is " + jsWorkshop.classmates[3] + " and her name has " + jsWorkshop.classmates[3].length + " letters.";

// 13. Clear the classmates value.

jsWorkshop.classmates= [];
document.getElementById("q13").innerHTML = jsWorkshop.classmates


// ADVANCED TRACK
// A. Create an empty object called "books".

// B. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" object.

// Final desired result:
    // var books = {ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             }

// C. Access the author of the first book.

// D. Get the length of the author the the third book.

// E. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)

// F. Remove the second book from the books object.

// G. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
