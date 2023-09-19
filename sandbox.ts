// Explicit data types
let character: string;
let age: number;
let isBlackBelt: boolean;
let ninjas: string[] = [];

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = "123";
uid = 123;
// uid = false; // error

let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = [];

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: "mario", age: 20, beltColor: "black" };
