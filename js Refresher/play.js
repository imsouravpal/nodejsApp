var name = 'Sourav';
var age = 27;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return ('Name is: ' + userName +
            ', age is: ' + userAge +
            ', and the user has hobbies: ' + userHasHobby);
}

console.log(name);
console.log(summarizeUser(name, age, hasHobbies));



/******************************************************      13. Let & Const     ******************************************************/

console.log("");
console.log("*****************     13. Let & Const     *****************");

// const keyword used for them whose values never changed. Here the value of name1 & hasHobbies1 never changed so we use const
const name1 = 'Sourav';
let age1 = 27;
const hasHobbies1 = true;

// If now we  tried to change the value of name1 or hasHobbies1 this will throw an error. But we can change value of age1
//name1 = 'Pal'; // TypeError: Assignment to constant variable.
age1 = 28;

console.log(summarizeUser(name1, age1, hasHobbies1));




/*********************************************      14. Understanding Arrow Functions     *********************************************/

/**
 * we can rewrite above summarizeUser function as a arraow function
 */

console.log("");
console.log("*****************     14. Understanding Arrow Functions     *****************");

// Anonymous Function :
const summarizeUserAnonymousFunction = function(userName, userAge, userHasHobby) { // This is a annonimous function because we dont assign a name after function
    return ('Name is: ' + userName +
            ', age is: ' + userAge +
            ', and the user has hobbies: ' + userHasHobby);
}

console.log(summarizeUserAnonymousFunction(name1, age1, hasHobbies1));


// Arrow Function : Now we modify above Anonymous Function to Arrow Function
const summarizeUserArrowFunction = (userName, userAge, userHasHobby) => { // Arrow Function: nameOfFunction = (Arguments) => {function Body}
    return ('Name is: ' + userName +
            ', age is: ' + userAge +
            ', and the user has hobbies: ' + userHasHobby);
}

console.log(summarizeUserArrowFunction(name1, age1, hasHobbies1));

// Another example of arrow function:
// const add = (a, b) => { return a + b }; // Because we have only 1 statement which is return statement so we can omit curly bases and return and write like this
const add = (a, b) => a + b;
console.log("Sum of two numbers are: " + add(1, 2));

//const addOne = (a) => a + 1; // If you have only One argument you can remove () this brackets also. So above function we can write like this
const addOne = a => a + 1;
console.log("Always add one to number : " + addOne(1));

// Arrow function with no arguments:
const withoutArgumentArrayFunction = () => 1 + 2;
console.log("With out Argument Array Function : " + withoutArgumentArrayFunction());






/**************************************     15. Working with Objects, Properties & Methods     ***************************************/

console.log("");
console.log("*****************     15. Working with Objects, Properties & Methods     *****************");

const person = {
    name: 'Sourav',
    age: 28,
    // Below function will not able to catch name value, because this here refers to the global scope to the global node runtime scope and not to this object
    /*greet: () => {
        console.log('Hi, I am ' + this.name); // This will return ----> Hi, I am undefined
    }*/

    // So to fix that we either reffer to old school function(by using function keyword and with out "=>" symbol) like this
    greet: function() {
        console.log('Hi, I am ' + this.name); // This will return ----> Hi, I am undefined
    },

    // Or we can also do like this
    greet1() {
        console.log('Hi, I am ' + this.name); // This will return ----> Hi, I am undefined
    } 

};
person.greet();

console.log(person);









/*************************************************     16. Arrays & Array Methods     *************************************************/

console.log("");
console.log("*****************     16. Arrays & Array Methods     *****************");

const hobbies = ['Adventure Sports', 'Cooking', 'Football'];
for(let hobby of hobbies) {
    console.log(hobby);
}
// js methods for Arrays
console.log("After map our array: " + hobbies.map(hobby => 'Hobby: ' + hobby)); // map function is always created a new array.
console.log("Original Array : " + hobbies);









/********************************************     17. Arrays, Objects & Reference Types     *******************************************/

/**
 * Objects and Arrays are so-called reference types
 * so if we declear an array as const like this const hobbies = ['Adventure Sports', 'Cooking', 'Football'];
 * we still can edit this array, without violating the restriction that constants must not change.
 * 
 * The reason for that is that reference types only store an address pointing at the place in memory where
 * that array is stored and that pointer this address has not changed by us adding a new element or deleting an element.
 */

console.log("");
console.log("*****************     17. Arrays, Objects & Reference Types     *****************");

hobbies.push('Programming');
console.log(hobbies);










/******************************************     18. Understanding Spread & Rest Operators     *****************************************/

console.log("");
console.log("*****************     18. Understanding Spread & Rest Operators     *****************");



