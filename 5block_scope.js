// {
//     var a = 10;             // a will still be defined in global because it uses var
//     console.log(a);
// }

// console.log(a);


// {
//     let a = 20;                      // a will be defined in block memory scope as it uses let
//     console.log(a);
// }

// console.log(a);         // this will give error as a is not defined in global because it uses let


// {
//     const a = 100;            // a will be defined in block memory scope as it uses const
//     console.log(a);
// }

// console.log(a);      // this will give error as a is not defined in global because it uses const


// Conclusion : let and const are block scope, var is always global scope even if it is present in block


// {
//     var a = 20;          // var will still be stored in global memory scope
//     let b = 100;
//     const c = 123;     // here let and const are stored in seperate memory space which is block
// }


// function a(){
//     var num = 100;
//     let x = 20;
//     const c = 120;
//     console.log(num,x);
// }

// console.log(num);    // All 3 will give error not defined
// console.log(x);
// console.log(x);


// -----------------------------------------------------------------

// Shadowing

// let num = 100;     // declared in script
// var a = 11;    // declared in global
// const c = 123;    // declared in script

// {
//     let num = 10;      // declared in block
//     var a = 23;         // declared in global
//     console.log(num);    // here num inside block has shadowed outside num
//     console.log(a);     // here a inside block has shadowed outside a
//     console.log(c);     // this will not give any error as c will take its value from script c
// }

// console.log(num);     // here num = 100
// console.log(a);        // here a = 23 
// console.log(c);

// ---------------------------------

// var a = 20;

// {
//     let a = 30;            // We have shadow var using let here 
//     console.log(a);
// }

// console.log(a);



// -------------------------------------
// Illegal Shadowing

// let a = 20;         // declared in script which is a part of global 

// {
//     var a = 100;     // declared in global   (Cant be declared same variable name 2 times so error)
//     console.log(a);
// }

// console.log(a);


// var a = 20;
// let a = 30;
// console.log(a);    // error as var a is declared in global and let a is declared in script which is a part of global


// ------------------------------------

// Block Scope also follow lexical scope like function

// let a = 20;
// {
//     let a = 30;
//     {
//         let a = 40;
//         {
//             let a = 50;
//             console.log(a);
//         }
//         console.log(a);
//     }
// }




// let a = 20;
// {
//     {
//         {
//             console.log(a);
//         }
//         console.log(a);
//     }
// }



// ------------------------------------

// for(let x = 1; x<=5; x++){     // let will be defined in block scope
//     console.log(x);
// }

// for(var a = 1; a<=5; a++){     // var will be defined in global scope
//     console.log(a);
// }


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


// // ---------------------------------------


console.log(a);
{
    console.log(a);
    function a(){
        var b = 2;
        console.log(b);
    }
    a();
}

console.log(a);


// ---------------------------------------

// console.log(b);
// {
//     console.log(b);
//     {
//         console.log(b);
//         {
//             function b(){
//                 var num = 2;
//                 console.log(num);
//             }
//         }
//         console.log(b);
//     }
//     console.log(b);
// }
