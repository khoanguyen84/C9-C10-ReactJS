// Tạo 1 mảng đặt tên là numbers, giá trị các phần tử trong mảng anh em tự nhập
// map(): bình phương các giá trị có trong mảng numbers
// reduce(): trả về tích các giá trị có trong mảng numbers
// sort(): sắp xếp mảng numbers theo thứ tự giảm dần.
// includes(): kiểm tra giá trị value = 7 có xuất hiện trong mảng numbers hay ko?
let numbers = [3, 5, 6, 7, 7, 5, 3, 3, 2, 5, 6, 8];
// let numbersPower = numbers.map(function(number){
//     return number**2;
// })
let numbersPower = numbers.map((number) => number**2)
console.log(numbersPower)

let result = numbers.reduce((result, number) => result * number)
console.log(result)

let descNumbers = numbers.sort((number1, number2) => number2 - number1)
console.log(descNumbers)

console.log(descNumbers.join("+"))