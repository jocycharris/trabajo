const app = document.getElementById("app");

const tasks = [];

function renderTasks() {
  app.innerHTML = `
    <ul>
      ${tasks.map((task, index) => `<li>${task} <button onclick="removeTask(${index})">Eliminar</button></li>`).join("")}
    </ul>
    <input id="taskInput" type="text" placeholder="Nueva tarea" />
    <button onclick="addTask()">Añadir</button>
  `;
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim()) {
    tasks.push(taskInput.value);
    taskInput.value = "";
    renderTasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();

// Registrar el Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/public/service-worker.js")
    .then(() => console.log("Service Worker registrado."))
    .catch((error) => console.error("Error al registrar el Service Worker:", error));
}
