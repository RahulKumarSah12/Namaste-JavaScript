// 1 - Filter

const arr = [2,5,9,1,12,57,86,94,33];

function even(num){
    if(num%2==0){
        return num;
    }
}

const newArr1 = arr.filter(even);
console.log(newArr1);


function notPrime(num){
    for(let i = 2; i<num-1; i++){
        if(num%i==0){
            return num;
        }
    }
}

const newArr2 = arr.filter(notPrime);
console.log(newArr2);


function greaterThan4(num){
    if(num>4){
        return num;
    }
}

const newArr3 = arr.filter(greaterThan4);
console.log(newArr3);


const users = [
    {fn: "Rahul", ln: "Kumar", age:23},
    {fn: "Rohit", ln: "Kumar", age:22},
    {fn: "Virat", ln: "Kohli", age:35},
    {fn: "Rohit", ln: "Sharma", age:37}
]

function solve(users){
    if(users.age>30){
        return users;
    }
}

function firstName(users){
    return users.fn;
}

const newArr4 = users.filter(solve);
const newArr5 = newArr4.map(firstName);
console.log(newArr4);
console.log(newArr5);
