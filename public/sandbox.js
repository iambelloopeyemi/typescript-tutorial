"use strict";
let greet = () => {
    console.log("hello, world");
};
greet();
let sayHi;
// sayHi = "hello" // error
sayHi = () => {
    console.log("hi");
};
sayHi();
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 5);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
