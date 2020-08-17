Bank Tech test is a small project designed to practice code quality, test-driven development and process. It has been completed as a JavaScript implementation in Node.

I have also done an implementation in Ruby **[available here]**.

The application allows you to create an account, deposit funds into it, withdraw from it, and print statements that capture the account history and print to the screen.

<div align="center">
 
 ### Navigate to:
  
 [![specification](https://img.shields.io/badge/-Specification-blue)](#specification)
  
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

<!-- project link -->
[available here]: https://github.com/Sumner1185/BankTechTest
