<template>
    <ion-page>
      <ion-content class="flex flex-col items-center h-full bg-gray-100 p-4">
        <div class="w-full max-w-md bg-white rounded-lg shadow-sm p-4">
          <!-- Título do Tópico -->
          <h3 class="w-38 mb-5 text-left ml text-violet-900 font-bold">EstudAI</h3>
          <h1 class="text-2xl font-semibold text-gray-900 mb-2">{{ topicTitle }}</h1>
          <h2 class="text-lg font-medium text-gray-700 mb-4">{{ subtitle }}</h2>
  
          <!-- Imagem do Tópico -->
          <img src="../../assets/img/1.png" alt="Imagem do Tópico" class="w-full h-auto mb-4 rounded-md" />
  
          <!-- Conteúdo do Tópico -->
          <div v-if="loading" class="flex justify-center items-center h-full">
            <ion-spinner name="crescent" color="primary" class="text-indigo-600"></ion-spinner>
          </div>
          <div v-else v-html="content" class="prose prose-sm text-left mb-6"></div>
  
          <!-- Cards Simples -->
          <div class="flex flex-col space-y-4">
            <div @click="handleAction('exercises')" class="cursor-pointer p-3 bg-blue-200 text-blue-800 rounded-md shadow-sm hover:bg-blue-300 transition-colors">
              <h3 class="text-lg font-medium">Exercícios</h3>
              <p class="text-sm">Pratique o que aprendeu.</p>
            </div>
            <div @click="handleAction('explanation')" class="cursor-pointer p-3 bg-green-200 text-green-800 rounded-md shadow-sm hover:bg-green-300 transition-colors">
              <h3 class="text-lg font-medium">Explicação</h3>
              <p class="text-sm">Veja uma explicação detalhada.</p>
            </div>
            <div @click="handleAction('continue')" class="cursor-pointer p-3 bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300 transition-colors">
              <h3 class="text-lg font-medium">Continuar</h3>
              <p class="text-sm">Prossiga para a próxima seção.</p>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  // Dados fictícios
  const topicTitle = ref('Introdução ao Python');
  const subtitle = ref('Fundamentos e Conceitos Iniciais');
  const topicImage = ref('../../assets/img/python.png');
  const content = ref(`
    <h2 class='font-bold text-gray-800 text-md'>Sobre Python</h2>
    <p class='text-gray-800'>Python é uma linguagem de programação poderosa e de alto nível, ideal para iniciantes e profissionais.</p>
    <br>
    <p class='text-gray-800 text-md font-bold'>Este tópico cobre:</p>
    <ul class='text-gray-800'>
      <li>Configuração do Ambiente</li>
      <li>Primeiros Passos com Python</li>
      <li>Operadores e Tipos de Dados</li>
      <li>Estruturas de Controle e Funções</li>
    </ul>
    <br>
    <h3 class='text-gray-800 text-md font-bold'>Objetivos do Tópico</h3>
    <p>Ao final deste tópico, você será capaz de escrever scripts Python básicos e entender os conceitos fundamentais.</p>
  `);
  const loading = ref(true);
  
  // Função para lidar com cliques nos cards
  const handleAction = (action: string) => {
    switch (action) {
      case 'exercises':
        // Redirecionar para a página de exercícios
        console.log('Navegar para Exercícios');
        break;
      case 'continue':
        // Redirecionar para a próxima seção ou continuar
        console.log('Continuar com o curso');
        break;
      case 'explanation':
        // Redirecionar para a seção de explicação detalhada
        console.log('Mostrar Explicação Detalhada');
        break;
    }
  };
  
  // Simulação de carregamento de dados
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 500); // Simulando um atraso de 500ms para o carregamento
  });
  </script>
  
  <style scoped>
  /* Estilos específicos para o componente */
  .prose {
    max-width: none;
  }
  
  .prose h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .prose ul {
    margin-left: 1.5rem;
  }
  
  .ion-content {
    --background: #f7f7f7;
  }
  </style>
  