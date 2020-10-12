// Get saved todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    try {
        return todosJSON? JSON.parse(todosJSON) : [];
    } catch (e) {
        return [];
    }

}

// Save todos to localStorage
const saveTodos = (todos) => localStorage.setItem('todos', JSON.stringify(todos));

// Render Todos based on filters
const renderTodos = (todos, filters) => {
    const todosEl = document.querySelector('#todos')
    let filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    // filtering by hideComplete itself will hide all todos
    // based off of hideComplete include the notes that have not been completeds
    filteredTodos = filteredTodos.filter(todo => !filters.hideCompleted || !todo.completed);

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    todosEl.innerHTML = '';
    generateSummaryDOM(incompleteTodos);

    if (filteredTodos.length == 0) {
        const messageEl = document.createElement('p');
        messageEl.textContent = 'No todos to show';
        messageEl.classList.add('empty-message');
        todosEl.appendChild(messageEl);
    } else {
        filteredTodos.forEach((todo) => {
            generateTodoDOM(todo);
        });
    }
};

const removeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

const toggleTodo = (todos, id) => {
    // return the actual match
    // pass in what we determine makes a match (think comparator)
    const todo = todos.find(todo => todo.id === id);
    if (todo !== null) {
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkBox = document.createElement('input');
    const spanEl = document.createElement('span');
    const removeButton = document.createElement('button');

    checkBox.setAttribute('type', 'checkbox');
    spanEl.textContent = todo.text;
    removeButton.textContent = 'remove';
    removeButton.classList.add('button', 'button--text');

    // Setup container
    todoEl.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    todoEl.appendChild(containerEl);

    if (todo.completed) {
        checkBox.checked = true;
    }

    removeButton.addEventListener('click', (e) => {
        removeTodo(todo.id);
        renderTodos(todos, filters);
        saveTodos(todos);
    })

    checkBox.addEventListener('change', (e) => {
        toggleTodo(todos, todo.id);
        renderTodos(todos, filters);
        saveTodos(todos);
    });

    containerEl.appendChild(checkBox);
    containerEl.appendChild(spanEl);
    containerEl.appendChild(removeButton);

    document.querySelector('#todos').appendChild(todoEl);
}

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    const plural = incompleteTodos.length === 1? '' : 's';
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;
    summary.classList.add('list-title');
    document.querySelector('#todos').appendChild(summary);
}