var Printer = function() {};

Printer.prototype.print = function(transactionHistory) {
  console.log("date || credit || debit || balance")
  for(i = 0; i < Object.keys(transactionHistory).length; i++) {
    console.log(transactionHistory["transaction" + (i + 1)].date + " || " +
                transactionHistory["transaction" + (i + 1)].credit + " || " +
                transactionHistory["transaction" + (i + 1)].debit + " || " +
                transactionHistory["transaction" + (i + 1)].balance )
  }

};
