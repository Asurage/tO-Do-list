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
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.textContent = taskInput.value;
  taskContainer.appendChild(taskCard);
  taskInput.value = "";

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
