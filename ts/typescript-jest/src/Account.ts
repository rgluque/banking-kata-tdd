export class Account {
    balance: number;
    statement;
    constructor(balance: number, statement: []) {
        this.statement = statement;
        this.balance = balance;
    }

    deposit(amount: number): void {
        let date = new Date().toLocaleDateString();
        this.statement.push({ date: date, amount: '+' + amount, balance: this.balance + amount });
        this.balance += amount;
    }

    withdraw(amount: number): void {
        let date = new Date().toLocaleDateString();
        this.statement.push({
            date: date, amount: '-' + amount, balance: this.balance + amount
        });
        this.balance = this.balance - amount;

    }


    printStatement(): string {
        let statemenList: string = "";

        this.statement.forEach(element => {
            statemenList = statemenList.concat(element.date + element.amount + element.balance);

        });
        return statemenList;
    }
}
