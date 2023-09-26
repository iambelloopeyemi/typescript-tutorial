// Classes
class Invoice {
  // readonly client: string; // can be accessed anywhere but cannot be modified
  // private details: string; // cannot be accessed outside the class but can be modified in the class
  // public amount: number; // default, can be accessed anywhere and modified

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
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
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});