// What is Temporal Dead Zone?

// let and const declaration are hoisted but little different than var
// let and const are hoisted in script memory and var in global memory

// console.log(a);              // a will be hoisted in the script memory space  (a:undefined)
// console.log(b);              // b will be hoisted in the global memory scope   (b:undefined)
// let a = 10;        
// var b = 100;          

// The time between when let is undefined to let actually gets value is called Temporal Dead Zone


// -----------------------------------------------------------------------------

// let obj={
//     "a":1,
//     "b":2
// }

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.z)      // undefined  not error   (Important)


// console.log(window);


// // console.log(window.a);
// // let a = 10;
// // console.log(a);
// // console.log(window.a);
// // console.log(this.a);



// console.log(window.b);        // undefined
// var b = 100;
// console.log(b);
// console.log(window.b);
// console.log(this.b);


// -------------------------------------------------------------------------------


// function a(){
//     var z = 10;
// }

// console.log(z);          // z is not allocated any memory in global scope so error not defined
// console.log(window.z);      // z is not in window object so undefined 



// -----------------------------------------------------------------------------------

// console.log(window);
// console.log(this);


// var a = 10;


// ------------------------------------------------------------------------------------


const name = "Rahul";      
console.log(name);