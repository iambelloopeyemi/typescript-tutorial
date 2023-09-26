import { HasFormatter} from "../interfaces/HasFormatter.js"

// Classes
export class Invoice implements HasFormatter {
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