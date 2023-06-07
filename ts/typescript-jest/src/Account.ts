export class Account {
    balance: number;
    statement;
    constructor(balance: number) {
        this.statement = [];
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
        this.balance -= amount;

    }


    printStatement(): string {
        let formatedStatement: string = "";
        this.statement.forEach(element => {
            formatedStatement = formatedStatement.concat(element.date + element.amount + element.balance);

        });
        return formatedStatement;
    }
}
