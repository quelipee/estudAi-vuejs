<template>
  <ion-page>
    <ion-content>
      <div class="container mx-auto px-4 space-y-5">
        <HeaderComponent/>
        <BookListComponent/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, HeaderComponent, BookListComponent } from '@/estudAI/components';
</script>
