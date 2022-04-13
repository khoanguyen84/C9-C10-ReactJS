// + Hoisting
// + Các loại function 
// 1. Declaration function
// 2. Expression function
// 3. Anonymous function

// + Required parameters và Optional Parameter
// + Callback
// + IIFE
// + Arrow Function

// + prototype

// cls: clean screen
// Con trỏ hệ thống phải được đặt cùng thư mục với file .js muốn thực thi

// Hoisting (variable, declaration function)
// Scope (phạm vi)
// - Global
// - Block code
// var i;
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }
// console.log(i)

// 1. Declaration function
console.log(sum(4, 5))

function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(14, 15))

// 2. Expression function

// const subtract = function (n1, n2) {
//     return n1 - n2;
// }
const subtract = (n1, n2) => n1 - n2;

console.log(subtract(7, 5))
console.log(subtract(17, 5))

// const logger = function(msg){
//     console.log(msg)
// }
const logger = (msg) =>  console.log(msg)
logger("hello world")

// const hello = function(){
//     return "hello everyone!"
// }
const hello = () => "hello everyone!";

console.log(hello())

// 3. Anonymous function
let numbers = [3, 5, 6, 7, 7, 5, 3, 3, 2, 5, 6, 8];
// let result = numbers.reduce(function (total, number){
//     return total + number;
// })
let result = numbers.reduce((total, number) => total + number )
console.log(result)

// 4. create class
function Student(fullname, age){
    this.fullname = fullname;
    this.age = age;

    // 5. create method
    this.getFullname = function(){
        return this.fullname;
    }
    this.setAge = function(age){
        this.age = age;
    }
}
// ES6 (ECMA Script 2015) : var let const
// ES5 trở về trước: var

class Staff{
    constructor(fullname, age){
        this.fullname = fullname;
        this.age = age;
    }

    getFullname(){
        return this.fullname;
    }
    setAge(age){
        this.age = age;
    }
}


