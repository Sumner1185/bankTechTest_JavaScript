const Account = require('../account.js')
const sinon = require('sinon')
const MockDate = require('mockdate')

describe('Account feature test', () => {
  
  test('Should deposit 1000, then 2000 the next day and withdraw 500 the day after that', () => {
    const firstDay = '2020-08-11T08:00:00.000Z'
    const secondDay = '2020-08-12T08:00:00.000Z'
    const thirdDay = '2020-08-13T08:00:00.000Z'

    const account = new Account();
    let spy = sinon.spy(console, "log")

    MockDate.set(firstDay);
    account.add(1000);
    MockDate.reset();

    MockDate.set(secondDay);
    account.add(2000);
    MockDate.reset();

    MockDate.set(thirdDay);
    account.withdraw(500);
    MockDate.reset();
   
    const statement = [
      "date || credit || debit || balance ",
      "13/08/2020 || || 500.00 || 2500.00 ",
      "12/08/2020 || 2000.00 || || 3000.00 ",
      "11/08/2020 || 1000.00 || || 1000.00 ",
    ].join("\n");

    account.statement();
    sinon.assert.calledWith(spy, statement)

    console.log.restore();
  });
});