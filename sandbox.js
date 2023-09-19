// Inferred data types
// String, Number and Boolean data types
var character = "mario";
var age = 30;
var isBlackBelt = false;
// character = 20; // error
character = "20";
// age = "yoshi"
age = 40;
// isBlackBelt = "yes"; // error
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// Arrays and Objects data types
var names = ["luigi", "mario", "yoshi"];
// names = "luigi"; // error
// names = 20; // error
names = ["toad"];
names.push("toad");
// names.push(3); // error
// names[0] = 3; // error
var numbers = [10, 20, 30];
numbers.push(25);
// numbers.push("shaun"); // error
// numbers[1] = "shaun"; // error
var mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
var ninja = {
    name: "mario",
    belt: "black",
    age: 20,
};
ninja.age = 30;
ninja.name = "ryu";
// ninja.age = "30"; // error
// ninja.skills = ["fighting", "sneaking"]; // error
ninja = {
    name: "yoshi",
    belt: "orange",
    age: 40,
};