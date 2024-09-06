<template>
    <div class="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div class="flex items-center space-x-2">
          <IonIcon :icon="bookIcon" class="text-purple-600 w-8 h-8" />
          <h1 class="text-2xl font-semibold text-purple-600">EstudAI</h1>
        </div>
        <IonIcon :icon="menuIcon" class="text-gray-500 w-6 h-6" />
      </div>
</template>
<script setup lang="ts">
import { menuIcon, IonIcon, bookIcon  } from '@/estudAI/components';
</script>