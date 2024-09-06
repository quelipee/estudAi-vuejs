<template>
    <div>
        <div class="flex items-center justify-center mx-4 mt-6 space-x-2">
        <IonInput placeholder="Subject, Class, etc..." class="bg-white rounded-full px-4 w-full border border-gray-300" />
        <IonIcon :icon="settingsIcon" class="text-purple-500 w-6 h-6" />
      </div>
    </div>
</template>
<script setup lang="ts">
import { IonIcon, IonInput, settingsIcon  } from '@/estudAI/components';
</script>