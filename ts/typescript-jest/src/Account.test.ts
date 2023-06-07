import { Account } from './Account';

describe('Account deposit is called', () => {
    let account;
    beforeEach(function () {
        account = new Account(100, []);
    });

    it('When deposit is called with 200 and return 300', function () {
        account.deposit(200);
        expect(account.balance).toEqual(300);
    });

    it('When deposit is called with 400 and returned 500', function () {
        account.deposit(400);
        expect(account.balance).toEqual(500);
    });


})


describe('Account withdraw is called, init with 300 of balance', () => {
    let account;
    beforeEach(function () {
        account = new Account(300, []);
    });


    it('When withdraw is called with 100', function () {
        account.withdraw(100);
        expect(account.balance).toEqual(200);
    });

    it('When withdraw is called with 400', function () {
        account.withdraw(400);
        expect(account.balance).toEqual(-100);
    });

})

describe('Account deposit is called, init with 100 of balance', () => {
    let account;
    beforeEach(function () {
        account = new Account(100, []);
    });

    it('When printStatement is called', function () {
        let date = new Date().toLocaleDateString();
        account.deposit(200);
        let recived = account.printStatement();
        expect(recived).toEqual(date.toString() + "+200" + "300")

    });

})