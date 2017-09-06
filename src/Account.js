var Account = function(printer = new Printer){
    this._balance = 0;
    this._transaction_history = {};
    this._transaction_count = 0;
    this._printer = printer;
};


//transaction = { debit: 0, credit: 100, date: "12/02/2012"} it still needs the balance
Account.prototype.transaction = function(transaction = {debit: 0, credit: 0, date: "00/00/0000"}) {
  this.deposit(transaction.credit);
  this.withdraw(transaction.debit);
  transaction["balance"] = this._balance;
  this.transaction_log(transaction);
};

  Account.prototype.deposit = function(amount) {
    this._balance += amount
  };

  Account.prototype.withdraw = function(amount) {
    this._balance -= amount
  };

  Account.prototype.transaction_log = function(transaction) {
    this._transaction_history[this.transactionNameIncreamenter()] = transaction
  };

  Account.prototype.transactionNameIncreamenter = function() {
    return "transaction" + (this._transaction_count += 1)
  };

  Account.prototype.printTransactionHistory = function() {
    this._printer.print(this._transaction_history);
  };
