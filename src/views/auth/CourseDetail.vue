<!-- src/views/CourseDetail.vue -->
<template>
    <ion-page>
      <ion-content>
        <div class="container mx-auto px-4 space-y-5">
          <HeaderComponent/>
          <TitleComponent :courseName/>
          <img src="../../assets/img/1.png" alt="Ilustração do Python" class="w-full h-auto" />
          <TopicsComponent/>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import {
    HeaderComponent, TitleComponent, TopicsComponent, IonContent, IonPage,
    useCourseStore, onMounted, useRoute
  }
    from "@/estudAI/components";
  import {computed} from "vue";

  const route = useRoute();
  const course = useCourseStore();

  onMounted(async () => {
    await course.setCourse(route.params.id);
  })

  const selectedCourse = computed(() => course.selectedCourse.title);
  const courseName = selectedCourse;

  </script>
  
  <style scoped>
  </style>
  