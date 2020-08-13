class Account {
  constructor() {
    const STARTING_BALANCE = 0;

    this.balance = STARTING_BALANCE
  }

  add = function (amount) {
    this.balance += amount
  }

  withdraw = function (amount) {
    this.balance -= amount
  }
};

module.exports = Account