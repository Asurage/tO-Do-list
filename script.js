" use strict";

const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskContainer = document.getElementById("taskContainer");

let tasks = []; // Array to store tasks

function createTask(task) {
  //create task card or create a div element to hold the task
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";

  //left side of the task card
  const left = document.createElement("div");
  left.className = "left";
  taskCard.appendChild(left);

  //checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  left.appendChild(checkbox);
  checkbox.addEventListener("change", function () {
    task.done = checkbox.checked; // Update the task's done status
    if (task.done) {
      taskText.classList.add("checked");
    } else {
      taskText.classList.remove("checked");
    }

    saveTasks(); // Save the updated tasks to localStorage
  });

  //task text
  const taskText = document.createElement("span");
  taskText.textContent = task.text;
  left.appendChild(taskText);

  checkbox.checked = task.done; // Set the checkbox state based on the task's done status
  if (task.done) {
    taskText.classList.add("checked");
  } else {
    taskText.classList.remove("checked");
  }

  taskContainer.appendChild(taskCard);
  //taskInput.value = "";

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "🗑️";
  taskCard.appendChild(deleteBtn);

  //delete button functionality
  deleteBtn.addEventListener("click", function () {
    //delete the task from the tasks array
    const index = tasks.indexOf(task);
    tasks.splice(index, 1); // Remove the task from the array
    saveTasks(); // Save the updated tasks to localStorage

    taskCard.remove();
    taskInput.focus();
  });
}

//function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//load tasks function
function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    tasks.forEach((task) => {
      createTask(task);
    });
  }
}

addBtn.addEventListener("click", function () {
  if (taskInput.value.trim() === "") {
    alert("please enter a task");
    taskInput.value = "";
    taskInput.focus();
    return;
  }

  //taskInput to object
  const task = {
    text: taskInput.value,
    done: false,
  };

  tasks.push(task); // Add the task to the array
  console.log(tasks); // Log the tasks array to the console

  saveTasks();

  createTask(task);

  //improve user experience by clearing the input field and focusing on it after adding a task
  taskInput.value = "";
  taskInput.focus();
});

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  } else if (event.key === "Escape") {
    // Clear the input field when Escape key is pressed
    taskInput.value = "";
  }
});

loadTasks(); // Load tasks from localStorage when the page loads
