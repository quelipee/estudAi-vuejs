<!-- src/components/TopicCard.vue -->
<template>
  <div v-if="loading" class="flex justify-center items-center h-full">
    <ion-spinner name="crescent" color="secondary" class="text-indigo-600"></ion-spinner>
  </div>

  <div v-else
       class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300"
       @click="handleClick"
  >
    <h2 class="text-sm font-bold text-gray-600">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { IonSpinner } from "@/estudAI/components";

defineProps<{
  title: string;
  loading: boolean;
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
