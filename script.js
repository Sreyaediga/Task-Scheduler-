document.addEventListener("DOMContentLoaded", function () {
    // Load tasks from localStorage
    loadTasks();
});

function scheduleTask() {
    const taskName = document.getElementById('taskName').value;
    const deadline = document.getElementById('deadline').value;

    // Validate inputs
    if (!taskName || !deadline) {
        alert('Please fill in all fields');
        return;
    }

    // Create task object
    const task = {
        name: taskName,
        deadline: deadline
    };

    // Save task to localStorage
    saveTask(task);

    // Display the task in the list
    displayTask(task);

    // Clear form fields
    document.getElementById('taskName').value = '';
    document.getElementById('deadline').value = '';
}

function saveTask(task) {
    // Get existing tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task
    tasks.push(task);

    // Save tasks back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    // Get tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display tasks in the list
    tasks.forEach(displayTask);
}

function displayTask(task) {
    const tasksList = document.getElementById('tasks');
    const li = document.createElement('li');
    li.innerHTML = `<strong>${task.name}</strong> - Deadline: ${task.deadline}`;
    tasksList.appendChild(li);
}