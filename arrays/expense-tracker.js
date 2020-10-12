const account = {
    name: 'John Shepard',
    expenses: [{
        description: 'coffee',
        amount: 8.50
    }, {
        description: 'sandwich',
        amount: 5.00
    }, {
        description: 'milk',
        amount: 2.00
    }],
    income: 100,
    addExpense : function (description, amount) {
        this.expenses.push({description: description, amount: amount});
    },
    getAccountSummary: function () {
        const reducer = (accumulator, item) => accumulator + item.amount;
        const result = this.income - this.expenses.reduce(reducer, 0);
        console.log(`${account.name} has $${result} in expenses.`);
    }
}

// Expense - description, amount
// Create methods to put things in expenses

// addExpense(description, amount)
// getAccountSummary() total up all expenses and prints message: User has $0.00 in expenses


account.addExpense('milk tea', 5.00);
console.log(account);
account.getAccountSummary();