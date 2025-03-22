function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Toggle button text
    var btn = document.getElementById("toggleBtn");
    btn.innerText = btn.innerText === "Dark-Mode" ? "Light-Mode" : "Dark-Mode";
}

// to-dolist
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);

    saveTasks();
    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach((li) => {
        tasks.push(li.innerText.replace("Delete", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach((taskText) => {
        let li = document.createElement("li");
        li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let btn = document.getElementById("toggleBtn");
    btn.innerText = btn.innerText === "Dark-Mode" ? "Light-Mode" : "Dark-Mode";
}

// time-manager






