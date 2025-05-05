<template>
  <div class="popup">
    <p>Are you sure you want to delete this task?</p>
    <button @click="$emit('confirm')">Yes, delete it!</button>
    <button @click="$emit('cancel')">No, cancel!</button>
  </div>
</template>

<script setup>
// No script logic needed for this simple popup
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
button {
  margin: 5px;
}
</style> 
