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
const summarizeUserAnonymousFunction = function (userName, userAge, userHasHobby) { // This is a annonimous function because we dont assign a name after function
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
    greet: function () {
        console.log('Hi, I am ' + this.name); // This will return ----> Hi, I am Sourav
    },

    // Or we can also do like this
    greet1() {
        console.log('Hi, I am ' + this.name); // This will return ----> Hi, I am Sourav
    }

};
person.greet();

console.log(person);









/*************************************************     16. Arrays & Array Methods     *************************************************/

console.log("");
console.log("*****************     16. Arrays & Array Methods     *****************");

const hobbies = ['Adventure Sports', 'Cooking', 'Football'];
for (let hobby of hobbies) {
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

/**
 * In Morder there are two important operators you all should be aware of
 * Spread & Rest Operators
 */

console.log("");
console.log("*****************     18. Understanding Spread & Rest Operators     *****************");

// Spread: Let's say we want to implement the pattern where when we add a new hobby, we don't edit the original array, but we create a new array with all the old values and the new value.
// To copy a array there are many techniques
const copyArray = hobbies.slice();
console.log("Coppies array : " + copyArray); // We can pass arguments to narrow down the range of elements we want to copy. And With no arguments, We copy the entire array.

// Other technique to copy an array
const copyArray2 = [hobbies]; // this will give an new array and inside that 1st object is our hobbies array. So this will give a 2D array
console.log("Another techniques to Copy an array : " + copyArray); // Output: [[Adventure Sports, Cooking, Football, Programming]] ---> Array in an array

// Copy using Spread Operator: It takes the array or object after the operator and pull out all the elements or properties.
//                              So all the elements of an array or all the properties of an object and put it to whatever is around that spread operator.
const copyArrayUsingSpreadOperator = [...hobbies];
console.log("Copy an array Using Spread Operator : " + copyArrayUsingSpreadOperator); // Output: [Adventure Sports, Cooking, Football, Programming]

const copyPersonObjectUsingSpreadOperator = { ...person };
console.log("Copy person Using Spread Operator : " + copyPersonObjectUsingSpreadOperator);

// Rest Operator: 
// In below example we can see But if we pass 1, 2, 3, 4 here this will not give any exception but it gives output 1, 2, 3 because we use 3 arguments so 4 will be omitted
// To solve this we need to use rest operetor
const withoutRestOperatorExample = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};
console.log("Without Rest Operator Example: " + withoutRestOperatorExample(1, 2, 3)); // Output: 1 2 3
console.log("Without Rest Operator Example: " + withoutRestOperatorExample(1, 2, 3, 4)); // Output: 1 2 3

const restOperatorExample = (...args) => {
    return args;
};
console.log("With Rest Operator Example: " + restOperatorExample(1, 2, 3)); // Output: 1 2 3
console.log("With Rest Operator Example: " + restOperatorExample(1, 2, 3, 4)); // Output: 1 2 3 4











/**************************************************************     19. Destructuring     *************************************************************/

console.log("");
console.log("*****************     19. Destructuring     *****************");

// Object Destructuring: 
// 1st print Person name by using another function
const printPersonName = (personDate) => {
    console.log("Print name without Object Destructuring: " + personDate.name);
}
printPersonName(person); // Output: Sourav

// Now the same thing we can achive by using Object Destructuring
const printPersonNameUsingObjectDestructuring = ({ name, age }) => {
    console.log("Print name & age by Object Destructuring: " + name, age);
}
printPersonNameUsingObjectDestructuring(person); // Output: Sourav 28

// Now we can store this name and age in a local variable and print them
const { personName, personAge } = person;
console.log("Object Destructuring by taking name and age in a local variable: " + name, age); // Output: Sourav 28

// Const Destructuring in an Array by using local variable:
const [hobby1, hobby2] = hobbies;
console.log("Object Destructuring of Array by taking 1st and 2nd hobbie in a local variable: " + hobby1, hobby2);










/**************************************************************     20. Async Code & Promises     *************************************************************/

console.log("");
console.log("*****************     20. Async Code & Promises     *****************");

// Lets Understand what is Asynchronous code is
setTimeout(() => {
    console.log('2000 milliseconds timer is done!');
}, 2000); // wait for 2 second before running above console log

// Synchronous Code
console.log('Hello!');
console.log('Hi!');

/**
 * When we work with Async code there are multiple ways to handle it
 * callback function: this is the oldest one to handle Async code but you might face a problem if you have a couple of depending async operations.
 * Lets see that in below example
 */

const fetchData = callback => { // So now here in fetchData, I need some way of doing something when this inner timmer is done. So here I will actually expect an argument which I'll name callback
    // because this argument will be a function I will eventually call in my inner function here once I'm done with the timer
    setTimeout(() => {
        callback('Done!');
    }, 1500);
};
// This is our main function and from here we call fetchData function
setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => { // Here I call fetchData, from inside this setTimeout call and  here, I need to pass another callback
        console.log(text);
    });
}, 2000);



// Promises : Sometimes we need to use 3rd party packages which uses promises for us.
// So lets create a promise inside in our fetchData function 
const fetchDataPromiseExample = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchDataPromiseExample().then( text => {
        console.log(text);
        /*return fetchDataPromiseExample().then( text2 => { 
            console.log(text2);
        });*/ // Lets write this in more readable way
        return fetchDataPromiseExample();
    })
    .then( text2 => {
        console.log(text2);
    });
}, 2000);
