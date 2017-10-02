# Bank Tech Test

### About
Tech test to practice OOD, TDD and tech tests in week 10 of MA.

Clone the repo. Then in the Javascript console run:

```Javascript Console

account = new Account

deposit_transaction = {
     debit: 0,
     credit: 1000,
     date: "12/02/2012",
   }

withdraw_transaction = {
     debit: 500,
     credit: 0,
     date: "12/02/2012",
   }

account.transaction(deposit_transaction)
account.transaction(withdraw_transaction)
account.printTransactionHistory()
```

#### To run the tests

Open SpecRunner.html in a browser.
