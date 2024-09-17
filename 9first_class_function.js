// What is First Class Function?

// Function Statement v/s Function Expression v/s Function Declaration



// a) Function Statement aka Function Declaration

// solve();
// function solve(){
//     console.log("Rahul");
// }

// solve();


// // b) Function Expression

// console.log(a);
// // a();                  // As a is not a function as of now it is a variable which is undefined so it will give error as we are calling it
// var a = function(){
//     console.log("Rahul");
// }

// a();


// The major difference between these 2 is hoisting


// c) Anonymous Function
// function (){                           // Function without a name is called Anonymous Function but this will give error (syntax error)
//     console.log("Rahul")                // Function statement require name 
// }


// But we can send this an anonymous function as argument



// d) Named Function Expression

// var a = function xyz(){
//     console.log("Rahul");
//     console.log("Rohit");
//     console.log(xyz);
//     // xyz();                   // It will form infinite loop 
// }
// // console.log(a);
// a();

// xyz();     // This will give error (xyz is not defined) in global scope. xyz is defined in the local of function xyz

// --------------------------------------------------------------------

// Difference parameter and Argument 

// Argument is actual value that we send in a function

// ------------------------------------------------------------------


// First Class Function aka First class Citizen

// All functions in js are called First Class Function - The ability of a function to pass function as an argument and also return function is called First Class Function


// We can also send function as argument in js

// function solve(func){
//     console.log(func);
//     func();
// }

// solve(function(){
//     let a = 20;
//     let b = 30;
//     console.log(a+b);
// })


// --------------------------


// function solve(func){
//     console.log(func);
//     func();
// }


// function add(){
//     let a = 20;
//     let b = 30;
//     console.log(a+b);
// }

// solve(add);


// --------------------------

// function solve(func){
//     console.log(func);
//     console.log(func());
// }

// solve(()=>{
//     let a = 23;
//     let b = 26;
//     return a+b;
// })



// --------------------------


// function solve(func){
//     console.log(func);
//     return func;
// }

// let ans = solve(()=>{
//     let a = 23;
//     let b = 26;
//     return a+b;
// })

// console.log(ans);


// -----------------------------

// function solve(){
//     return function(){
//         let a = 40;
//         let b = 20;
//         return a+b;
//     }
// }

// console.log(solve());
// console.log(solve()());





// Important

// function solve(){
//     solve();            // Forming a continous loop (Stack Overflow error)
// }

// solve();