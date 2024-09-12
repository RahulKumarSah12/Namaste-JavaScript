function x() {
    let name = "Rahul";
    function y() {
        console.log(name);
    }
    y();
}

x();



function solve() {
    let num = 20;
    function z() {
        console.log(num);
        console.log(z);
    }
    z();
}

solve();


// function p(){
//     let num = 25;
//     function q(){
//         return num;
//     }
//     num = 100;
//     return q;
// }

// let returnedValue = p();
// console.log(returnedValue);
// console.log(returnedValue());
// console.log(p()());



function a() {
    let max = 200;
    function p() {
        let num = 25;
        function q() {
            return {num,max};
        }
        num = 100;
        return q();
    }
    return p();
}

let func = a();
console.log(func);

