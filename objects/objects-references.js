const myAccount = {
    name: 'John Shepard',
    expenses: 0,
    income: 0
}

const addExpese = function (account, amount) {
    account.expenses += amount;
}

// myAccount points to the same object in memory
addExpese(myAccount, 2.50);
console.log(myAccount);