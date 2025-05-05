<template>
  <div>
    <Clicker v-for="n in 100" :key="n" :amount="1" @button-clicked="handleClick(n)">
      <template #button="{ increment }">
        <button @click="increment">Click Clicker {{ n }}</button>
      </template>
    </Clicker>
  </div>
</template>

<script setup>
import Clicker from '../components/Clicker.vue';

function handleClick(n) {
  alert(`Clicker ${n} clicked!`);
}
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  overflow-y: auto;
  width: 100%;
}
button {
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
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
</style>
