const sinon = require('sinon');
const Transaction = require('../transaction.js');

describe('Transaction', () => {

  test('Should initialise with a credit amount if applicable', () => {
    let transaction = new Transaction({ credit: 1000 });

    expect(transaction.credit).toEqual(1000);
  });

  test('Should initialise with a debit amount if applicable', () => {
    let transaction = new Transaction({ debit: 500 });

    expect(transaction.debit).toEqual(500);
  });

  test('Should initialise with a balance amount if applicable', () => {
    let transaction = new Transaction({ balance: 1500 });

    expect(transaction.balance).toEqual(1500);
  });
});