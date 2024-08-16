document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Add task
    addBtn.addEventListener('click', addTask);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            const listItem = createTodoItem(taskText);
            todoList.appendChild(listItem);
            todoInput.value = '';
            todoInput.focus();
        }
    }

    // Create a new to-do item element
    function createTodoItem(taskText) {
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        const taskSpan = document.createElement('span');
        taskSpan.className = 'todo-text';
        taskSpan.textContent = taskText;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.innerHTML = '&#10004;';
        completeBtn.addEventListener('click', () => toggleComplete(taskSpan));

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.innerHTML = '&#9998;';
        editBtn.addEventListener('click', () => editTask(taskSpan));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&#10060;';
        deleteBtn.addEventListener('click', () => deleteTask(listItem));

        actionsDiv.appendChild(completeBtn);
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        listItem.appendChild(taskSpan);
        listItem.appendChild(actionsDiv);

        return listItem;
    }

    // Toggle task completion
    function toggleComplete(taskSpan) {
        taskSpan.classList.toggle('completed');
    }

    // Edit task
    function editTask(taskSpan) {
        const currentText = taskSpan.textContent;
        const newText = prompt('Edit your task:', currentText);
        if (newText !== null && newText.trim() !== '') {
            taskSpan.textContent = newText.trim();
        }
    }

    // Delete task
    function deleteTask(listItem) {
        todoList.removeChild(listItem);
    }
});