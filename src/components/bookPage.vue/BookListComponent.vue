<template>
  <SearchBarComponent v-model:searchQuery="searchQuery"/>
  <div class="grid grid-cols-2 gap-4">
    <div
        v-for="book in filteredBooks"
        :key="book.id"
        class="p-4 bg-white shadow rounded-lg flex flex-col items-center"
    >
      <img :src="book.cover" alt="Book Cover" class="w-24 h-32 mb-4" />
      <h2 class="text-md text-center font-semibold text-gray-700">{{ book.title }}</h2>
      <p class="justify-center text-sm text-gray-500">{{ book.author }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { SearchBarComponent } from "@/estudAI/components";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string
}

const books = ref<Book[]>([
  {
    id: 1,
    title: "Aprendendo Vue.js",
    author: "Maria Silva",
    cover: "https://placehold.co/100x150/png"
  },
  {
    id: 2,
    title: "Dominando Tailwind CSS",
    author: "João Santos",
    cover: "https://placehold.co/100x150/png"
  },
  {
    id: 3,
    title: "Introdução ao Ionic",
    author: "Carlos Andrade",
    cover: "https://placehold.co/100x150/png"
  }
]);

const searchQuery = ref('');
const filteredBooks = computed(() => {
  return books.value.filter(book =>
      book.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
});
</script>