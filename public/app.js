import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const me = {
    name: "shaun",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
// console.log(me);
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
// console.log(invOne, invTwo)
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
// DOM and Type Casting
// const anchor = document.querySelector("a")!;
// // if (anchor) {
// //   console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector("form")!
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
