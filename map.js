// 1 - Map

const arr = [33,6,12,7];

function triple(num){
    return 3*num;
}

const newArr1 = arr.map(triple);
console.log(newArr1);

function isEven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}

const newArr2 = arr.map(isEven);
console.log(newArr2);


function isPrime(num){
    for(let i = 2; i<num-1; i++){
        if(num%i == 0){
            return "Not A Prime";
        }
    }

    return "A Prime";
}

const newArr3 = arr.map(isPrime);
console.log(newArr3);

console.log(arr);



const myArr = [2,5,9,1,0];

function digitToWord(num){
    const arr = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];

    for(let i = 0; i<=num; i++){
        if(i == num){
            return arr[i];
        }
    }
}

const newArr4 = myArr.map(digitToWord);
console.log(newArr4);



function binary(num){
    return num.toString(2);
}

const newArr5 = myArr.map(binary);
console.log(newArr5);



const users = [
    {fn: "Rahul", ln: "Kumar", age:23},
    {fn: "Rohit", ln: "Kumar", age:22},
    {fn: "Virat", ln: "Kohli", age:35},
    {fn: "Rohit", ln: "Sharma", age:37}
]

function fullName(users){
    return users.fn+" "+users.ln;
}

const newArr6 = users.map(fullName);
console.log(newArr6);
