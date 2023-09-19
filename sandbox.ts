//  Dynamic data types
let age: any = 25;
age = true;
age = "luigi";
age = ["luigi", 25, true];
age = { name: "luigi", age: 25 };
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push("mario");
mixed.push(true);
console.log(mixed);

let ninja: { name: any, age: any };
ninja = { name: "luigi", age: 25 };
ninja = { name: 25, age: "luigi" };
