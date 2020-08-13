const moment = require('moment')

class Transaction {
  constructor ({ credit = null, debit = null, balance = null}) {
    this.credit = credit,
    this.debit = debit,
    this.balance = balance
    this.date = new Date()
  };

  showStatement() {
    return [
      this._formatDate(),
      this._formatCurrency(this.credit),
      this._formatCurrency(this.debit),
      this._formatCurrency(this.balance)
    ].join("|| ");
  }

  _formatDate = () => moment(this.date).format("DD/MM/YYYY ");

  _formatCurrency = (item) => item != null ? `${this._formatDecimals(item)} ` : ""

  _formatDecimals = (value) => parseFloat(value).toFixed(2)
};

module.exports = Transaction;