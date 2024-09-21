<template>
    <ion-page>
      <ion-content class="flex flex-col items-center h-full bg-gray-100 p-4">
        <div ref="chatContainer" class="container mx-auto px-4 space-y-5">
          <HeaderComponent/>
            <TitleTopicComponent
                :topicTitle="title"
                :subtitle="subTitle"/>
          <img src="../../assets/img/1.png" alt="Imagem do Tópico" class="w-full h-auto mb-4 rounded-md" />

          <div v-if="loading" class="flex justify-center items-center h-full">
            <ion-spinner name="crescent" color="primary" class="text-indigo-600"></ion-spinner>
          </div>

          <div v-else-if="message.length === 0" class="flex text-center justify-center items-center h-64">
            <p class="text-gray-500 text-md">Nenhum conteudo no momento, escolha umas das 3 opções.</p>
          </div>
          <div v-else>
            <div>
              <ContentComponent :content="message.replace(/\n/g, '<br>')"/>
            </div>

            <div v-for="message in messages1" :key="message.id">
              <ContentComponent
                  :loading="loading"
                  :content="message.message.replace(/\n/g, '<br>')"/>
            </div>
          </div>
          <OptionsComponent/>
        </div>
      </ion-content>
    </ion-page>
  </template>

  <script lang="ts" setup>
  import {
    IonContent, IonPage, useCourseStore, ContentComponent, HeaderComponent, TitleTopicComponent,
    OptionsComponent, useRoute, ref, onMounted, IonSpinner
  } from '@/estudAI/components';
  import echo from "@/echo";
  import {nextTick} from "vue";
  import {firstMessage} from "@/api/api";

  const chat = useCourseStore();
  const route = useRoute();
  const loading = ref(true);
  const messages1 = ref<Array<any>>([]);
  const chatContainer = ref<HTMLIonContentElement | null>(null);
  const title = ref('');
  const subTitle = ref('');
  const message = ref('');
  onMounted(async () => {
    setTimeout(() => {
      loading.value = false;
    }, 2500);

    message.value = await firstMessage(Number(route.params.id));

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
  