type StringorNum = string | number;
type ObjWithName = { name: string; uid: StringorNum }

const logDetails = (uid: StringorNum, item: string): void => {
  console.log(`${item} has a uid of ${uid}`);
};

logDetails(1, "Tomato");

const greet = (user: ObjWithName): void => {
  console.log(`${user.name} says hello`);
};

console.log("Opeyemi");

const greetAgain = (user: ObjWithName): void => {
  console.log(`${user.name} says hello`);
};
