// function add(num1,num2){
//     return num1+num2;
// }


// function isEven(func){
//     if(func(1,5)%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let ans = isEven(add);
// console.log(ans);



// setTimeout(function(){
//     console.log(5+6);
// },2000);


// let count = 0;
// document.getElementById("btn").addEventListener("click", function show(){
//     count = count + 1;
//     console.log("Button Clicked", count);
// })




function solve(){
    document.getElementById('submit').addEventListener("click", function print(){
        for(let i = 1; i<=5; i++){
            setTimeout(function(){
                console.log(i);
            }, i*1000);
        }
        setTimeout(() => {
            console.log("End");
        }, 6000);
    })
}

solve();



function program(){
    document.getElementById('one').addEventListener('click', function(){
        console.log(1);
    })
    document.getElementById('two').addEventListener('click', function(){
        console.log(2);
    })
    document.getElementById('three').addEventListener('click', function(){
        console.log(3);
    })
    document.getElementById('four').addEventListener('click', function(){
        console.log(4);
    })
    document.getElementById('equal').addEventListener('click', function(){
        console.log("Equal");
    })
}

program();