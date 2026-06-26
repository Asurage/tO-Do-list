" use strict";
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskContainer = document.getElementById("taskContainer");

addBtn.addEventListener("click", function () {
  if (taskInput.value.trim() === "") {
    alert("please enter a task");
    taskInput.value = "";
    taskInput.focus();
    return;
  }
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
    if (checkbox.checked) {
      taskText.classList.add("checked");
    } else {
      taskText.classList.remove("checked");
    }
  });

  //task text
  const taskText = document.createElement("span");
  taskText.textContent = taskInput.value;
  left.appendChild(taskText);
  taskContainer.appendChild(taskCard);
  taskInput.value = "";
  taskCard.appendChild(left);

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "🗑️";
  taskCard.appendChild(deleteBtn);

  //delete button functionality
  deleteBtn.addEventListener("click", function () {
    taskCard.remove();
    taskInput.focus();
  });
});

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
