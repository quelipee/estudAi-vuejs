<template>
    <ion-page>
      <ion-content class="flex flex-col items-center h-full bg-gray-100 p-4">
        <div ref="chatContainer" class="container mx-auto px-4 space-y-5">
          <HeaderComponent/>
            <TitleTopicComponent
                :topicTitle="title"
                :subtitle="subTitle"/>
          <img src="../../assets/img/1.png" alt="Imagem do Tópico" class="w-full h-auto mb-4 rounded-md" />
          <div v-for="message in messages1" :key="message.id">
            <ContentComponent
                :loading="loading"
                :content="message.message.replace(/\n/g, '<br>')"/>
          </div>
          <OptionsComponent/>
        </div>
      </ion-content>
    </ion-page>
  </template>

  <script lang="ts" setup>
  import {
    IonContent, IonPage, useCourseStore, ContentComponent, HeaderComponent, TitleTopicComponent,
    OptionsComponent, useRoute, ref, onMounted } from '@/estudAI/components';
  import echo from "@/echo";
  import {nextTick} from "vue";

  const chat = useCourseStore();
  const route = useRoute();
  const loading = ref(true);
  const messages1 = ref<Array<any>>([]);
  const chatContainer = ref<HTMLIonContentElement | null>(null);
  const title = ref('');
  const subTitle = ref('');

  onMounted(async () => {
    setTimeout(() => {
      loading.value = false;
    }, 2500);

    await chat.setTopic(Number(route.params.id));
    title.value = chat.selectedTopic.title
    subTitle.value = chat.selectedTopic.topic

    await chat.fetchMessageForAPI(chat.selectedTopic.id);
    messages1.value = chat.chat;

    echo.channel('messageUpdated').listen('.MessageUpdatedEvent', async (res : any) => {
      chat.chat.forEach((item: any, index : any) => {
        if(item.id === res.id){
          chat.chat[index] = res;
        }
      });
    });

    echo.channel('message').listen('.MessageEvent', async (res : any) => {
      messages1.value.push(res);
      await nextTick();
      scrollToBottom();
    });
  });

  const scrollToBottom = () => {
    const container = chatContainer.value?.lastElementChild;
    if (container) {
      (container as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
    }
  };
  </script>
  