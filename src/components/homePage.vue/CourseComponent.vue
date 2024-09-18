<template>
  <SearchComponent v-model:searchQuery="searchQuery"/>
  <div v-if="courses.courses.length > 0" class="grid grid-cols-2 gap-4">
        <div v-for="course in filteredBooks" :key="course.id"
             @click="signIn(course)" class="flex flex-col items-center text-center">
          <ion-img class="w-52 h-32" :title="course.title" members="50" src="src/assets/img/3.png"></ion-img>
          <ion-label class="font-semibold text-gray-600 " for="Python">{{ course.title }}</ion-label>
        </div>
  </div>
  <div v-else class="flex justify-center items-center h-64">
    <p class="text-gray-500 text-lg">Nenhum curso disponível no momento.</p>
  </div>
</template>
<script setup lang="ts">
import {IonImg, IonLabel, useRouter, onMounted, useCourseStore, SearchComponent, ref, computed}
  from "@/estudAI/components";
  import {Course} from "@/types/types";
  import echo from "@/echo";

  const courses = useCourseStore();
  const route = useRouter()
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
    await courses.fetchYourCourses();
    echo.channel('YourCourses').listen('.YourCoursesEvent', async function (event: any) {
      await courses.updateYourCourses(event);
    });
  });

const filteredBooks = computed(() => {
  return courses.courses.filter(book =>
      book.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

</script>