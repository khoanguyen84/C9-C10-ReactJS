// IIFE:  Immediately Invoked Function Expression
// Bước 1: tạo ra hàm
// Bước 2: thực thi
// function sum(n1, n2){
//     console.log(n1  + n2);
// }

// sum(5,7)

(function(n1, n2){
    console.log(n1  + n2);
})(5,7)

;(function(){
    console.log("hello")
})()

// console.log((function(){ console.log("hello") }))