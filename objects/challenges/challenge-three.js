// Add 3 new functions to our expense manager
// addIncome
// resetAccount
// getAccountSummary

const myAccount = {
    name: 'John Shepard',
    expenses: 0,
    income: 0
}

const addIncome = function (account, amount) {
    account.income += amount;
}

const resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

const getAccountSummary = function (account) {
    return {
        accountName: account.name,
        balance: account.income - account.expenses
    }
}

console.log(getAccountSummary(myAccount));