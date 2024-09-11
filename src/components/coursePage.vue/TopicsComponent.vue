<template>
  <div class="grid grid-cols-1 gap-4">
    <CourseListComponent
        v-for="topic in titleTopics"
        :key="topic.id"
        :title="topic.title"
        @select="handleSelectTopic(topic.id)"
    />
  </div>
</template>
<script setup lang='ts'>
import {CourseListComponent, onMounted, useCourseStore, ref } from "@/estudAI/components";
import {useRoute} from "vue-router";
import {watch} from "vue";
const topics = useCourseStore();

const route = useRoute();

const handleSelectTopic = (topicId: number) => {
  console.log('Tópico selecionado:', topicId);
};

const titleTopics = ref<string[]>([]);

onMounted(async () => {
  await topics.catchCourseTopics(route.params.id);
});

watch(() => topics.topics, (value, oldValue) => {
  if (value !== oldValue){
    titleTopics.value = topics.showTitleTopics;
    topics.catchCourseTopics(route.params.id);
  }
  // computed(() => topics.topics); // opcao 2
});
</script>