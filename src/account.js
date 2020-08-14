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
    this.transactionLog.unshift(new this.transactionClass({ credit: amount, balance: this.balance }))
    return `${this.formatClass.currency(amount)}deposited. Current balance: ${this.formatClass.currency(this.balance)}`
  }

  withdraw (amount) {
    if (amount > this.balance) return "Insufficient funds";
    this.balance -= amount
    return `${this.formatClass.currency(amount)}withdrawn. Current balance: ${this.formatClass.currency(this.balance)}`

  }
};

module.exports = Account