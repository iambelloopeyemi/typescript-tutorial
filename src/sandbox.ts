// let greet: Function;

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;

calc = (numOne, numTwo, action) => {
  if (action == "add") {
    return numOne + numTwo;
  } else {
    return numOne + numTwo;
  }
};

let logDetails: (obj: {name: string, age: number}) => void;

