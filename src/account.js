class Account {
  constructor() {
    const STARTING_BALANCE = 0;

    this.balance = STARTING_BALANCE
  }

  add (amount) {
    this.balance += amount
  }

  withdraw (amount) {
    this.balance -= amount
  }
};

module.exports = Account