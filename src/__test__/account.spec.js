const Account = require('../account.js')

describe('Account', function () {
  let account;

  test('Should start with an initial balance of 0', function () {
    let account = new Account();

    expect(account.balance).toEqual(0)
  });

  test('Should allow a user to add money to their account', function () {
    let account = new Account();
    account.add(1000);

    expect(account.balance).toEqual(1000)
  });

  test('Should allow a user to withdraw money from their account', function () {
    let account = new Account();
    account.add(1000);
    account.withdraw(500);

    expect(account.balance).toEqual(500);
  });
});