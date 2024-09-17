// function x() {
//     let name = "Rahul";
//     function y() {
//         var a = 24;
//         console.log(a);
//         console.log(name);
//     }
//     y();
// }

// x();



// function solve(){
//     var num = 24;
//     function func(){
//         return num;
//     }
//     return func;
// }

// let ans = solve();
// let x = ans();
// console.log(x);



// function x(){
//     let a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();
// z();




// function z() {
//     let b = 700;
//     function x() {
//         let a = 7;
//         function y() {
//             console.log(a,b);
//         }
//         a = 100;
//         return y;
//     }
//     b = 1000;
//     return x;
// }

// let m = z();
// let n = m();
// n();




// function solve() {
//     let num = 20;
//     function z() {
//         console.log(num);
//         console.log(z);
//     }
//     z();
// }

// solve();




// function p(){
//     let num = 25;
//     function q(){
//         return num;
//     }
//     num = 100;
//     return q;
// }

// let returnedValue = p();
// console.log(returnedValue);
// console.log(returnedValue());
// console.log(p()());



// function a() {
//     let max = 200;
//     function p() {
//         let num = 25;
//         function q() {
//             return {num,max};
//         }
//         num = 100;
//         return q();
//     }
//     return p();
// }

// let func = a();
// console.log(func);




// function a(){
//     const i = 20;
//     function b(){
//         console.log(i)
//     }
//     return b;
// }

// a()();




// Uses of Closure
// 1 - Module Design Pattern
// 2 - Currying
// 3 - Function like once
// 4 - Memoize
// 5 - setTimeout