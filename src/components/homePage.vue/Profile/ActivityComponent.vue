<template>
  <div class="mt-6 bg-white rounded-lg shadow p-4">
    <p class="text-sm text-gray-400 mb-3">Information</p>
    <ion-item lines="none" button>
      <ion-icon :icon="informationCircleOutline" slot="start"></ion-icon>
      <ion-label>About App</ion-label>
    </ion-item>
    <ion-item lines="none" button>
      <ion-icon :icon="documentTextOutline" slot="start"></ion-icon>
      <ion-label>Terms & Conditions</ion-label>
    </ion-item>
    <ion-item lines="none" button>
      <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
      <ion-label>Privacy Policy</ion-label>
    </ion-item>
    <ion-item lines="none" button>
      <ion-icon :icon="shareSocialOutline" slot="start"></ion-icon>
      <ion-label>Share This App</ion-label>
    </ion-item>
  </div>
</template>
<script setup lang="ts">
  import { shareSocialOutline, lockClosedOutline, documentTextOutline,
    informationCircleOutline, IonItem, IonLabel }
    from '@/estudAI/components';
</script>