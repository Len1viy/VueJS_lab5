<script setup lang="ts">
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Clicker from './components/Clicker.vue'
import ToDoList from './components/ToDoList.vue'

function handleClick(n) {
  alert(`Clicker ${n} clicked!`);
}
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  width: 100%;
}
</style>
