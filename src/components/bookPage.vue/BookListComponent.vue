<template>
  <SearchBarComponent v-model:searchQuery="searchQuery"/>
  <div v-if="loading" class="flex justify-center items-center h-64">
    <p class="text-gray-500 text-lg">Carregando cursos...</p>
  </div>

  <div v-else-if="filteredBooks.length === 0" class="flex justify-center items-center h-64">
    <p class="text-gray-500 text-lg">Nenhum curso disponível no momento.</p>
  </div>

  <div v-else class="grid grid-cols-2 gap-2">

    <ion-card class="p-0 m-0 mb-4 flex flex-col justify-between"
              v-for="book in filteredBooks"
              :key="book.id"
              @click="signIn(book)"
              style="min-height: 300px;">
      <ion-img :alt="'Image for ' + book.title" :src="'src/assets/img/' + (Math.floor(Math.random() * 5) + 1) + '.png'" />

      <ion-card-header>
        <ion-card-title class="text-sm">{{ book.title }}</ion-card-title>
        <ion-card-subtitle>{{ book.status }}</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content class="text-sm p-2 flex-grow">
        {{ book.category }}
      </ion-card-content>

      <!-- Alinhar o número de membros na parte inferior -->
      <ion-card-subtitle class="p-2 mt-auto">
        <p>+{{ book.users_count }} Membros <ion-icon :icon="peopleSharp"></ion-icon></p>
      </ion-card-subtitle>
    </ion-card>

  </div>
</template>
<script setup lang="ts">
import {onMounted, SearchBarComponent, computed, ref, useCourseStore,
  IonImg, IonIcon, IonCard, IonCardContent,IonCardSubtitle,IonCardTitle,
  IonCardHeader, peopleSharp, useRouter }
  from "@/estudAI/components";
import echo from "@/echo";
import {joinUserForCourse} from "@/api/api";
import {loadingController} from "@ionic/vue";

const courses = useCourseStore();
const searchQuery = ref('');
const router = useRouter()
const loading = ref(true);

onMounted(async () => {
  try {
    await courses.fetchBooks();
  } catch (error) {
    console.error('Erro ao carregar os tópicos:', error);
  } finally {
    loading.value = false;
  }
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

const showLoading = async () => {
  const loading = await loadingController.create({
    message: 'Loading...',
    duration: 2000,
  });
  await loading.present();
};

const signIn = async (course: any) => {
  await showLoading();
  await joinUserForCourse(course.id);
  await router.push('/');
}
</script>