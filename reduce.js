const arr = [2,15,8,13,34];

function sumOfArrayElement(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }

    return sum;
}

console.log(sumOfArrayElement(arr));


// 1 - Reduce


function sum(acc,curr){
    acc = acc + curr;
    return acc;
}

const ans1 = arr.reduce(sum,0);
console.log(ans1);


function multiply(multiple, current){
    multiple = multiple*current;
    return multiple;
}

const ans2 = arr.reduce(multiply,1);
console.log(ans2);


function max(ans, curr){
    if(curr>ans){
        ans = curr;
    }

    return ans;
}

const ans3 = arr.reduce(max,arr[0]);
console.log(ans3);