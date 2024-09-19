<template>

  <div v-if="loading" class="flex justify-center items-center h-64">
    <p class="text-gray-500 text-lg">Carregando tópicos...</p>
  </div>

  <div v-else-if="topics.topics.length === 0" class="flex justify-center items-center h-64">
    <p class="text-gray-500 text-lg">{{ message }}</p>
  </div>

  <div v-else class="grid grid-cols-1 gap-4">
    <CourseListComponent
        v-for="topic in topics.topics"
        @click="chatOpen(topic)"
        :key="topic.id"
        :title="topic.title"/>
  </div>
</template>
<script setup lang='ts'>
import {CourseListComponent, onMounted, useCourseStore, ref, useRoute, useRouter}
  from "@/estudAI/components";
import { Topic } from "@/types/types";
import echo from "@/echo";
import {fetchMessageChat} from "@/api/api";

const topics = useCourseStore();
const route = useRoute();
const loading = ref(true);
const router = useRouter();
const message = ref('Nenhum tópico disponível no momento.')
const chatOpen = async (topic: Topic) => {
  await topics.setTopic(topic.id);
  await fetchMessageChat(topic.id);
  await router.push({
    name: 'topic',
    params: {
      id: topic.id,
    }
  });
}

onMounted(async () => {
  try {
    await topics.catchCourseTopics(route.params.id);
  } catch (error) {
    console.error('Erro ao carregar os tópicos:', error);
  } finally {
    loading.value = false;
  }

  echo.channel('topics')
      .listen('.TopicEvent', (event: any) => {
        topics.updateTopics(event);
      });
});
</script>