<template>
  <div class="grid grid-cols-1 gap-4">
    <CourseListComponent
        v-for="topic in topics.topics"
        :key="topic.id"
        :title="topic.title"
        @select="handleSelectTopic(topic.id)"
    />
  </div>
</template>
<script setup lang='ts'>
import {CourseListComponent, onMounted, useCourseStore } from "@/estudAI/components";
import {useRoute} from "vue-router";
import {watch} from "vue";
const topics = useCourseStore();

const route = useRoute();

const handleSelectTopic = (topicId: number) => {
  console.log('Tópico selecionado:', topicId);
};

onMounted(async () => {
  await topics.catchCourseTopics(route.params.id);
});

watch(() => topics.topics, () => {
  topics.catchCourseTopics(route.params.id);
});
</script>