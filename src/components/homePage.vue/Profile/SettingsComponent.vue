<template>
  <div class="mt-6 bg-white rounded-lg shadow p-4">
    <p class="text-sm text-gray-400 mb-3">General Settings</p>
    <ion-item lines="none">
      <ion-icon :icon="settings" slot="start"></ion-icon>
      <ion-label>
        Mode
        <p class="text-sm text-gray-400">Dark & Light</p>
      </ion-label>
      <ion-toggle slot="end"></ion-toggle>
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
  import { IonIcon, IonItem, IonLabel,IonToggle, languageOutline, keyOutline, settings } from "@/estudAI/components";
</script>