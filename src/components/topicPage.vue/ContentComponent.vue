<template>
  <div>
    <div v-html="convertToMarkdown(content)"
         class="prose prose-sm text-left mb-6 block max-w-sm p-6
          bg-white shadow text-sm text-gray-600">
    </div>
  </div>
</template>
<script setup lang="ts">
import { marked } from "@/estudAI/components";
  defineProps<{
    content: string,
  }>();

const convertToMarkdown = (markdownContent: string) => {
  return marked(markdownContent);
};

</script>