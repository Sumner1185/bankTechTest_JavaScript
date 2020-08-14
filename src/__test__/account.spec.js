const Account = require('../account.js')

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
    account.add(1000)

    expect(account.withdraw(500)).toEqual(
      "500.00 withdrawn. Current balance: 500.00 "
    )
  });
});