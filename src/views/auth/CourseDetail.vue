<!-- src/views/CourseDetail.vue -->
<template>
    <ion-page>
      <ion-content>
        <div v-if="loading" class="flex justify-center items-center h-full">
          <ion-spinner name="crescent" color="secondary" class="text-indigo-600"></ion-spinner>
        </div>

        <div v-else class="container mx-auto px-4 space-y-5">
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
    useCourseStore, computed, onMounted, useRoute, ref, watch, IonSpinner
  }
    from "@/estudAI/components";
  const route = useRoute();
  const course = useCourseStore();
  const loading = ref(true);
  const getCourseId = ref(route.params.id);

  const courseName = computed(() =>
      course.selectedCourse.title);

  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 1500);
    course.setCourse(getCourseId.value);
  });

  watch(
      () => route.params.courseId,
      (newCourseId) => {
        getCourseId.value = newCourseId;
      }
  );
  </script>
  
  <style scoped>
  </style>
  