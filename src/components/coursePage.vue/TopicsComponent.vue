<template>
  <div class="grid grid-cols-1 gap-4">
    <CourseListComponent
        v-for="topic in topics"
        :key="topic.id"
        :title="topic.title"
        @select="handleSelectTopic(topic.id)"
    />
  </div>
</template>
<script setup lang='ts'>
import { CourseListComponent } from "@/estudAI/components";
import {ref} from "vue";
const topics = ref([
  { id: 1, title: 'Introdução ao Python' },
  { id: 2, title: 'Sintaxe Básica' },
  { id: 3, title: 'Estruturas de Dados' },
  { id: 4, title: 'Programação Orientada a Objetos' },
  { id: 5, title: 'Bibliotecas e Frameworks' }
]);

const handleSelectTopic = (topicId: number) => {
  console.log('Tópico selecionado:', topicId);
};
</script>