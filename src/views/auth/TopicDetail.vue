<template>
    <ion-page>
      <ion-content class="flex flex-col items-center h-full bg-gray-100 p-4">
        <div class="container mx-auto px-4 space-y-5">
          <HeaderComponent/>
          <TitleTopicComponent
              :subtitle
              :topicTitle/>
          <img src="../../assets/img/1.png" alt="Imagem do Tópico" class="w-full h-auto mb-4 rounded-md" />
          <ContentComponent
              :loading
              :content />
          <OptionsComponent/>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { IonContent, IonPage, ContentComponent, HeaderComponent, TitleTopicComponent, OptionsComponent }
    from '@/estudAI/components';
  
  // Dados fictícios
  const topicTitle = ref('Introdução ao Python');
  const subtitle = ref('Fundamentos e Conceitos Iniciais');
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
  