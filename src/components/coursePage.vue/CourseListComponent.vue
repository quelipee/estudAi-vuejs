<!-- src/components/TopicCard.vue -->
<template>
  <div 
    class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300" 
    @click="handleClick"
  >
    <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

// Definindo as propriedades e eventos
const props = defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  (e: 'select'): void;
}>();

// Função para emitir o evento de seleção do tópico
const handleClick = () => {
  emit('select');
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
