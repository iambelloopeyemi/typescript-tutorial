let greet = () => {
  console.log("hello, world");
};

greet();

let sayHi: Function;

// sayHi = "hello" // error

sayHi = () => {
  console.log("hi");
};

sayHi();

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 5);

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7);
