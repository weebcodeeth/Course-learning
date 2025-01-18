// Primitive 

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const name = "lakshya"                          // typeof string 
const rollnumber = 102                          // typeof number
const isLoggedIn = false                        // typeof boolean
const outsidetemp = null                        // typeof Object
let userEmail;                // undefined      // typeof undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigInt = 32145678543n


// console.log(typeof userEmail);

// console.log(typeof bigInt);


// Referance (Non primitive)

//Array, Objects, Functions

const heros = ["batman", "thinker", "joker"];   // typeof Object

let myObj = {                                   // typeof Object
    myName: "lakshya",
    age: 22,
}

// const myfunction = function () {                // type of function 
//     console.log("how are u?");
    
// }

// console.log(typeof myfunction);


// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
// and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors 
// if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.


//+++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)
 
// Stack

let myYoutubename = "lakshyamishra"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// Heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "lakshya@google.com"

console.log(userOne.email);
console.log(userTwo.email);




