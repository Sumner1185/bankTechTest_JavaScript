const Transaction = require('./transaction')
const Print = require('./print')
const Format = require('./format')

class Account {
  constructor(transactionClass = Transaction, printer = new Print(), formatClass = new Format()) {
    const STARTING_BALANCE = 0;

    this.balance = STARTING_BALANCE;
    this.transactionClass = transactionClass;
    this.formatClass = formatClass;
    this.printer = printer
    this.transactionLog = []
  }

  add (amount) {
    this.balance += amount
    return `${this.formatClass.currency(amount)}deposited. Current balance: ${this.formatClass.currency(this.balance)}`
  }

  withdraw (amount) {
    this.balance -= amount
  }
};

module.exports = Account