// function x(){
//     let name = "Rahul";
//     setTimeout(function(){
//         console.log(name)
//     }, 4000);

//     console.log("Rohit");
//     for(let i = 1; i<=10; i++){
//         console.log(i);
//     }
// }

// x();

// console.log("End");

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



// function printNumber(){
//     for(var i = 1; i<=10; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
// }

// printNumber();




// function printNumber(){
//     for(let i = 1; i<=10; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
// }

// printNumber();




// function printNumber(){
//     for(var i = 1; i<=10; i++){
//         function solve(i){
//             setTimeout(function(){
//                 console.log(i);
//             }, i*1000);
//         }
//         solve(i);
//     }
// }

// printNumber();



function add(){
    console.log(5+7);
}

setTimeout(add(),2000);