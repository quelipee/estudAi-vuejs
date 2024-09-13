<template>
    <ion-page>
      <ion-content class="flex flex-col items-center h-full bg-gray-100 p-4">
        <div class="container mx-auto px-4 space-y-5">
          <HeaderComponent/>
          <div v-if="chat.topic && chat.topic.title && chat.topic.topic">
            <TitleTopicComponent
                :topicTitle="chat.topic.title"
                :subtitle="chat.topic.topic"/>
          </div>
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
  import {
    IonContent,
    IonPage,
    useCourseStore,
    ContentComponent,
    HeaderComponent,
    TitleTopicComponent,
    OptionsComponent,
    useRoute
  }
    from '@/estudAI/components';

  const route = useRoute();
  const chat = useCourseStore();

  const content = ref('dasdsa123');

  const loading = ref(true);

  onMounted(async () => {
    setTimeout(() => {
      loading.value = false;
    }, 500);
    //TODO VOLTAR AQUI DEPOIS
    await chat.fetchTopic(Number(route.params.id));
    await chat.openChat(1,1);
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
  