describe("Account", function() {
    var account ;
    beforeEach(function() {
      account = new Account();
      console.log('generacion de account');
    });
  
    it('When deposit is called', function() {
      expect(account.deposit(1)).toEqual(1);
      });
  
      it('When withdraw is called', function() {
        expect(account.withdraw(1)).toEqual(1);
        });
      it('When printStatement is called', function() {
        expect(account.printStatement('hola')).toEqual("hola");
        });
   
  });
  