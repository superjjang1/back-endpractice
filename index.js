//callback examples
const greet = require("./gree");
const hoo = require("./owl");
const bark = require('./dog');
// const woof = bark();
// greet(bark, "Tony");

/*
create another animal module, based off of dog.js
require it into index.js
call greet, using new animal module function.

*/
const horse = require('./horse');
// greet(horse, "Jake");

const dragon = require('./dragon');
// greet(dragon, "Josh");
// greet(hoo,"Dude");

function helloWorld() {
    console.log("hello World!");
};
// setTimeout and setInterval are basically ticketMaster.
// setTimeout - you pass it a function, it waits, then calls
// setInterval - you pass it a function, it waits, calls, waits, callit
console.log("about to call setInterval")
// setInterval(helloWorld, 2000);
// setInterval(function helloWorld() {
//     console.log("hello World!");
// }, 1000);
setInterval(()=> {
    console.log("hello World!");
}, 1000);


// helloWorld();

//========================
//module examples

//0. grab specific sound using .<keyname>`
// const catSound = require("./cat");
// console.log(catSound.cat);

//1-a. grab specific sound *before* assignment
// const catSound = require("./cat").cat;
// console.log(catSound);
//1-b.substitution, from in to out
// // 
// console.log(require("./cat").cat);

//2. "Destructuring" - "pluck a specific value out of an object"
// const {cat, kitten} = require("./cat");
// console.log(cat, kitten);
// when would I destructure?
// when you want one to three individual values.
// if you want a lot more, just bring in the whole object.

