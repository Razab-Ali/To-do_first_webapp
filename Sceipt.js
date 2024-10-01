document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});
