<template>
  <div class="text-left font-semibold mb-5">
    <h1 class="text-2xl">Curso: {{ courseName }}</h1>
    <h2 class="text-xl text-gray-700">Explorar Tópicos</h2>
  </div>
  <p class="text-left mt-3 mb-6 font-medium text-gray-600">
    Selecione um tópico abaixo para começar a aprender.
  </p>
</template>
<script setup lang="ts">
  defineProps<{
    courseName: string;
  }>();
</script>