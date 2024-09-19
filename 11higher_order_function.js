// // function x(){
// //     console.log("Rahul");
// // }

// // function y(){
// //     x();
// // }

// // // y = higher order function
// // // x = callback function

// // let radius = [3,1,4,6];
// // let area = [];

// // for(let i = 0; i<radius.length; i++){
// //     area[i] = 3.14*radius[i]*radius[i];
// // }

// // console.log(area);


// // ----------------------------------------------------

// let array = [1,4,6,9];

// function solve(array,func){
//     let ans = [];
//     for(let i = 0; i<array.length; i++){
//         ans[i] = func(array[i]);
//     }
//     return ans;
// }

// function area(num){
//     return Math.PI*num*num;
// }

// function diameter(num){
//     return 2*num;
// }

// function circumference(num){
//     return 2*Math.PI*num;
// }


// console.log(solve(array,area));

// console.log(solve(array,diameter));

// console.log(solve(array,circumference));


// // ----------------------------------------------------

// function add(num1,num2){
//     return num1+num2;
// }

// function multiply(num1,num2,num3){
//     return num1*num2*num3;
// }

// function isPrime(num){
//     for(let i = 2; i<num; i++){
//         if(num%i == 0){
//             return "Not a prime";
//         }
//     }

//     return "A prime";
// }

// console.log(isPrime(add(13,4)));
// console.log(isPrime(multiply(1,5,7)));

// Example of higher order function = Map, filter, reduce


// ----------------------------------------------------------


// let arr = [12,45,1,7];

// function square(num){
//     return num*num;
// }

// function cube(num){
//     return num*num*num;
// }

// function random(num){
//     return 2*num+5;
// }

// function solve(array,func){
//     let ans = [];
//     for(let i = 0; i<array.length; i++){
//         ans[i] = func(array[i]);
//     }

//     return ans;
// }


// console.log(solve(arr,square));
// console.log(solve(arr,cube));
// console.log(solve(arr,random));



// // ----------------------------------------------------

// let marks = [23,56,12,78,35,65];

// function isPass(num){
//     if(num>=35){
//         return "Pass";
//     }
//     else{
//         return "Fail";
//     }
// }

// function printStudentsResult(marksArray, condition){
//     let ans = [];
//     for(let i = 0; i<marksArray.length; i++){
//         ans[i] = condition(marksArray[i]);
//     }
//     return ans;
// }

// let isPassArray = printStudentsResult(marks,isPass);
// console.log(isPassArray);



// // ---------------------------------------------------------------


// let obj = {
//     "student1" : 34,
//     "student2" : 77,
//     "student3" : 45,
//     "student4" : 12,
//     "student5" : 98,
// }

// function isPass(num){
//     if(num>=35){
//         return "Pass";
//     }
//     else{
//         return "Fail";
//     }
// }


// function numberOfMarksLessToPass(num){
//     if(num<35){
//         return 35-num;
//     }
//     else{
//         return "Pass";
//     }
// }

// function solve(studentsObj, func){
//     let ans = [];
//     let i = 0;
//     for(let student in studentsObj){
//         ans[i] = func(studentsObj[student]);
//         i++;
//     }
//     return ans;
// }

// console.log(solve(obj,isPass));
// console.log(solve(obj,numberOfMarksLessToPass));


// -------------------Polyfils---------------------------


// a()

// function a(){
//     console.log("Rahul");
// }

// function a(){
//     console.log("Rohit");
// }

// a();



function a(x){
    console.log(x);
}

a(3);

function a(x,y){
    console.log(x,y);
}

a(2,4);