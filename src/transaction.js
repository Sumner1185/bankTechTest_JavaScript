class Transaction {
  constructor ({ credit = null, debit = null, balance = null}) {
    this.credit = credit,
    this.debit = debit,
    this.balance = balance
  }
}

module.exports = Transaction;