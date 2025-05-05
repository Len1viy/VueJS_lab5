<template>
  <div>
    <h1>ToDo List</h1>
    <input v-model="newTask" placeholder="New Task" />
    <button @click="addTask">Add</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ completed: task.completed }">{{ task.name }}</span>
        <button @click="confirmDelete(index)">Delete</button>
      </li>
    </ul>
    <Popup v-if="showPopup" @confirm="deleteTask" @cancel="cancelDelete" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Popup from './Popup.vue';

const newTask = ref('');
const tasks = ref([]);
const showPopup = ref(false);
const taskToDelete = ref(null);

async function addTask() {
  if (newTask.value.trim()) {
    tasks.value.push({ name: newTask.value, completed: false });
    newTask.value = '';
    saveTasks();
  }
}

function confirmDelete(index) {
  taskToDelete.value = index;
  showPopup.value = true;
}

async function deleteTask() {
  tasks.value.splice(taskToDelete.value, 1);
  showPopup.value = false;
  saveTasks();
}

function cancelDelete() {
  showPopup.value = false;
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
}

function loadTasks() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks);
  }
}

async function toggleTaskCompletion(index) {
  const task = tasks.value[index];
  task.completed = !task.completed;
  saveTasks();
}

loadTasks();
</script>

<style scoped>
div {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  color: #333;
}
input[type="text"] {
  width: calc(100% - 90px);
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 15px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #0056b3;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
</style> 
