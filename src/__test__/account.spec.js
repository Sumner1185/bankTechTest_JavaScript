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
});