"use strict";
// Question 22
// let array = ["item1","item1","item3","item4","item5"];
// console.log(array[5]);
// console.log(array[4])
// Question 23
// let number = 56;
// console.log(number==56);
// console.log(number>20);
// console.log(number>40);
// console.log(number<70);
// console.log(number%2==0);
// console.log(number==0);
// console.log(number<40);
// console.log(number>60);
// console.log(number%6==0);
// console.log(number<10);
// Question 24
let string1 = "This is a computer";
let string2 = "this is a mouse";
console.log(string1 == string2);
console.log(string1 != string2);
// Test using the lower case function 
let string3 = "country";
let string4 = "CounTRy";
console.log(string4.toLowerCase() == string3);
// Tests using Numerical values 
let Number1 = 56;
let Number2 = 48;
console.log(Number1 == Number2);
console.log(Number1 <= Number2);
console.log(Number1 >= Number2);
console.log(Number1 > Number2);
console.log(Number1 < Number2);
// Tests using And / or Operators 
let a = 12;
let b = 9;
let c = 5;
if (b > c || b > a) {
    console.log("b is greater than some numbers");
}
if (a > b && a > c) {
    console.log("a is greater than both b and c ");
}
// // Tests using array 
// let array2: string[] = ["usman", "ali", "khalid", "khursheed"];
// console.log(array2.includes("Ahmed")); // false
// console.log(!array2.includes("Umar")); // true
