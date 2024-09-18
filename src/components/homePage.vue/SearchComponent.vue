<template>
  <div>
    <ion-input
        :value="searchQuery"
        @input="$emit('update:searchQuery', $event.target.value)"
        type="text"
        placeholder="Buscar Cursos..."
        class="text-gray-600 text-sm"
        label="Search" label-placement="floating"
        fill="outline"/>
  </div>
</template>
<script setup lang="ts">
import { IonInput } from "@/estudAI/components";
defineProps<{
  searchQuery: string;
}>()
defineEmits(['update:searchQuery']);
</script>