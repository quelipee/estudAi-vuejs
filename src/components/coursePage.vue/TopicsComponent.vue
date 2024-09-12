<template>
  <div class="grid grid-cols-1 gap-4">
    <CourseListComponent
        :loading
        v-for="topic in titleTopics"
        @click="chatOpen(topic)"
        :key="topic.id"
        :title="topic.title"
    />
  </div>
</template>
<script setup lang='ts'>
import {CourseListComponent, onMounted, useCourseStore, ref, watch, useRoute, useRouter}
  from "@/estudAI/components";
import {Topic} from "@/types/types";

const topics = useCourseStore();
const route = useRoute();
const loading = ref(true);
const titleTopics = ref<any[]>([]);
const router = useRouter();

const chatOpen = (topic: Topic) => {
  console.log(topic);
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
});

watch(() => topics.topics, (value, oldValue) => {
  if (value !== oldValue){
    titleTopics.value = topics.showTitleTopics;
    topics.catchCourseTopics(route.params.id);
  }
  // computed(() => topics.topics); // opcao 2
});
</script>