const sinon = require('sinon');
const Transaction = require('../transaction.js');

describe('Transaction', () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction({credit: 1000, debit: 500, balance: 1500})
  })

  test('Should initialise with a credit amount if applicable', () => {
    expect(transaction.credit).toEqual(1000);
  });

  test('Should initialise with a debit amount if applicable', () => {
    expect(transaction.debit).toEqual(500);
  });

  test('Should initialise with a balance amount if applicable', () => {
    expect(transaction.balance).toEqual(1500);
  });
});