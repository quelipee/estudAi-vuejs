<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center h-full">
      <ion-spinner name="crescent" color="primary" class="text-indigo-600"></ion-spinner>
    </div>

    <div v-else v-html="convertToMarkdown(content)"
         class="prose prose-sm text-left mb-6 block max-w-sm p-6
          bg-white shadow text-sm text-gray-600">
    </div>
  </div>
</template>
<script setup lang="ts">
import { IonSpinner,marked } from "@/estudAI/components";
  defineProps<{
    loading: boolean,
    content: string,
  }>();

const convertToMarkdown = (markdownContent: string) => {
  return marked(markdownContent);
};

</script>