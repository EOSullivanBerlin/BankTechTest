describe('Printer', function(){

  beforeEach(function() {
    printer = new Printer
    transactionHistory = {
      "transaction1": {
        debit: 500,
        credit: 0,
        date: "12/02/2012",
      }
    }
    transactionHistory2 = {
      "transaction1": {
        debit: 500,
        credit: 0,
        date: "12/02/2012",
      },
      "transaction2": {
        debit: 500,
        credit: 0,
        date: "12/02/2012",
      }
    }
    exapectedString = "date || credit || debit || balance" + "\n" + "12/02/2012 || 500 || 0 || 500"
    exapectedString2 = "date || credit || debit || balance" + "\n" + "12/02/2012 || 500 || 0 || 500" + "\n" + "12/02/2012 || 0 || 500 || 1000"
  });

  describe('#bankstatment', function() {
    it('console logs a trasaction', function() {
      expect(printer.print(transactionHistory)).toEqual(console.log(exapectedString))
    });
    it('logs numerous transactions', function() {
      expect(printer.print(transactionHistory2)).toEqual(console.log(exapectedString2))
    });


  });
  });
