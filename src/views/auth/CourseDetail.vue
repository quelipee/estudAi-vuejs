<!-- src/views/CourseDetail.vue -->
<template>
    <ion-page>
      <ion-content class="flex flex-col items-center p-4 bg-gray-100">
        <div class="w-full max-w-md text-center p-5 h-full">
          <!-- Logo e Título -->
          <h3 class="text-3xl mb-5 text-violet-900 font-bold">EstudAI</h3>
          <div class="text-left font-semibold mb-5">
            <h1 class="text-2xl">Curso: {{ courseName }}</h1>
            <h2 class="text-xl text-gray-700">Explorar Tópicos</h2>
          </div>
          <p class="text-left mt-3 mb-6 font-medium text-gray-600">Selecione um tópico abaixo para começar a aprender.</p>
  
          <!-- Imagem ilustrativa -->
          <img src="../../assets/img/1.png" alt="Ilustração do Python" class="w-full h-auto" />
  
          <!-- Lista de Tópicos -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TopicCard 
              v-for="topic in topics" 
              :key="topic.id" 
              :title="topic.title" 
              @select="handleSelectTopic(topic.id)" 
            />
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import TopicCard from '@/components/coursePage.vue/CourseListComponent.vue'; // Ajuste o caminho conforme sua estrutura
  
  // Dados do curso e tópicos
  const courseName = 'Python';
  const topics = ref([
    { id: 1, title: 'Introdução ao Python' },
    { id: 2, title: 'Sintaxe Básica' },
    { id: 3, title: 'Estruturas de Dados' },
    { id: 4, title: 'Programação Orientada a Objetos' },
    { id: 5, title: 'Bibliotecas e Frameworks' }
  ]);
  
  // Função para lidar com a seleção do tópico
  const handleSelectTopic = (topicId: number) => {
    console.log('Tópico selecionado:', topicId);
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui */
  </style>
  