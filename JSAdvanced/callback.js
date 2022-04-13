// callback
// 1. phải là 1 function
// 2. được truyền vào như 1 tham số
// 3. phải được thực thi
function sum(n1, n2){
    console.log(n1 + n2);
}

// function process(para){
//     para(5,7)
// }

// process(sum)

function process(){
    sum(5,7)
}
process();

// let numbers = [3, 5, 6, 7, 7, 5, 3, 3, 2, 5, 6, 8];
// let result = numbers.map(power)
// function power(number){
//     return number ** 2;
// }
// let result = numbers.map(power)

// const power = function(number){
//     return number**2
// }