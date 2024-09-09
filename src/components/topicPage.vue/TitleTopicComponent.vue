<template>
  <div>
    <h1 class="text-2xl font-semibold text-gray-900 mb-2">{{ topicTitle }}</h1>
    <h2 class="text-lg font-medium text-gray-700 mb-4">{{ subtitle }}</h2>
  </div>
</template>
<script setup lang="ts">
  defineProps<{
    topicTitle: string,
    subtitle: string,
  }>();
</script>