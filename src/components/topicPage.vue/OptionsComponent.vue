<template>
  <div>
    <div class="flex flex-row items-center space-x-1 justify-between mb-5">
      <div @click="handleAction('Exercícios')"
           class="cursor-pointer p-3 bg-blue-200 text-blue-800 rounded-md
           shadow-sm hover:bg-blue-300 transition-colors w-1/2 text-center">
        <h3 class="text-sm font-medium">Exercícios</h3>
      </div>
      <div @click="handleAction('Mostrar Explicação Detalhada')"
           class="cursor-pointer p-3 bg-green-200 text-green-800 rounded-md
           shadow-sm hover:bg-green-300 transition-colors w-1/2 text-center">
        <h3 class="text-sm font-medium">Explicação</h3>
      </div>
      <div @click="handleAction('Continuar')"
           class="cursor-pointer p-3 bg-gray-200 text-gray-800 rounded-md
           shadow-sm hover:bg-gray-300 transition-colors w-1/2 text-center">
        <h3 class="text-sm font-medium">Continuar</h3>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useCourseStore} from "@/stores/BookStore";

  const chat = useCourseStore();
  // Função para lidar com cliques nos cards
    const handleAction = async (action: string) => {
      switch (action) {
        case 'Exercícios':
          await chat.openChat(chat.selectedTopic.course_id, chat.selectedTopic.id, action);
          break;

        case 'Continuar':
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