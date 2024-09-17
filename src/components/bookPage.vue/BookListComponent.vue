<template>
  <SearchBarComponent v-model:searchQuery="searchQuery"/>
  <div class="grid grid-cols-2 gap-4">
    <div
        v-for="book in filteredBooks"
        :key="book.id"
        @click="signIn(book)"
        class="p-4 bg-white shadow rounded-lg flex flex-col items-center">
      <p class="bg-gray-500 border rounded-2xl p-2
      justify-center text-sm text-white text-center mt-2">Status: {{ book.status }}</p>
      <ion-img src="src/assets/img/3.png" alt="Book Cover" class="w-52 h-32 mb-4" />
      <h2 class="text-md text-center font-semibold text-gray-700">{{ book.title }}</h2>
      <p class="justify-center text-sm text-gray-500 text-center mt-2">{{ book.category }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, SearchBarComponent, computed, ref, useCourseStore, IonImg} from "@/estudAI/components";
import echo from "@/echo";
import {joinUserForCourse} from "@/api/api";
const courses = useCourseStore();

const searchQuery = ref('');

onMounted(async () => {
  await courses.fetchBooks();
  echo.channel('courses').listen('.CoursesEvent', function (event: any) {
    courses.updateBooks(event);
  });
});

const filteredBooks = computed(() => {
  return courses.books.filter(book =>
      book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
      book.status !== 'inactive' &&
      book.status !== 'cancelled' &&
      !courses.courses.some(course => course.id === book.id)
  );
});

const signIn = async (course: any) => {
  await joinUserForCourse(course.id);
}
</script>