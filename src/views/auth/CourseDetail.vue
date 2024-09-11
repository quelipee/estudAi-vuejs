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
    useCourseStore, onMounted, useRoute, watch
  }
    from "@/estudAI/components";

  const route = useRoute();
  const course = useCourseStore();

  const selectedCourse = course.selectedCourse.title;
  let courseName = selectedCourse;

  onMounted(async () => {
    await course.setCourse(route.params.id);
  })

  watch(() => course.selectedCourse.title,() => {
    courseName = course.showTitleCourse;
  });

  </script>
  
  <style scoped>
  </style>
  