// function x(){
//     console.log("Rahul");
// }

// function y(){
//     x();
// }

// // y = higher order function
// // x = callback function

// let radius = [3,1,4,6];
// let area = [];

// for(let i = 0; i<radius.length; i++){
//     area[i] = 3.14*radius[i]*radius[i];
// }

// console.log(area);


// ----------------------------------------------------

let array = [1,4,6,9];

function solve(array,func){
    let ans = [];
    for(let i = 0; i<array.length; i++){
        ans[i] = func(array[i]);
    }
    return ans;
}

function area(num){
    return Math.PI*num*num;
}

function diameter(num){
    return 2*num;
}

function circumference(num){
    return 2*Math.PI*num;
}


console.log(solve(array,area));

console.log(solve(array,diameter));

console.log(solve(array,circumference));


// ----------------------------------------------------

function add(num1,num2){
    return num1+num2;
}

function multiply(num1,num2,num3){
    return num1*num2*num3;
}

function isPrime(num){
    for(let i = 2; i<num; i++){
        if(num%i == 0){
            return "Not a prime";
        }
    }

    return "A prime";
}

console.log(isPrime(add(13,4)));
console.log(isPrime(multiply(1,5,7)));

// Example of higher order function = Map, filter, reduce


// -------------------Polyfils---------------------------



