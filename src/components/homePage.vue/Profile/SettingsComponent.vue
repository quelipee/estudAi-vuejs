<template>
  <div class="mt-6 bg-white rounded-lg shadow p-4">
    <p class="text-sm text-gray-400 mb-3">General Settings</p>
    <ion-item lines="none">
      <ion-icon :icon="settings" slot="start"></ion-icon>
      <ion-label>
        Mode
        <p class="text-sm text-gray-400">Dark & Light</p>
      </ion-label>
      <ion-toggle slot="end" :checked="isDarkMode" @ionChange="toggleDarkMode"></ion-toggle>
    </ion-item>

    <ion-item lines="none" button>
      <ion-icon :icon="keyOutline" slot="start"></ion-icon>
      <ion-label>Change Password</ion-label>
    </ion-item>
    <ion-item lines="none" button>
      <ion-icon :icon="languageOutline" slot="start"></ion-icon>
      <ion-label>Language</ion-label>
    </ion-item>
  </div>
</template>
<script setup lang="ts">
  import { IonIcon, IonItem, IonLabel,IonToggle, languageOutline, keyOutline, settings }
    from "@/estudAI/components";
  import {ref} from "vue";

  // Variável de estado para saber se o modo escuro está ativado
  const isDarkMode = ref(false);

  // Função para alternar o modo escuro
  const toggleDarkMode = (event: any) => {
    isDarkMode.value = event.detail.checked;  // Atualiza o estado
    if (isDarkMode.value) {
      document.body.classList.add('dark');  // Adiciona a classe 'dark' para forçar o modo escuro
    } else {
      document.body.classList.remove('dark');  // Remove a classe 'dark' para voltar ao modo claro
    }
  };
</script>
<style>

</style>