const Transaction = require('../transaction.js');

describe('Transaction', () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction({ credit: 1000, debit: 500, balance: 1500 })
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

    describe('showStatement', () => {
      const mockedDate = new Date(2020, 7, 12);
      const realDateNow = Date.now.bind(global.Date);
      
      beforeAll(() => {
        global.Date = jest.fn(() => mockedDate)
      })

      afterAll(() => {
        global.Date.now = realDateNow;
      });
  
      test('Should have the date displayed correctly as the first element', () => {
        let transaction = new Transaction({ credit: 2000, debit: 1000, balance: 1500 })

        expect(transaction.showStatement()).toEqual("12/08/2020 || 2000.00 || 1000.00 || 1500.00 ");
      });

      test('Should pass in an empty string if no value given', () => {
        let transaction1 = new Transaction({ credit: 2000 })
        let transaction2 = new Transaction({ debit: 1000 })
        let transaction3 = new Transaction({ balance: 1500 })

        expect(transaction1.showStatement()).toEqual("12/08/2020 || 2000.00 || || ");
        expect(transaction2.showStatement()).toEqual("12/08/2020 || || 1000.00 || ");
        expect(transaction3.showStatement()).toEqual("12/08/2020 || || || 1500.00 ");
      });
    });
});