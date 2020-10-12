const todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
}

// initial load
renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputText = e.target.elements.newTodo.value.trim();
    if (inputText.length > 0) {
        todos.push({
            id: uuidv4(),
            text: inputText,
            completed: false
        });
    }
    e.target.elements.newTodo.value = '';
    saveTodos(todos);
    renderTodos(todos, filters);
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})
