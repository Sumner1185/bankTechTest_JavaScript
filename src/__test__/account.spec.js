const Account = require('../account.js');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account()
  })

  test('Should start with an initial balance of 0', () => {
    expect(account.balance).toEqual(0)
  });

  test('Should allow a user to add money to their account', () => {
    account.add(1000);

    expect(account.balance).toEqual(1000)
  });

  test('Should allow a user to withdraw money from their account', () => {
    account.add(1000);
    account.withdraw(500);

    expect(account.balance).toEqual(500);
  });

  test('Should return a message with amount deposited and remaining balance', () => {
    account.add(200)

    expect(account.add(800)).toEqual(
      "800.00 deposited. Current balance: 1000.00 "
    )
  });

  test('Should return a message with amount withdrawn and remaining balance', () => {
    account.add(1000);

    expect(account.withdraw(500)).toEqual(
      "500.00 withdrawn. Current balance: 500.00 "
    )
  });

  test('Should return message if user tries to withdraw more than they have', () => {
    account.add(500);

    expect(account.withdraw(1000)).toEqual(
      "Insufficient funds"
    );
  });

  test('Should add a transaction object to the transactionLog', () => {
    account.add(500);
    account.withdraw(100);

    expect(account.transactionLog.length).toEqual(2);
    expect(account.transactionLog[1].credit).toEqual(500);
    expect(account.transactionLog[1].balance).toEqual(500);
    expect(account.transactionLog[0].debit).toEqual(100);
    expect(account.transactionLog[0].balance).toEqual(400);
  });
});
