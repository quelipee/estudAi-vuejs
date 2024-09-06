<template>
    <div class="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div class="flex items-center space-x-2">
          <h3 class="w-38 mb-5 text-left ml text-violet-900 font-bold">EstudAI</h3>
        </div>
        <IonIcon :icon="menuIcon" class="text-gray-500 w-6 h-6" />
      </div>
</template>
<script setup lang="ts">
import { menuIcon, IonIcon, bookIcon  } from '@/estudAI/components';
</script>