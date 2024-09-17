// setTimeout(()=>{
//     console.log(5);
// },3000);
// console.log("Rahul");  // JavaScript does not wait for anyone

// // ---------------------------------

// setTimeout(function(){
//     console.log(11);
// },3000);

// // -----------------------------------


// let print = function(){
//     console.log("l am print function");
// }

// setTimeout(print,4000);


// var sub = function(x,y){
//     console.log(x-y);
// }
// setTimeout(sub(20,10),4000);        // doubt



// var add = function(a,b){
//     function solve(){
//         console.log(a+b);
//     }
//     return solve;
// }

// setTimeout(add(20,40),3000);     // doubt


// ------------------------------------------


// function x(){
//     let name = "Rahul";
//     setTimeout(function(){
//         console.log(name);
//     }, 4000);

//     console.log("Rohit");
//     for(let i = 1; i<=10; i++){
//         console.log(i);
//     }
// }

// x();
// console.log("End");


// --------------------------------------

// function print(){
//     setTimeout(function(){
//         console.log(1);
//     },1000);
//     setTimeout(function(){
//         console.log(2);
//     },2000);
//     setTimeout(function(){
//         console.log(3);
//     },3000);
//     setTimeout(function(){
//         console.log(4);
//     },4000);
// }

// print();

// ---------------------------------------

// function a(){
//     {var x = 5;}
//     {var x = 6;}
//     let y = 10;
//     console.log(x);           // no error as x is defined in global scope not in block scope
//     console.log(y);
// }

// a();


// function a(){
//     {let x = 5;}
//     {let x = 6;}
//     let y = 10;
//     console.log(x);       // error as x is defined in block scope and we are trying to print in local scope of a()
//     console.log(y);
// }

// a();



// for(let x = 1; x<=5; x++){     // let will be defined in block scope
//     console.log(x);
// }

// for(var a = 1; a<=5; a++){     // var will be defined in global scope
//     console.log(a);
// }


// function a(){
//     for(let x = 1; x<=5; x++){     // let will be defined in block scope
//         console.log(x);
//     }
// }

// a();



// function a(){
//     for(var x = 1; x<=5; x++){     // let will be defined in block scope
//         console.log(x);
//     }
// }

// a();


// --------------------------------------------------------------



// function printNumber(){
//     for(var i = 1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
// }

// printNumber();




// function printNumber(){
//     for(let i = 1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
// }

// printNumber();


// ---------------------------------------------------------

// function printNumber(){
//     for(let i = 1; i<=5; i++){
//         function solve(i){
//             setTimeout(function(){
//                 console.log(i);
//             }, i*1000);
//         }
//         solve(i);
//     }
// }

// printNumber();



// -------------------------------------------


// function a(){
//     let x = 24;
//     function b(a1){
//         let num = 20;
//         console.log(a1);
//         console.log(num);
//     }
//     b(18);
// }

// a();


// -------------------------------------------

// function add(){
//     console.log(5+7);
// }

// setTimeout(add(),2000);






// ------------------------setTimeout Trust issue----------------------------

