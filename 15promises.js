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

// There can only be 3 states in Promise - Pending, Fulfilled and Rejected
// Promise objects are immutiable
// Promise is a container for future value
// Promise is an object representing the eventual completion or failure of an async operation



// console.log("Rahul");

// const userAPI = "https://jsonplaceholder.typicode.com/posts";
// const user = fetch(userAPI);
// console.log(user);

// user.then((result)=>{
//     console.log("Result",result);
//     console.log(result.url);
// })
// .catch((err)=>{
//     console.log("Error",err);
// })

// console.log("Rohit");


// ------------------------------------------------------


// const userAPI = "https://jsonplaceholder.typicode.com/posts";
// const user = fetch(userAPI);

// user
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// ------------------------------------------------------


// console.log("Fetching data...");

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         return response.json(); // Parse JSON data
//     })
//     .then((data) => {
//         console.log("Data received:", data);
//     })
//     .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//     });

// console.log("Request sent, waiting for response...");


// -----------------------------------------------------------


// const albumAPI = "https://jsonplaceholder.typicode.com/albums";
// const album = fetch(albumAPI);

// album
//     .then((response)=>{
//         console.log(response);
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         for(let i = 0; i<data.length; i++){
//             console.log(data[i].title);
//         }
//     })
//     .catch((error)=>{
//         console.log(error);
//     })



// Writing own Promise

// const pr = new Promise((resolve,reject)=>{
//     const success = true;
//     if(success){
//         resolve("Promise resolved successfully!");
//     }
//     else{
//         reject("Promise rejected.");
//     }
// })

// pr
//     .then((response)=>{
//         console.log("1");
//         console.log(response);
//         return response;
//     })
//     .then((data)=>{
//         console.log("2");
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log("3")
//         console.log(err);
//     })

// ---------------------------------------

function isPrime(num){
    let ans = true;
    for(let i = 2; i<num; i++){
        if(num%i==0){
            ans = false;
        }
    }

    const isPrimePromise = new Promise((resolve,reject)=>{
        if(ans){
            setTimeout(()=>{
                resolve("Number is Prime");
            },4000)
        }
        else{
            reject("Number is not Prime");
        }
    })

    return isPrimePromise;
}

console.log(isPrime(3));

isPrime(32)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })




