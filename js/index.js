'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready');

    const todoForm = document.querySelector('#todo');

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskInput = this.querySelector('input[name="taskEntry"]');
        generateList(taskInput);
    });

    function generateList(taskInput) {
        // Get List item
        const taskList = document.querySelector('#taskList');
        // Generate the LI element
        const taskElement = document.createElement('li');
        // Put the form value in the LI element
        taskElement.textContent = taskInput.value;
        // Add input to the list 
        taskList.appendChild(taskElement);
        clearInput(taskInput);
    }

    function clearInput(input) {
        input.value = '';
        return;
    }
});