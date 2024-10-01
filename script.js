document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Toggle completion on click
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete'; // Class for styling
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent li click event
            if (confirm('Are you sure you want to delete this task?')) {
                li.remove(); // Remove the list item
            }
        });

        // Append button to list item and add to task list
        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        
        // Clear input field
        taskInput.value = '';
    }
});
