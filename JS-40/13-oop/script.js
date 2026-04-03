class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }
}

class YOO extends Rectangle {
  constructor(name, yo, yo2) {
    super(name);

    this.yo = yo;
    this.yo2 = yo2;
  }
}

//Private

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
  }

  set firstName(value) {
    this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person("steven", "sequeira");
console.log(person1.firstName);

//Getter y Setter con defineProperty()

function Person(firstName, lastName) {
  this.#firstName = firstName;
  this.#lastName = lastName;

  Object.defineProperty(this, "firstName", {
    get: function () {
      return this_firstName;
    },
    set: function (value) {
      this._firstName = value;
    },
  });
}

//Propiedades privadas

class Wallet {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);

const rectObj = {
  name: "Rectangle 1",
  width: 10,
};

Object.seal(rectObj);
