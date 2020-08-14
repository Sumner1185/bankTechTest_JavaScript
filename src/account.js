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
    this.addTransaction({ credit: amount, balance: this.balance });
    return `${this.formatClass.currency(amount)}deposited. Current balance: ${this.formatClass.currency(this.balance)}`
  }

  withdraw (amount) {
    if (amount > this.balance) return "Insufficient funds";
    this.balance -= amount
    this.addTransaction({ debit: amount, balance: this.balance });
    return `${this.formatClass.currency(amount)}withdrawn. Current balance: ${this.formatClass.currency(this.balance)}`
  }

  addTransaction (transObj) {
    this.transactionLog.unshift(new this.transactionClass(transObj))
  }
};

module.exports = Account