Bank Tech test is a small project designed to practice code quality, test-driven development and process. It has been completed as a JavaScript implementation in Node.

I have also done an implementation in Ruby **[available here]**.

The application allows you to create an account, deposit funds into it, withdraw from it, and print statements that capture the account history and print to the screen.

<div align="center">
 
 ### Navigate to:
  
 [![specification](https://img.shields.io/badge/-Specification-blue)](#specification)
 [![Quick-Start](https://img.shields.io/badge/-Quick%20Start-blue)](#quick-start)
 [![Screen-Preview](https://img.shields.io/badge/-Screen%20Preview-blue)](#screen-preview)
 [![Dependencies](https://img.shields.io/badge/-Dependencies-blue)](#dependencies)
  
</div>

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance Criteria

**Given** a client makes a deposit of 1000 on 10-08-2020
**And** a deposit of 2000 on 13-08-2020
**And** a withdrawal of 500 on 14-08-2020
**When** she prints her bank statement
**Then** she would see:

```
date || credit || debit || balance 
14/08/2020 || || 500.00 || 2500.00 
13/08/2020 || 2000.00 || || 3000.00 
10/08/2020 || 1000.00 || || 1000.00
```

## Quick Start

1. Clone this repo
2. Install dependencies with:
```
$ npm install
```
3. Run tests with:
```
$ npm test
```
4. Run the Node REPL:
```
$ node
```
5. Require in `account.js` with:
```
> const Account = require('./src/account.js')
```
6. Create new account with:
```
> let bankAccount = new Account();
```
7. Use the account with the following functions:

| **Function** | **Description** |
|--------------|-----------------|
| bankAccount.add(amount); | Deposit any value you choose into the account as the amount parameter |
| bankAccount.withdraw(amount); | Withdraw any value you choose from the account as the amount parameter. Although account must have at least that balance or 'Insuffient funds" will be shown |
| bankAccount.statement(); | Will print statement to teh screen showing transaction history including dates, amounts and balance after each transaction |

Below is an example of what would be shown on the screen:

## Screen Preview

<p align="center">
 <img src=images/screen_preview.png width=40%>
</p><br><br>


## Dependencies

**Production:**
<br>
**[Moment]** - Time formatting library.

**Development:**
<br>
**[MockDate]** - A JavaScript mockdate object used to change when "now" is for testing purposes.
<br>
**[Jest]** - JavaScript testing framework.
<br>
**[Sinon]** - Standalone spies, stubs and mocks for JavaScript.

<!-- dependency links -->
[Moment]: https://momentjs.com/
[MockDate]: https://www.npmjs.com/package/mockdate
[Jest]: https://jestjs.io/
[Sinon]: https://sinonjs.org/

<!-- project link -->
[available here]: https://github.com/Sumner1185/BankTechTest
