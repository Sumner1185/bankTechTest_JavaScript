const sinon = require('sinon');
const Transaction = require('../transaction.js');

describe('Transaction', () => {

  test('Should initialise with a credit amount', () => {
    let transaction = new Transaction({ credit: 1000 });

    expect(transaction.credit).toEqual(1000);
  })
})