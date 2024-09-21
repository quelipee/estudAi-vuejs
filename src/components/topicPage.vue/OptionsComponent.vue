<template>
  <div class="grid grid-cols-3 justify-center items-center text-center">
    <ion-card @click="handleAction('Exercícios')">
        <ion-card-title>
          <p class="text-sm text-gray-600 p-3">Exercícios</p>
        </ion-card-title>
    </ion-card>

    <ion-card @click="handleAction('explicação')">
        <ion-card-title>
          <p class="text-sm text-gray-600 p-3">explicação</p>
        </ion-card-title>
    </ion-card>

    <ion-card @click="handleAction('avançar')">
        <ion-card-title>
          <p class="text-sm text-gray-600 p-3">avançar</p>
        </ion-card-title>
    </ion-card>
  </div>
</template>
<script setup lang="ts">
import { useCourseStore } from "@/stores/BookStore";
import { IonCard, IonCardTitle } from "@/estudAI/components";

  const chat = useCourseStore();
  // Função para lidar com cliques nos cards
    const handleAction = async (action: string) => {
      switch (action) {
        case 'Exercícios':
          await chat.openChat(chat.selectedTopic.course_id, chat.selectedTopic.id, action);
          break;

        case 'avançar':
          await chat.openChat(chat.selectedTopic.course_id, chat.selectedTopic.id, action);
          console.log('Continuar com o curso');
          break;

        case 'Mostrar Explicação Detalhada':
          await chat.openChat(chat.selectedTopic.course_id, chat.selectedTopic.id, action);
          console.log('Mostrar Explicação Detalhada');
          break;
      }
    };
  //     await chat.openChat(chat.selectedTopic.course_id,chat.selectedTopic.id);
</script>