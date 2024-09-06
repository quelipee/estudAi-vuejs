<template>
    <ion-page>
      <ion-content class="flex flex-col items-center h-full bg-gray-100 p-4">
        <div class="w-full max-w-4xl text-center p-5 bg-white rounded-lg shadow-md">
          <!-- Título do Tópico -->
          <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ topicTitle }}</h1>
          <h2 class="text-xl font-semibold text-gray-700 mb-6">{{ subtitle }}</h2>
  
          <!-- Imagem do Tópico -->
          <img src="../../assets/img/1.png" alt="Imagem do Tópico" class="w-full h-auto mb-6 rounded-lg shadow-sm" />
  
          <!-- Conteúdo do Tópico -->
          <div v-if="loading" class="flex justify-center items-center h-full">
            <ion-spinner name="crescent" color="primary" class="text-indigo-600"></ion-spinner>
          </div>
          <div v-else v-html="content" class="text-justify prose prose-lg max-w-full bg-white p-6 rounded-lg shadow-md mb-8"></div>
  
          <!-- Botões Interativos -->
          <div class="flex flex-col space-y-4">
            <ion-button expand="full" color="primary" @click="handleAction('exercises')" class="bg-blue-500">Exercícios</ion-button>
            <ion-button expand="full" color="tertiary" @click="handleAction('explanation')" class="bg-green-500">Explicação</ion-button>
            <ion-button expand="full" color="secondary" @click="handleAction('continue')" class="bg-gray-500">Continuar</ion-button>
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
    <h2 class='text-gray-800 font-bold text-md'>Sobre Python</h2>
    <p class='text-gray-800'>Python é uma linguagem de programação poderosa e de alto nível, ideal para iniciantes e profissionais.</p>
    <br>
    <p class='text-gray-800'>Este tópico cobre:</p>
    <ul class='text-gray-800'>
      <li>Configuração do Ambiente</li>
      <li>Primeiros Passos com Python</li>
      <li>Operadores e Tipos de Dados</li>
      <li>Estruturas de Controle e Funções</li>
    </ul>
    <br>
    <h3 class='text-gray-800'>Objetivos do Tópico</h3>
    <p class='text-gray-800'>Ao final deste tópico, você será capaz de escrever scripts Python básicos e entender os conceitos fundamentais.</p>
  `);
  const loading = ref(true);
  
  // Função para lidar com cliques nos botões
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
  
  .ion-button {
    --border-radius: 0.5rem;
  }
  </style>
  