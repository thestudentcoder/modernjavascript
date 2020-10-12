const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: false,
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}];

console.log(`You have ${todos.length} todos!`);

todos.forEach((item, index) => {
    const num = index + 1;
    console.log(`${num}. ${item.text}`);
})

const deleteTodo = (todos, textToRemove) => {
    const index = todos.findIndex(todo => todo.text.toLowerCase() === textToRemove.toLowerCase());
    if (index > 0) {
        todos.splice(index, 1);
    }
}

const getThingsTodo = (todos) => todos.filter((todo) => !todo.completed);

const sortTodos = (todos) => todos.sort((a,b) => a.completed - b.completed);
// deleteTodo(todos, 'do work2');
// console.log(todos);
//
// console.log(getThingsTodo(todos));
sortTodos(todos);
console.log(todos);