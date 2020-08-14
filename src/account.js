const Transaction = require('./transaction')
const Print = require('./print')

class Account {
  constructor(transactionClass = Transaction, printer = new Print()) {
    const STARTING_BALANCE = 0;

    this.balance = STARTING_BALANCE;
    this.transactionClass = transactionClass;
    this.printer = printer
    this.transactionLog = []
  }

  add (amount) {
    this.balance += amount
  }

  withdraw (amount) {
    this.balance -= amount
  }
};

module.exports = Account