// Callback Hell - Pryamid of Dome - Code moving horizontally not vertically
// Inversion of Control - Loose control of our program/function - Giving control to other function

// function add(num1,num2){
//     return num1+num2;
// }

// function isPrime(func){
//     let num = func(4,17);
//     for(let i = 2; i<num; i++){
//         if(num%i==0){
//             return "Not a Prime Number";
//         }
//     }
//     return "A Prime Number";
// }

// console.log(isPrime(add));


// So, we can see here that add function is dependent of isPrime function, add function is waiting for isPrime function to call inside it (This is what giving control to other function means)   --> Inversion of control


// Problem we may face


// function add(num1,num2){
//     return num1+num2;
// }

// function isPrime(func){
//     let num = func;                   // We have not called the function so, it will return "A Prime Number" which is not true
//     for(let i = 2; i<num; i++){
//         if(num%i==0){
//             return "Not a Prime Number";
//         }
//     }
//     return "A Prime Number";
// }

// console.log(isPrime());


// --------------------------------------------------------------

// setTimeout, API fetch are async operation they are not the part of javascript, they take place in web API environment (Browser), so code which are written below it will keep on running till we get response from these kind of async operation

// console.log("Rahul");

// function test(num1,num2){
//     setTimeout(function (){
//         let ans = num1*num2;
//         console.log(ans);
//         // return ans;                        // It is not possible to return from setTimeout
//     },4000);
// }

// console.log(test(4,5));
// console.log("Rohit");




// ----------------------Promise-----------------------

console.log("Rahul");
const userAPI = "https://jsonplaceholder.typicode.com/posts";
const user = fetch(userAPI);
console.log(user);
user.then((result)=>{
    console.log("Result",result);
    console.log(result.url);
})
.catch((err)=>{
    console.log("Error",err);
})
console.log("Rohit");




// console.log("Fetching data...");

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json(); // Parse JSON data
//     })
//     .then(data => {
//         console.log("Data received:", data);
//     })
//     .catch(error => {
//         console.error("There was a problem with the fetch operation:", error);
//     });

// console.log("Request sent, waiting for response...");




// console.log("Fetching data...");

// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json(); // Parse JSON data
//         console.log("Data received:", data);
//     } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//     }
// }

// fetchData();

// console.log("Request sent, waiting for response...");








