describe('Account', function() {

  beforeEach(function() {
     account = new Account();
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
  });

  it('should start with a balance of zero', function() {
    expect(account._balance).toEqual(0);
  });

  it('should start with no transactions', function() {
    expect(account._transaction_history).toEqual({});
  });

  describe('#printTransactionHistory', function() {
    it('can print a statment', function() {
      account.transaction(deposit_transaction)
      account.transaction(deposit_transaction)
      account.transaction(withdraw_transaction)
      expect(account.printTransactionHistory()).toEqual(console.log("hi"))
    });
  });

  describe('#transaction_log', function() {
    it('it can return a transaction', function() {
      deposit_transaction["balance"] = 1000;
      account.transaction_log(deposit_transaction);
      expect(account._transaction_history.transaction1).toEqual(
      {
        debit: 0,
        credit: 1000,
        date: "12/02/2012",
        balance: 1000
      })
    });

    it('can return a particular transactions', function() {
      deposit_transaction["balance"] = 1000;
      account.transaction_log(deposit_transaction);
      withdraw_transaction["balance"] = 500
      account.transaction_log(withdraw_transaction);
      expect(account._transaction_history.transaction2).toEqual(
        {
          debit: 500,
          credit: 0,
          date: "12/02/2012",
          balance: 500
        });
  });

 });

  describe('#deposit',function() {
    it('increses the balance by the amount depositied', function() {
      account.deposit(1000);
      expect(account._balance).toEqual(1000)
    });
  });

  describe('#withdraw', function() {
    it('it debits the balance by the amount withdrawn', function() {
      account.deposit(1000);
      account.withdraw(500);
      expect(account._balance).toEqual(500);
    });
  });

  describe('#trasaction', function() {
    it('increses the balance by the amount depositied', function() {
      account.transaction(deposit_transaction);
      expect(account._balance).toEqual(1000)
    });

    it('decreses the balance by the amount that is withdrawn', function() {
      account.transaction(deposit_transaction);
      account.transaction(withdraw_transaction);
      expect(account._balance).toEqual(500)
    });

    it('updates the transaction history', function() {
      deposit_transaction ["balance"] = 1000
      account.transaction(deposit_transaction)
      expect(account._transaction_history.transaction1).toEqual(
      {
        debit: 0,
        credit: 1000,
        date: "12/02/2012",
        balance: 1000
      })
    });
  });

});
