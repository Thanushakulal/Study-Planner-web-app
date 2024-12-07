// Elements
const taskInput = document.getElementById("task-input");
const deadlineInput = document.getElementById("deadline-input");
const alarmTimeInput = document.getElementById("alarm-time-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const progressBar = document.getElementById("progress-bar");
const themeSwitch = document.getElementById("theme-switch");

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
themeSwitch.addEventListener("change", toggleTheme);

// Task Storage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(addTaskToList);

// Add Task
function addTask() {
  const taskName = taskInput.value.trim();
  const deadline = deadlineInput.value;
  const alarmTime = alarmTimeInput.value;

  if (!taskName || !deadline || !alarmTime) {
    alert("Please fill in all fields!");
    return;
  }

  const task = { taskName, deadline, alarmTime, completed: false, alarmTriggered: false };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  addTaskToList(task);

  // Clear Inputs
  taskInput.value = "";
  deadlineInput.value = "";
  alarmTimeInput.value = "";
}

// Add Task to List
function addTaskToList(task) {
  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <div>
      <strong>${task.taskName}</strong>
      <p>Deadline: ${task.deadline}</p>
      <p>Alarm: ${task.alarmTime}</p>
    </div>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  updateProgress();
}

// Update Progress
function updateProgress() {
  const completedTasks = tasks.filter(task => task.completed).length;
  progressBar.value = (completedTasks / tasks.length) * 100;
}

// Delete Task
function deleteTask(button) {
  const taskItem = button.parentElement;
  const taskName = taskItem.querySelector("strong").innerText;

  const updatedTasks = tasks.filter(task => task.taskName !== taskName);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  taskItem.remove();
  updateProgress();
}

// Alarm Functionality
function checkAlarms() {
  const now = new Date();
  const currentTime = now.toTimeString().split(' ')[0].slice(0, 5); // Format: HH:MM

  tasks.forEach(task => {
    if (task.alarmTime === currentTime && !task.alarmTriggered) {
      // Trigger the alarm
      alert(`⏰ Alarm for task: ${task.taskName}`);
      task.alarmTriggered = true; // Mark alarm as triggered
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });
}

// Call checkAlarms every minute
setInterval(checkAlarms, 60000);

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}
