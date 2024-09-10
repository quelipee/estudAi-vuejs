<template>
  <div>
    <input
        :value="searchQuery"
        @input="$emit('update:searchQuery', $event.target.value)"
        type="text"
        class="w-full px-4 py-2 text-sm text-gray-700 bg-white border rounded-full focus:outline-none focus:border-purple-500"
        placeholder="Buscar livros..."
    />
    <ion-icon
        :name="searchOutline"
        class="absolute top-3 right-4 text-gray-500 text-lg"
    ></ion-icon>
  </div>
</template>
<script setup lang="ts">
import { searchOutline } from "@/estudAI/components";
defineProps<{
  searchQuery: string;
}>()

defineEmits(['update:searchQuery']);
</script>