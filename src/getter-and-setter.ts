export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `seretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);
// card.owner = 'Ham';
console.log(card.owner);
// card.secretNumber:
console.log(card.debugPrint());
card.secretNumber = 9876543210;
console.log(card.debugPrint());

console.log(card.secretNumber);