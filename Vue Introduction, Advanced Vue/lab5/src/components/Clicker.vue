<template>
  <div>
    <slot name="button" :increment="increment">
      <button @click="increment">Click me</button>
    </slot>
    <p>Количество кликов: {{ counter }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  amount: {
    type: Number,
    default: 1
  }
});

const emits = defineEmits(['button-clicked']);

const counter = ref(0);

function increment() {
  counter.value += props.amount;
  emits('button-clicked');
}
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
}
</style> 
