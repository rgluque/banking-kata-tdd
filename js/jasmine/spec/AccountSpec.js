describe("Account", function() {
    var account ;
    beforeEach(function() {
        const hiker = new Hiker()
    });
  
    it('When deposit is called', function() {
      expect(account.deposit(200)).toEqual(100);
      });
  
      it('When withdraw is called', function() {
        expect(account.withdraw(500)).toEqual(500);
        });
      it('When printStatement is called', function() {
        expect(account.printStatement('24.12.2015 ')).toEqual("24.12.2015 ");
        });
   
  });
  