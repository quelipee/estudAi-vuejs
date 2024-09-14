<template>
  <div class="grid grid-cols-1 gap-4">
    <CourseListComponent
        :loading
        v-for="topic in topics.topics"
        @click="chatOpen(topic)"
        :key="topic.id"
        :title="topic.title"
    />
  </div>
</template>
<script setup lang='ts'>
import {CourseListComponent, onMounted, useCourseStore, ref, useRoute, useRouter}
  from "@/estudAI/components";
import {Topic} from "@/types/types";
import echo from "@/echo";

const topics = useCourseStore();
const route = useRoute();
const loading = ref(true);
const router = useRouter();

const chatOpen = (topic: Topic) => {
  topics.setTopic(topic.id);
  router.push({
    name: 'topic',
    params: {
      id : topic.id,
    }
  });
}

onMounted(async () => {
  setTimeout(() => {
    loading.value = false;
  }, 1500);
  await topics.catchCourseTopics(route.params.id);
  echo.channel('topics').listen('.TopicEvent', function (event: any) {
    topics.updateTopics(event);
  });
});
</script>