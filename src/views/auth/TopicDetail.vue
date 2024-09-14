<template>
    <ion-page>
      <ion-content class="flex flex-col items-center h-full bg-gray-100 p-4">
        <div class="container mx-auto px-4 space-y-5">
          <HeaderComponent/>
            <TitleTopicComponent
                :topicTitle="chat.selectedTopic.title"
                :subtitle="chat.selectedTopic.topic"/>
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
  import {ref, onMounted, computed} from 'vue';
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
  //TODO ADJUSTS THIS PART
  const route = useRoute();
  const chat = useCourseStore();
  const loading = ref(true);
  const content = chat.chat.message;

  // const formattedContent = computed(() => {
  //   return content.value.replace(/\n/g, '<br>');
  // });

  onMounted(async () => {
    setTimeout(() => {
      loading.value = false;
    }, 500);
    await chat.setTopic(Number(route.params.id));
    await chat.openChat(chat.selectedTopic.id,chat.selectedTopic.course_id);
    console.log(chat.chat);
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
  