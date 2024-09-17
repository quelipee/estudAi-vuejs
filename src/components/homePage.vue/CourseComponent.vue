<template>
  <div class="grid grid-cols-2 gap-4">

        <div v-for="course in courses.courses" :key="course.id"
             @click="signIn(course)" class="flex flex-col items-center text-center">
          <ion-img class="w-52 h-32" title="Python" members="50" src="src/assets/img/3.png"></ion-img>
          <ion-label class="font-semibold text-gray-600 " for="Python">{{ course.title }}</ion-label>
        </div>
  </div>

</template>
<script setup lang="ts">
  import { IonImg, IonLabel, useRouter, onMounted, useCourseStore }
    from "@/estudAI/components";
  import {Course} from "@/types/types";
  import echo from "@/echo";
  import {yourCourses} from "@/api/api";

  const courses = useCourseStore();
  const route = useRouter()

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

</script>