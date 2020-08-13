const Account = require('../account.js')

describe('Account', function () {
  let account;

  test('Should start with an initial balance of 0', function () {
    expect(account.startingBalance).toEqual(0)
  });
});