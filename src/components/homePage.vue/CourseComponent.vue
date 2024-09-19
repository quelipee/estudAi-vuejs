<template>
  <SearchComponent v-model:searchQuery="searchQuery"/>

  <div v-if="loading" class="flex justify-center items-center h-64">
    <p class="text-gray-500 text-lg">Carregando cursos...</p>
  </div>

  <div v-else-if="courses.courses.length === 0" class="flex justify-center items-center h-64">
    <p class="text-gray-500 text-lg">Nenhum curso disponível no momento.</p>
  </div>

  <div v-else class="grid grid-cols-2 gap-4">
        <div v-for="course in filteredBooks" :key="course.id"
             @click="signIn(course)" class="flex flex-col items-center text-center">
          <ion-img :alt="'Image for ' + course.title" :src="'src/assets/img/' + (Math.floor(Math.random() * 5) + 1) + '.png'" />
          <ion-label class="font-semibold text-gray-600 " for="Python">{{ course.title }}</ion-label>
        </div>
  </div>

</template>
<script setup lang="ts">
import {IonImg, IonLabel, useRouter, onMounted, useCourseStore, SearchComponent, ref, computed}
  from "@/estudAI/components";
  import {Course} from "@/types/types";
  import echo from "@/echo";

  const courses = useCourseStore();
  const route = useRouter()
const loading = ref(true);
  const searchQuery = ref('');
  const signIn = (course : Course) => {
    courses.setCourse(course.id);
    route.push({
      name: 'course',
      params: {
        id: course.id,
      }
    });
  }

  onMounted(async () =>{
    try {
      await courses.fetchYourCourses();
    } catch (error) {
      console.error('Erro ao carregar os tópicos:', error);
    } finally {
      loading.value = false;
    }

    echo.channel('YourCourses').listen('.YourCoursesEvent', function (event: any) {
      courses.updateYourCourses(event);
    });
  });

const filteredBooks = computed(() => {
  return courses.courses.filter(book =>
      book.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

</script>